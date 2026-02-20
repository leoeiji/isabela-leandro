"use client";

import { Button } from "@/components/ui/button";

export function ScrollToProjectsButton() {
  return (
    <Button
      className="w-[135px] h-[48px] rounded-4xl cursor-pointer lg:col-span-12"
      onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
    >
      See projects
    </Button>
  );
}
