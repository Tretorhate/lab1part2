const socket = new WebSocket("ws://localhost:8080");

const messagesDiv = document.getElementById("messages");
const messageForm = document.getElementById("message-form");
const messageInput = document.getElementById("message-input");

messageForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const message = messageInput.value.trim();

  if (message === "") {
    return;
  }

  socket.send(
    JSON.stringify({
      message: message,
    })
  );

  addMessage("You: " + message);

  messageInput.value = "";
});

socket.addEventListener("message", (event) => {
  try {
    const data = JSON.parse(event.data);

    switch (data.type) {
      case "chat":
        addMessage("User: " + data.message);
        break;
      case "system":
        addMessage(data.message, "system-message");
        break;
      case "error":
        addMessage(data.message, "error-message");
        break;
      default:
        console.warn("Unknown message type:", data.type);
    }
  } catch (e) {
    console.error("Error parsing message:", e);
  }
});

socket.addEventListener("open", () => {
  addMessage("Connected to chat server", "system-message");
});

socket.addEventListener("close", () => {
  addMessage("Disconnected from chat server", "system-message");
});

socket.addEventListener("error", (error) => {
  addMessage("Connection error: " + error.message, "error-message");
});

function addMessage(message, className = "") {
  const messageElement = document.createElement("div");
  messageElement.textContent = message;
  messageElement.className = "message " + className;
  messagesDiv.appendChild(messageElement);

  messagesDiv.scrollTop = messagesDiv.scrollHeight;
}
