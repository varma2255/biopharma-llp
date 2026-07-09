"use client";
import { useState } from "react";

type Message = {
  role: "user" | "bot";
  text: string;
};

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "👋 Hi! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [leadStep, setLeadStep] = useState<"none" | "name" | "phone">("none");
const [lead, setLead] = useState({ name: "", phone: "" });

  async function sendMessage() {
    if (!input.trim()) return;

    const userMessage: Message = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();

      const botMessage: Message = {
        role: "bot",
        text: data.reply,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "⚠️ Something went wrong." },
      ]);
    }

    setLoading(false);
  }

  return (
    <div
      style={{
        position: "fixed",
        bottom: 20,
        right: 20, // 👉 change to left:20 if needed
        zIndex: 9999,
      }}
    >
      {/* Chat Window */}
      {open && (
        <div
          style={{
            width: 320,
            height: 420,
            background: "#fff",
            borderRadius: 14,
            boxShadow: "0 15px 40px rgba(0,0,0,0.25)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            marginBottom: 10,
          }}
        >
          {/* Header */}
          <div
            style={{
              background: "#1565c0",
              color: "#fff",
              padding: "12px",
              fontWeight: 600,
            }}
          >
            Innovare Support
          </div>

          {/* Messages */}
          <div
            style={{
              flex: 1,
              padding: 10,
              overflowY: "auto",
              fontSize: 14,
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.role === "user" ? "right" : "left",
                  marginBottom: 8,
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: 10,
                    background:
                      msg.role === "user" ? "#1565c0" : "#f1f1f1",
                    color: msg.role === "user" ? "#fff" : "#000",
                    maxWidth: "80%",
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {loading && <p>Typing...</p>}
          </div>

          {/* Input */}
          <div
            style={{
              display: "flex",
              borderTop: "1px solid #eee",
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Type a message..."
              style={{
                flex: 1,
                padding: 10,
                border: "none",
                outline: "none",
              }}
            />
            <button
              onClick={sendMessage}
              style={{
                padding: "0 16px",
                background: "#1565c0",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: 58,
          height: 58,
          borderRadius: "50%",
          background: "#1565c0",
          color: "#fff",
          border: "none",
          fontSize: 24,
          cursor: "pointer",
          boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
        }}
      >
        💬
      </button>
    </div>
  );
}