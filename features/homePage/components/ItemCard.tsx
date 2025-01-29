import { useState } from "react";

export default function ItemCard({ name }: { name: string }) {
  const [complete, setComplete] = useState(false);
  return (
    <div className="flex justify-between items-center p-6 bg-gradient-to-br from-sky-50 to-sky-200 rounded-lg shadow-md">
      <h1 className="font-medium text-3xl">{name}</h1>
      <div
        className={`${
          complete ? "bg-green-500 ring-4 ring-accent-foreground" : "ring-4 ring-primary"
        } rounded-full h-5 w-5`}
        onClick={() => setComplete(!complete)}
      ></div>
    </div>
  );
}
