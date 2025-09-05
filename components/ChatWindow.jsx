// src/components/ChatWindow.jsx
import React, { useState } from "react";
import { Wand2, Sparkles } from "lucide-react";

export default function ChatWindow({ chat, addMessage, dark }) {
  const [input, setInput] = useState("");

  if (!chat) {
    return (
      <div
        className={`flex items-center justify-center h-full rounded-lg border 
        ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}
      >
        <p className="text-gray-500">Select a chat to start messaging</p>
      </div>
    );
  }

  const handleSend = () => {
    if (!input.trim()) return;
    addMessage(chat.id, "You", input.trim());
    setInput("");
  };

  // --- Smart Features ---
  const smartReplies = [
    "Got it, thanks!",
    "I’ll check and update.",
    "Can we sync on this tomorrow?",
    "Looks good to me.",
    "Let’s prioritize this task."
  ];

  const handleSmartReply = (reply) => {
    addMessage(chat.id, "You", reply);
  };

  const handleSummarize = () => {
  if (!chat.messages || chat.messages.length === 0) return;

  // Step 1: Collect all text
  const texts = chat.messages.map((m) => m.text);

  // Step 2: Important keywords
  const keywords = ["update", "issue", "done", "next", "deadline", "priority", "blocker", "completed"];

  // Step 3: Extract meaningful parts
  const keyMessages = texts.filter((t) =>
    keywords.some((kw) => t.toLowerCase().includes(kw))
  );

  // Always include first + last messages for context
  const summaryParts = [
    texts[0],
    ...keyMessages.slice(0, 2), // up to 2 important ones
    texts[texts.length - 1],
  ];

  // Step 4: Make readable summary
  const summary = summaryParts.join(" | ");

  alert("Summary:\n" + summary);
};


  const handleIcebreaker = () => {
    const icebreakers = [
      "How’s everyone doing today?",
      "Any blockers I can help with?",
      "What’s one cool update from this week?",
      "Let’s sync on priorities — what’s top of mind?",
    ];
    const msg = icebreakers[Math.floor(Math.random() * icebreakers.length)];
    addMessage(chat.id, "You", msg);
  };

  return (
    <div
      className={`flex flex-col h-full rounded-lg border 
      ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}
    >
      {/* Header */}
      <div
        className={`p-4 border-b font-semibold 
        ${dark ? "border-gray-800 bg-gray-800" : "border-gray-200 bg-gray-50"}`}
      >
        {chat.name}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {chat.messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.sender === "You"
                ? dark
                  ? "bg-blue-600 text-white ml-auto"
                  : "bg-blue-200 text-black ml-auto"
                : dark
                ? "bg-gray-700 text-white"
                : "bg-gray-100 text-black"
            }`}
          >
            <div className="text-sm font-semibold">{msg.sender}</div>
            <div>{msg.text}</div>
            <div className="text-xs text-gray-400">{msg.time}</div>
          </div>
        ))}
      </div>

      {/* Smart Features */}
      <div className="p-3 border-t flex flex-col gap-2">
        {/* Smart replies */}
        <div className="flex gap-2 flex-wrap">
          {smartReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => handleSmartReply(reply)}
              className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600 text-sm"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Summarize + Icebreaker */}
        <div className="flex gap-3 mt-2">
          <button
            onClick={handleSummarize}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-purple-500 text-white hover:bg-purple-600 text-sm"
          >
            <Wand2 size={16} /> Summarize
          </button>
          <button
            onClick={handleIcebreaker}
            className="flex items-center gap-1 px-3 py-1 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 text-sm"
          >
            <Sparkles size={16} /> Icebreaker
          </button>
        </div>
      </div>

      {/* Input box */}
      <div className="p-3 border-t flex gap-2">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          className={`flex-1 rounded-lg px-3 py-2 outline-none ${
            dark
              ? "bg-gray-800 text-white placeholder-gray-400"
              : "bg-gray-100 text-gray-900 placeholder-gray-500"
          }`}
          placeholder="Type a message..."
        />
        <button
          onClick={handleSend}
          className="px-4 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600"
        >
          Send
        </button>
      </div>
    </div>
  );
}
