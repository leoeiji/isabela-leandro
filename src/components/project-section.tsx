import { cn } from "@/lib/utils";

import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

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

interface VideoSubSectionProps {
  type: "video";
  src: string;
}

interface ProjectSectionProps {
  title: string;
  subSections: (TextSubSectionProps | ImageSubSectionProps | VideoSubSectionProps)[];
}

export function ProjectSection({ title, subSections }: ProjectSectionProps) {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-12 mt-6">
      {subSections.map((subSection, index) => {
        if (subSection.type === "text") {
          return (
            <FadeIn key={index} className="col-span-full lg:col-span-6 lg:col-start-6 py-6 lg:py-10">
              <h2
                className={cn("text-sm text-[#9E9E9E] col-span-full lg:col-start-6", index != 0 && "hidden")}
              >
                {title}
              </h2>
              {subSection.content.map((textContent, textIndex) => (
                <div key={textIndex} className="flex flex-col mt-4">
                  {textContent.title && <h3 className="font-bold mb-5">{textContent.title}</h3>}
                  <p className={cn("text-md")}>{textContent.content}</p>
                </div>
              ))}
            </FadeIn>
          );
        } else if (subSection.type === "image") {
          return (
            <FadeIn key={index} className="col-span-full my-4 lg:my-10">
              <Image
                src={subSection.src}
                alt={subSection.alt}
                width={subSection.width}
                height={subSection.height}
                className="w-full h-[250px] lg:h-auto object-cover"
                quality={100}
                sizes="100vw"
              />
            </FadeIn>
          );
        } else if (subSection.type === "video") {
          return (
            <FadeIn key={index} className="col-span-full my-4 lg:my-10">
              <video
                src={subSection.src}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[250px] lg:h-auto object-cover"
              />
            </FadeIn>
          );
        }
        return null;
      })}
    </section>
  );
}
