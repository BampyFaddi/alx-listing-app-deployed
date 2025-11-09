import { ButtonProps } from "../../interfaces";

export default function Button({ label, onClick }: ButtonProps) {
  return (
    <button
      className="bg-blue-600 text-white font-semibold py-2 px-4 rounded hover:bg-blue-700 transition-colors duration-200"
      onClick={onClick}
    >
      {label}
    </button>
  );
}
