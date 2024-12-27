const WebSocket = require("ws");

const wss = new WebSocket.Server({ port: 8080 });

const clients = new Set();

wss.on("connection", (ws) => {
  clients.add(ws);

  ws.send(
    JSON.stringify({
      type: "system",
      message: "Welcome to the chat room!",
    })
  );

  broadcast(
    {
      type: "system",
      message: "A new user has joined the chat",
    },
    ws
  );

  ws.on("message", (message) => {
    try {
      const parsedMessage = JSON.parse(message);

      broadcast(
        {
          type: "chat",
          message: parsedMessage.message,
        },
        ws
      );
    } catch (e) {
      ws.send(
        JSON.stringify({
          type: "error",
          message: "Invalid message format",
        })
      );
    }
  });

  ws.on("close", () => {
    clients.delete(ws);
    broadcast({
      type: "system",
      message: "A user has left the chat",
    });
  });

  ws.on("error", (error) => {
    console.error("WebSocket error:", error);
    clients.delete(ws);
  });
});

function broadcast(message, sender) {
  clients.forEach((client) => {
    if (client !== sender && client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

console.log("WebSocket server is running on ws://localhost:8080");
