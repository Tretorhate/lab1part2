# WebSocket Chat Application

A real-time chat application built with WebSocket, Node.js, and vanilla JavaScript. This application allows multiple users to chat in real-time through their web browsers.

## Features

- Real-time messaging using WebSocket
- Multiple concurrent users support
- System notifications for user connections/disconnections
- Message type differentiation (chat, system, error messages)
- Auto-scrolling message container
- Simple, responsive UI
- Error handling and validation

## Prerequisites

Before you begin, ensure you have installed:

- Node.js (version 12.0 or higher)
- npm (typically comes with Node.js)
- A modern web browser
- Python 3.x (for serving static files during development)

## Installation

1. Clone or download this repository:

```bash
git clone <repository-url>
# or create a new directory and copy the files manually
```

2. Navigate to the project directory:

```bash
cd chat-app
```

3. Install the required dependencies:

```bash
npm init -y
npm install ws
```

## Project Structure

```
chat-app/
├── server.js      # WebSocket server implementation
├── chat.html      # Client-side HTML and styling
├── chat.js        # Client-side JavaScript
└── README.md      # This file
```

## Running the Application

1. Start the WebSocket server:

```bash
node server.js
```

This will start the WebSocket server on port 8080.

2. In a new terminal window, start a local HTTP server to serve the client files:

```bash
python -m http.server 8000
```

3. Open your web browser and navigate to:

```
http://localhost:8000/chat.html
```

4. To test multiple users, open additional browser windows with the same URL.

## Usage

1. Type your message in the input field at the bottom of the page
2. Press Enter or click the Send button to send your message
3. Your message will appear in your chat window and be broadcast to all other connected users
4. System messages will appear when users connect or disconnect

## Error Handling

The application handles several types of errors:

- Invalid message formats
- Connection errors
- Server disconnections
- Empty messages (prevented from sending)

## Troubleshooting

Common issues and solutions:

1. **Server won't start**

   - Check if port 8080 is already in use
   - Ensure Node.js is properly installed
   - Verify that the ws package is installed

2. **Can't connect to chat**

   - Verify that both the WebSocket server (port 8080) and HTTP server (port 8000) are running
   - Check your browser's console for error messages
   - Ensure you're using the correct URL (http://localhost:8000/chat.html)

3. **Messages not sending**
   - Check your browser's console for WebSocket connection errors
   - Verify that the WebSocket server is running
   - Ensure your message isn't empty

## Extending the Application

To add new features:

1. Server-side modifications go in `server.js`
2. UI changes should be made in `chat.html`
3. Client-side logic can be added to `chat.js`

Some possible enhancements:

- User nicknames
- Private messaging
- Message persistence
- Typing indicators
- Emojis support
- File sharing

## License

This project is released under the MIT License.
