"use client";

import * as S from "./ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";

export function AppSidebar() {
  return (
    <S.Sheet>
      <S.SheetTrigger className="md:hidden">
        <Menu />
      </S.SheetTrigger>
      <S.SheetContent side="left" className="bg-black text-white w-full">
        <S.SheetHeader>
          <S.SheetTitle className="font-medium text-lg text-white">ISABELA LEANDRO</S.SheetTitle>
        </S.SheetHeader>
        <section className="flex flex-col gap-y-8 px-4 my-10">
          <Link href="/" className="text-2xl font-medium">
            ABOUT
          </Link>
          <Link href="/" className="text-2xl font-medium">
            PROJECTS
          </Link>
        </section>
        <S.SheetFooter className="mb-8 gap-y-2.5">
          <span className="opacity-60 text-lg">Contact</span>
          <Link
            href="mailto:isalesilva2128@gmail.com"
            className="text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            E-mail
          </Link>
          <Link
            href="tel:+5511975727639"
            className="text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Phone
          </Link>
          <Link
            href="https://www.linkedin.com/in/isabela-leandro-silva/"
            className="text-2xl underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
        </S.SheetFooter>
      </S.SheetContent>
    </S.Sheet>
  );
}
