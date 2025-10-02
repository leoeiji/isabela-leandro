import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen max-w-9/12 px-6 py-16">
      <div className="gap-6 flex flex-col">
        <h1 className="text-[32px] font-medium">Hi, I'm Isabela,</h1>
        <h2 className="text-[64px] font-medium">
          A UX/UI designer focused on bridging the gap between digital products and branding design.
        </h2>
        <Link href="/ita">
          <Button className="w-[164px] h-[56px] rounded-4xl cursor-pointer">See projects</Button>
        </Link>
      </div>
      <div className="flex flex-col gap-2.5">
        <p className="text-[18px] font-inter">Contact</p>
        <a className="text-2xl font-inter underline" href="mailto:isalesilva2128@gmail.com">
          E-mail
        </a>
        <a
          className="text-2xl font-inter underline"
          href="https://www.linkedin.com/in/isabela-leandro-silva/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
