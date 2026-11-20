<div align="center">

# 💬 Real-Time Chat Application

### Modern, secure, and feature-rich real-time messaging platform

![React](https://img.shields.io/badge/React-18.2-blue.svg)
![Node.js](https://img.shields.io/badge/Node.js-18+-green.svg)
![Socket.io](https://img.shields.io/badge/Socket.io-4.7-black.svg)
![MongoDB](https://img.shields.io/badge/MongoDB-6.0-green.svg)
![Redis](https://img.shields.io/badge/Redis-7-red.svg)
![Docker](https://img.shields.io/badge/Docker-Ready-blue.svg)
![License](https://img.shields.io/badge/license-MIT-blue.svg)

[Features](#-features) • [Tech Stack](#-tech-stack) • [Installation](#-installation) • [Screenshots](#-screenshots) • [API Docs](#-api-documentation)

</div>

---

## ✨ Features

- ⚡ **Real-Time Messaging** - Instant message delivery using WebSockets
- 🔐 **End-to-End Encryption** - Messages encrypted with AES-256
- 👥 **Group Chats** - Create and manage group conversations
- 📎 **File Sharing** - Share images, documents, and videos
- 🎤 **Voice Messages** - Record and send voice messages
- 🔔 **Push Notifications** - Get notified of new messages
- 🌙 **Dark Mode** - Beautiful dark/light theme support
- 📱 **Responsive Design** - Works on desktop, tablet, and mobile
- 🔍 **Message Search** - Search through conversation history
- ✓ **Read Receipts** - See when messages are read
- ⌨️ **Typing Indicators** - See when someone is typing
- 🚫 **User Blocking** - Block unwanted contacts

---

## 🛠️ Tech Stack

### Frontend
- **Framework:** React 18.2 with TypeScript
- **State Management:** Redux Toolkit
- **Styling:** Tailwind CSS + Framer Motion
- **Real-Time:** Socket.io Client
- **Encryption:** CryptoJS
- **File Upload:** React Dropzone
- **Notifications:** React Toastify

### Backend
- **Runtime:** Node.js 18+
- **Framework:** Express.js
- **Real-Time:** Socket.io
- **Database:** MongoDB with Mongoose
- **Cache:** Redis
- **Authentication:** JWT + Refresh Tokens
- **File Storage:** AWS S3 / Cloudinary
- **Encryption:** bcrypt + CryptoJS

### DevOps
- **Containerization:** Docker + Docker Compose
- **CI/CD:** GitHub Actions
- **Testing:** Jest + React Testing Library
- **Code Quality:** ESLint + Prettier

---

## 🚀 Installation

### Using Docker (Recommended)

```bash
# Clone the repository
git clone https://github.com/bag864471-ux/realtime-chat-app.git
cd realtime-chat-app

# Setup environment variables
cp server/.env.example server/.env
cp client/.env.example client/.env
# Edit .env files with your configuration

# Start all services
docker-compose up -d

# Access the application
open http://localhost:3000
```

### Manual Installation

#### Backend Setup

```bash
cd server

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env
# Edit .env with your MongoDB URI, Redis URL, etc.

# Start development server
npm run dev
```

#### Frontend Setup

```bash
cd client

# Install dependencies
npm install

# Setup environment variables
cp .env.example .env

# Start development server
npm start
```

---

## 📁 Project Structure

```
realtime-chat-app/
├── client/                    # React frontend
│   ├── public/
│   ├── src/
│   │   ├── components/        # Reusable components
│   │   │   ├── Chat/
│   │   │   ├── Sidebar/
│   │   │   └── common/
│   │   ├── pages/             # Page components
│   │   │   ├── Login/
│   │   │   ├── Register/
│   │   │   ├── Chat/
│   │   │   └── Profile/
│   │   ├── store/             # Redux store
│   │   ├── hooks/             # Custom hooks
│   │   ├── services/          # API services
│   │   ├── utils/             # Utility functions
│   │   │   ├── encryption.js
│   │   │   └── helpers.js
│   │   └── App.tsx
│   ├── package.json
│   └── tailwind.config.js
├── server/                    # Node.js backend
│   ├── src/
│   │   ├── config/            # Configuration
│   │   ├── controllers/       # Route controllers
│   │   ├── models/            # Mongoose models
│   │   ├── routes/            # Express routes
│   │   ├── services/          # Business logic
│   │   ├── middleware/        # Custom middleware
│   │   ├── socket/            # Socket.io handlers
│   │   └── utils/             # Utility functions
│   ├── package.json
│   └── .env.example
├── docker-compose.yml
└── README.md
```

---

## 🔌 WebSocket Events

### Client to Server

```javascript
// Send message
socket.emit('send_message', {
  conversationId: 'conv123',
  content: 'Hello!',
  type: 'text'
});

// Typing indicator
socket.emit('typing', {
  conversationId: 'conv123',
  userId: 'user123'
});

// Mark as read
socket.emit('mark_read', {
  conversationId: 'conv123',
  messageIds: ['msg1', 'msg2']
});
```

### Server to Client

```javascript
// New message
socket.on('new_message', (message) => {
  console.log('New message:', message);
});

// User typing
socket.on('user_typing', ({ userId, conversationId }) => {
  console.log('User is typing...');
});

// Message read
socket.on('message_read', ({ messageId, readBy }) => {
  console.log('Message read by:', readBy);
});
```

---

## 🔐 Security Features

- **Password Hashing:** bcrypt with salt rounds
- **JWT Tokens:** Access + Refresh token pattern
- **Message Encryption:** AES-256 encryption
- **Rate Limiting:** Prevent abuse
- **CORS:** Configured for specific origins
- **Input Validation:** Sanitize all inputs
- **XSS Protection:** Content Security Policy

---

## 🧪 Testing

```bash
# Backend tests
cd server
npm test

# Frontend tests
cd client
npm test

# E2E tests
npm run cypress
```

---

## 📊 Performance Optimizations

- **Redis Caching:** Cache frequently accessed data
- **Database Indexing:** Optimized MongoDB queries
- **Lazy Loading:** Load messages on demand
- **Image Compression:** Compress images before upload
- **CDN:** Serve static assets via CDN
- **Code Splitting:** React lazy loading

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## 📝 License

MIT License - see [LICENSE](./LICENSE)

---

<div align="center">

**Built with ❤️ by [bag864471-ux](https://github.com/bag864471-ux)**

⭐ Star this repo if you find it helpful!

</div>
