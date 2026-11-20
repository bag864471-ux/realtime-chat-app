const Message = require('../models/Message');
const Conversation = require('../models/Conversation');
const { encryptMessage, decryptMessage } = require('../utils/encryption');

module.exports = (socket, io) => {
  console.log('User connected:', socket.id);

  // Join conversation room
  socket.on('join_conversation', (conversationId) => {
    socket.join(conversationId);
    console.log(`User joined conversation: ${conversationId}`);
  });

  // Send message
  socket.on('send_message', async (data) => {
    try {
      const { conversationId, content, type, senderId } = data;

      // Encrypt message
      const encryptedContent = encryptMessage(content);

      // Save to database
      const message = new Message({
        conversation: conversationId,
        sender: senderId,
        content: encryptedContent,
        type: type || 'text'
      });

      await message.save();

      // Update conversation
      await Conversation.findByIdAndUpdate(conversationId, {
        lastMessage: message._id,
        updatedAt: new Date()
      });

      // Emit to all users in conversation
      io.to(conversationId).emit('new_message', {
        ...message.toObject(),
        content: decryptMessage(encryptedContent)
      });
    } catch (error) {
      console.error('Error sending message:', error);
      socket.emit('error', { message: 'Failed to send message' });
    }
  });

  // Typing indicator
  socket.on('typing', ({ conversationId, userId, userName }) => {
    socket.to(conversationId).emit('user_typing', {
      userId,
      userName,
      conversationId
    });
  });

  // Mark message as read
  socket.on('mark_read', async ({ conversationId, messageIds, userId }) => {
    try {
      await Message.updateMany(
        { _id: { $in: messageIds } },
        { $addToSet: { readBy: userId } }
      );

      io.to(conversationId).emit('message_read', {
        messageIds,
        readBy: userId
      });
    } catch (error) {
      console.error('Error marking messages as read:', error);
    }
  });

  // Disconnect
  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
};
