import React, { useEffect } from "react";

interface ToastProps {
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000); // auto-close after 5s
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 right-4 bg-blue-600 text-white px-6 py-3 rounded shadow-lg animate-slide-in">
      {message}
    </div>
  );
};

export default Toast;
