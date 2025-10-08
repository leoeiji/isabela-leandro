import { cn } from "@/lib/utils";

import Image from "next/image";

interface TextSubSectionContentProps {
  title: string;
  content: string;
}

interface TextSubSectionProps {
  type: "text";
  content: TextSubSectionContentProps[];
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
    <section className="grid grid-cols-2 lg:grid-cols-12 mt-6">
      {subSections.map((subSection, index) => {
        if (subSection.type === "text") {
          return (
            <div key={index} className="col-span-full lg:col-span-6 lg:col-start-6 py-6 lg:py-10">
              <h2 className="text-sm text-[#9E9E9E] col-span-full lg:col-start-6">{title}</h2>
              {subSection.content.map((textContent, textIndex) => (
                <div key={textIndex} className="flex flex-col mt-4">
                  {textContent.title && <h3 className="font-bold mb-5">{textContent.title}</h3>}
                  <p className={cn("text-md")}>{textContent.content}</p>
                </div>
              ))}
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
              className="col-span-full w-full h-[250px] lg:h-screen object-cover my-4 lg:my-10"
            />
          );
        }
        return null;
      })}
    </section>
  );
}
