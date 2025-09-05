import { useState } from "react";

export default function ChatView({ chat }) {
  const [messages, setMessages] = useState(chat.messages);

  // Smart Reply suggestions
  const smartReplies = [
    "Got it, thanks!",
    "I’ll check and update.",
    "Can we discuss this tomorrow?",
  ];

  const handleSummarize = () => {
    const summary =
      "Summary: " +
      messages
        .map((m) => m.text)
        .slice(0, 3)
        .join(" / ");
    alert(summary);
  };

  const handleSmartReplyClick = (reply) => {
    setMessages([...messages, { from: "me", text: reply }]);
  };

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="p-4 border-b font-semibold bg-gray-50 dark:bg-gray-800">
        {chat.name}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`p-2 rounded-lg max-w-xs ${
              msg.from === "me"
                ? "bg-blue-500 text-white self-end"
                : "bg-gray-200 dark:bg-gray-700"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>

      {/* Smart Reply + Summarize */}
      <div className="p-3 border-t flex flex-col gap-2">
        {/* Smart replies */}
        <div className="flex gap-2 flex-wrap">
          {smartReplies.map((reply, idx) => (
            <button
              key={idx}
              onClick={() => handleSmartReplyClick(reply)}
              className="px-3 py-1 rounded-lg bg-green-500 text-white hover:bg-green-600"
            >
              {reply}
            </button>
          ))}
        </div>

        {/* Summarize */}
        <button
          onClick={handleSummarize}
          className="px-3 py-1 rounded-lg bg-purple-500 text-white hover:bg-purple-600 self-start"
        >
          Summarize
        </button>
      </div>
    </div>
  );
}
