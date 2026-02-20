"use client";

import { useState } from "react";

function CopyLink({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();
    await navigator.clipboard.writeText(value);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`text-2xl underline flex items-center gap-x-2 cursor-pointer ${className ?? ""}`}
    >
      {label}
      {copied && (
        <span className="text-sm font-normal no-underline opacity-70">
          Copiado!
        </span>
      )}
    </button>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full  bg-black px-4 py-10 gap-y-10 flex flex-col">
      <span className="text-white font-[Geist] font-medium text-[64px] lg:text-[120px]">THANK YOU_</span>
      <div className="text-white flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 lg:items-center">
          <CopyLink label="E-mail" value="isalesilva2128@gmail.com" />
          <CopyLink label="Phone" value="+5511975727639" />
          <a className="text-2xl underline" href="https://www.linkedin.com/in/isabela-leandro-silva/">
            LinkedIn
          </a>
        </div>
        <span className="text-[18px]">Isabela Leandro © {year}</span>
      </div>
    </footer>
  );
}
