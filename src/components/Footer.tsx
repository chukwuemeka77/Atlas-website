import { FC } from "react";

export const Footer: FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>© {new Date().getFullYear()} Atlas Protocol. All rights reserved.</p>
      <p>
        <a href="/privacy" className="underline hover:text-pink-500">Privacy Policy</a> | 
        <a href="/terms" className="underline hover:text-pink-500">Terms of Service</a>
      </p>
    </footer>
  );
};
