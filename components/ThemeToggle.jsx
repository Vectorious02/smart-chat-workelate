// src/components/ThemeToggle.jsx
export default function ThemeToggle({ dark, toggle }) {
  return (
    <button
      onClick={toggle}
      className="px-3 py-1 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
      title={dark ? "Switch to light" : "Switch to dark"}
    >
      {dark ? "🌞" : "🌙"}
    </button>
  );
}

