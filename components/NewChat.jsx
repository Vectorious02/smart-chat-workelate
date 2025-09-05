// src/components/NewChat.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const allUsers = [
  { id: "u1", name: "Fiona", online: true },
  { id: "u2", name: "Gaurav", online: true },
  { id: "u3", name: "Hema", online: false },
  { id: "u4", name: "Ishan", online: true },
  { id: "u5", name: "Jasmine", online: false }
];

export default function NewChat({ addChat, onCreate }) {
  const [name, setName] = useState("");
  const [ice, setIce] = useState("");
  const navigate = useNavigate();

  const create = () => {
    const n = name.trim();
    if (!n) return alert("Enter a name or pick from list.");
    const id = addChat(n);
    if (onCreate) onCreate(id);
    else navigate(`/chat/${id}`);
  };

  const pickUser = (u) => {
    const id = addChat(u.name);
    if (onCreate) onCreate(id);
    else navigate(`/chat/${id}`);
  };

  const genIce = () => {
    const target = name.trim() || "there";
    setIce(`Hey ${target}! 👋 What's one key outcome you want this week?`);
  };

  return (
    <div className="p-6">
      <div className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-6 rounded-2xl shadow">
        <h2 className="text-lg font-semibold mb-3">Start a New Chat</h2>

        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name (or pick below)"
          className="w-full px-4 py-2 rounded-lg border mb-3 dark:bg-gray-900"
        />

        <div className="flex gap-2 mb-3">
          <button onClick={create} className="px-4 py-2 bg-green-600 text-white rounded-lg">Create</button>
          <button onClick={genIce} className="px-4 py-2 bg-yellow-500 rounded-lg">Generate Icebreaker</button>
        </div>

        {ice && (
          <div className="p-3 rounded mb-3 bg-yellow-100 dark:bg-yellow-800 text-gray-900 dark:text-yellow-100">
            {ice}
          </div>
        )}

        <div className="mt-3">
          <div className="text-sm text-gray-500 mb-2">Or start with a suggested user:</div>
          <div className="grid grid-cols-2 gap-2">
            {allUsers.map((u) => (
              <button
                key={u.id}
                onClick={() => pickUser(u)}
                className="p-3 bg-gray-100 dark:bg-gray-700 rounded text-left"
              >
                <div className="font-medium">{u.name}</div>
                <div className="text-xs text-gray-500">{u.online ? "Online" : "Offline"}</div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
