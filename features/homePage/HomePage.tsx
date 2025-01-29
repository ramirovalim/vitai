"use client";

import ItemCard from "@/features/homePage/components/ItemCard";
import { Header } from "./components/Header";

export function HomePage() {
  return (
    <div className="h-dvh flex flex-col m-4 justify-evenly">
      <Header />
      <div className="flex flex-col justify-center gap-6">
        <ItemCard name="RESUME" />
        <ItemCard name="APPLY" />
        <ItemCard name="DOWNLOAD" />
      </div>
    </div>
  );
}
