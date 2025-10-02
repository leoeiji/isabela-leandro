import Link from "next/link";

interface ProjectHeaderProps {
  nextProjectEndpoint: string;
}

export function ProjectHeader({ nextProjectEndpoint }: ProjectHeaderProps) {
  return (
    <header className="h-16 w-screen flex justify-between items-center px-5">
      <Link href="/">
        <p className="text-[24px] font-medium">ISABELA LEANDRO</p>
      </Link>
    </header>
  );
}
