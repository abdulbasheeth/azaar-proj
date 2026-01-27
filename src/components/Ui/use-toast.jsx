import { useState } from "react";

// Hook version
export function useToast() {
  const [messages, setMessages] = useState([]);

  const addToast = ({ title, description, type = "info" }) => {
    const id = Date.now();

    // Add new toast
    setMessages((prev) => [...prev, { id, title, description, type }]);

    // Remove toast automatically after 3 seconds
    setTimeout(() => {
      setMessages((prev) => prev.filter((msg) => msg.id !== id));
    }, 3000);
  };

  return { messages, toast: addToast };
}

// Optional function version (fallback)
export const toast = ({ title, description, type = "info" }) => {
  console.log(`${type.toUpperCase()} - ${title}: ${description}`);
  alert(`${title}\n${description}`); // fallback if hook not used
};
