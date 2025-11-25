import { FC } from "react";

interface Props {
  text: string;
  onClick: () => void;
}

export const Button: FC<Props> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-pink-500 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded transition"
    >
      {text}
    </button>
  );
};
