import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProjectCoverProps {
  title: string;
  subtitle: string;
  projectUrl: string;
  imageUrl: string;
  imageWidth: number;
  imageHeight: number;
  size?: "small" | "medium" | "large";
}

export function ProjectCover(props: ProjectCoverProps) {
  const size = props.size || "medium";

  const sizeClasses = {
    small: "col-span-12 lg:col-span-4 h-[400px]",
    medium: "col-span-12 lg:col-span-6 h-[507px]",
    large: "col-span-12 lg:col-span-8 h-[657px]",
  };

  return (
    <Link href={props.projectUrl} className={cn("flex flex-col gap-y-4", sizeClasses[size])}>
      <div className="relative w-full h-full overflow-hidden">
        <Image
          src={props.imageUrl}
          alt={props.title}
          className="w-full h-full object-cover"
          width={props.imageWidth}
          height={props.imageHeight}
          quality={90}
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
      </div>
      <span className="uppercase text-sm">{props.subtitle}</span>
      <h1 className="font-medium text-2xl">{props.title}</h1>
    </Link>
  );
}
