---

# 💬 Realtime Chat App - RazorChat

A **Realtime Chat Application** built using **Socket.IO** for instant messaging and **Arcjet** for security and rate-limiting.
The app supports **live messaging, typing indicators, and notification sounds**.

---

## 🚀 Features

* ⚡ Realtime messaging using Socket.IO
* 🔊 Typing sound when a user is typing
* ✉️ Message sound when a new message arrives
* 👥 Multiple users can chat simultaneously
* 🔒 Arcjet security integration
* 🛡️ Rate limiting & bot protection

---

## 🏗️ Tech Stack

**Frontend**

* React.js
* Socket.IO Client
* CSS / Tailwind

**Backend**

* Node.js
* Express.js
* Socket.IO
* Arcjet

---

## 📂 Project Structure

```
chat-app
│
├── client
│   ├── components
│   │   ├── ChatBox.js
│   │   ├── Message.js
│   │   └── TypingIndicator.js
│   │
│   ├── sounds
│   │   ├── typing.mp3
│   │   └── message.mp3
│   │
│   └── App.js
│
├── server
│   ├── server.js
│   ├── socket.js
│   └── arcjetConfig.js
│
├── .env
├── package.json
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/realtime-chat-app.git
cd realtime-chat-app
```

Install dependencies:

```bash
cd server
npm install
```

```bash
cd client
npm install
```

---

## ▶️ Running the Application

Start backend:

```bash
cd server
npm run dev
```

Start frontend:

```bash
cd client
npm start
```

App runs on:

```
http://localhost:3000
```

---

## 🔌 Socket.IO Events

| Event      | Description          |
| ---------- | -------------------- |
| connection | User connects        |
| message    | Send/receive message |
| typing     | Typing indicator     |
| disconnect | User leaves          |

---

## 📜 License

MIT License
