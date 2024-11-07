// components/Spinner.js
export default function Spinner({ size = 8, color = "border-blue-500" }) {
  return (
    <div
      className={`border-4 border-t-transparent ${color} rounded-full w-${size} h-${size} animate-spin`}
    ></div>
  );
}
