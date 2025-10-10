"use client";

import { Button } from "./ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

interface ProjectProps {
  name: string;
  endpoint: string;
  isNext?: boolean;
}

interface ProjectSwitchProps {
  nextProject: ProjectProps;
  previousProject: ProjectProps;
}

function ProjectButton({ project }: { project: ProjectProps }) {
  const router = useRouter();

  const handleClick = () => {
    router.push(project.endpoint);
  };
  return (
    <Button className="w-full rounded-full p-8" asChild onClick={handleClick}>
      <div className={cn("flex w-full", project.isNext ? "flex-row-reverse" : "")}>
        <span className="w-full text-center font-normal text-xl lg:text-2xl">{project.name}</span>
        <div className="flex items-center">
          <span className={cn("flex items-center gap-2", project.isNext ? "flex-row-reverse" : "")}>
            <p className="hidden lg:block">{project.isNext ? "PREVIOUS" : "NEXT"}</p>
            {project.isNext ? <ArrowLeft /> : <ArrowRight />}
          </span>
        </div>
      </div>
    </Button>
  );
}

export function ProjectSwitch({ nextProject, previousProject }: ProjectSwitchProps) {
  nextProject.isNext = true;
  return (
    <div className="w-full grid grid-cols-2 p-5 my-6">
      <ProjectButton project={nextProject} />
      <ProjectButton project={previousProject} />
    </div>
  );
}
