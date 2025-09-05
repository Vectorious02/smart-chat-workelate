// src/components/ChatList.jsx
import React, { useMemo, useState } from "react";

/**
 * ChatList: left column only.
 * - Uses full dark / light backgrounds that match page.
 * - height is controlled by parent App.
 */
export default function ChatList({ chats, activeChatId, setActiveChat, addChat, dark }) {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const t = q.trim().toLowerCase();
    if (!t) return chats;
    return chats.filter(
      (c) => c.name.toLowerCase().includes(t) || (c.lastMessage && c.lastMessage.toLowerCase().includes(t))
    );
  }, [q, chats]);

  return (
    <div className={`${dark ? "bg-transparent" : "bg-white/60"} rounded-xl p-4 h-full flex flex-col`}>
      <div className="mb-4">
        <div className="text-sm font-semibold">WorkElate Chat</div>
        <div className="text-xs text-gray-400">Team workspace</div>
      </div>

      <div className="mb-4">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search chats..."
          className={`w-full rounded-lg px-3 py-2 border ${dark ? "border-gray-700 bg-gray-900/60 text-gray-100" : "border-gray-200 bg-white text-gray-900"}`}
        />
      </div>

      <button
        onClick={() => addChat("NewUser-" + Date.now().toString().slice(-3))}
        className="w-full mb-4 py-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        + New Chat
      </button>

      <div className="overflow-y-auto flex-1 space-y-2 pr-2">
        {filtered.map((c) => (
          <div
            key={c.id}
            onClick={() => setActiveChat(c)}
            className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition
              ${activeChatId === c.id ? (dark ? "bg-gray-800 ring-1 ring-indigo-600" : "bg-slate-50 shadow") : (dark ? "hover:bg-gray-800/80" : "hover:bg-gray-50")}
            `}
          >
            <div className="w-11 h-11 rounded-full flex items-center justify-center bg-indigo-700 text-white font-bold">
              {c.name.split(" ").map(s => s[0]).slice(0,2).join("")}
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start">
                <div className="font-medium truncate">{c.name}</div>
                <div className="text-xs text-gray-400 ml-2">{c.time}</div>
              </div>
              <div className="text-sm text-gray-400 truncate">{c.lastMessage}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
