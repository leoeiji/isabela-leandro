export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full  bg-black px-4 py-10 gap-y-10 flex flex-col">
      <span className="text-white font-[Geist] font-medium text-[64px] lg:text-[120px]">THANK YOU_</span>
      <div className="text-white flex flex-col gap-y-6 lg:flex-row lg:justify-between lg:items-center">
        <div className="flex flex-col gap-y-6 lg:flex-row lg:gap-x-6 lg:items-center">
          <a className="text-2xl underline" href="mailto:isalesilva2128@gmail.com">
            E-mail
          </a>
          <a className="text-2xl underline" href="tel:+5511975727639">
            Phone
          </a>
          <a className="text-2xl underline" href="https://www.linkedin.com/in/isabela-leandro-silva/">
            LinkedIn
          </a>
        </div>
        <span className="text-[18px]">Isabela Leandro © {year}</span>
      </div>
    </footer>
  );
}
