// src/App.jsx
import React, { useEffect, useState } from "react";
import seedChats from "./data/seedChats";
import ChatList from "./components/ChatList";
import ChatWindow from "./components/ChatWindow";
import ThemeToggle from "./components/ThemeToggle";

/**
 * App: main layout that controls theme, active chat and chat state.
 * - No localStorage (you asked to remove it).
 * - Clicking in ChatList sets active chat (passed to ChatWindow).
 */
export default function App() {
  const [chats, setChats] = useState(seedChats);
  const [activeChatId, setActiveChatId] = useState(chats[0]?.id ?? null);
  const [dark, setDark] = useState(false);

  // Toggle dark mode by adding/removing `dark` on <html> so Tailwind dark: classes work.
  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
  }, [dark]);

  const setActiveChat = (chat) => {
    setActiveChatId(chat?.id ?? null);
  };

  const addChat = (name) => {
    const id = Date.now().toString();
    const time = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    const newChat = {
      id,
      name,
      lastMessage: `Chat started with ${name}`,
      time,
      messages: [
        { sender: name, text: `Hi, I'm ${name}.`, time },
        { sender: "You", text: `Hi ${name}, nice to connect!`, time }
      ]
    };
    setChats((s) => [newChat, ...s]);
    setActiveChatId(id);
    return id;
  };

  const addMessage = (chatId, sender, text) => {
    const now = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    setChats((prev) =>
      prev.map((c) =>
        c.id === chatId
          ? { ...c, messages: [...c.messages, { sender, text, time: now }], lastMessage: text, time: now }
          : c
      )
    );
  };

  // Keep your smart functions (summarizer / replies) in ChatWindow - App doesn't need them now.
  const activeChat = chats.find((c) => c.id === activeChatId) ?? null;

  return (
    // page background is applied here so both sidebar and main area align visually
    <div className={`min-h-screen ${dark ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"}`}>
      {/* NAV / HEADER */}
      <header className={`w-full border-b ${dark ? "border-gray-800" : "border-gray-200"} bg-transparent`}>
        <div className="max-w-6xl mx-auto px-6 py-3 flex items-center">
          <h1 className="text-lg font-semibold">WorkElate — Smart UI Task</h1>
          <div className="ml-auto">
            <ThemeToggle dark={dark} toggle={() => setDark((d) => !d)} />
          </div>
        </div>
      </header>

      {/* MAIN: sidebar + chat window */}
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex gap-6">
          {/* Left sidebar: fixed width, full viewport height minus header */}
          <div className="w-80 h-[calc(100vh-136px)]"> 
            <ChatList
              chats={chats}
              activeChatId={activeChatId}
              setActiveChat={setActiveChat}
              addChat={addChat}
              dark={dark}
            />
          </div>

          {/* Right main: fills remaining space, ensure it has the correct background so there is no white gap */}
          <div className="flex-1 h-[calc(100vh-136px)]">
            <ChatWindow
              chat={activeChat}
              addMessage={addMessage}
              dark={dark}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
