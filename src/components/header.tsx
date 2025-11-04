import Link from "next/link";
import { AppSidebar } from "./sidebar";

export function ProjectHeader() {
  return (
    <header className="h-16 w-screen flex justify-between items-center px-4 py-2">
      <Link href="/">
        <p className="text-[18px] font-medium">ISABELA LEANDRO</p>
      </Link>
      <AppSidebar />
    </header>
  );
}
