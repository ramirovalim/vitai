"use client";
import { Header } from "@/features/homePage/components/Header";
import ItemCard from "@/features/homePage/components/ItemCard";

export function ResumeBuilder() {
  return (
    <div className="h-dvh flex flex-col m-4">
      <Header />
      <div className="flex flex-col justify-center gap-6">
        <ItemCard name="CONTACT" />
        <ItemCard name="WORK" />
        <ItemCard name="PROJECTS" />
        <ItemCard name="SKILLS" />
      </div>
    </div>
  );
}
