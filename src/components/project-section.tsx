import { cn } from "@/lib/utils";

import Image from "next/image";

interface TextSubSectionProps {
  type: "text";
  title: string;
  content: string;
  breakline?: boolean;
}

interface ImageSubSectionProps {
  type: "image";
  src: string;
  alt: string;
  width: number;
  height: number;
}

interface ProjectSectionProps {
  title: string;
  subSections: (TextSubSectionProps | ImageSubSectionProps)[];
}

export function ProjectSection({ title, subSections }: ProjectSectionProps) {
  return (
    <section className="grid grid-cols-2 mt-8 lg:grid-cols-12 gap-y-6 lg:gap-y-10">
      <h2 className="text-sm text-[#9E9E9E] col-span-full lg:col-start-6">{title}</h2>
      {subSections.map((subSection, index) => {
        if (subSection.type === "text") {
          return (
            <div key={index} className="col-span-full lg:col-span-6 lg:col-start-6 lg:my-10">
              <h3 className="font-bold mb-4">{subSection.title}</h3>
              <p className={cn({ "whitespace-pre-line": subSection.breakline }, "text-md")}>
                {subSection.content}
              </p>
            </div>
          );
        } else if (subSection.type === "image") {
          return (
            <Image
              key={index}
              src={subSection.src}
              alt={subSection.alt}
              width={subSection.width}
              height={subSection.height}
              className="col-span-full w-full h-[250px] lg:h-screen object-cover"
            />
          );
        }
        return null;
      })}
    </section>
  );
}
