import { Button } from "@/components/ui/button";
import { ProjectCover } from "@/components/project-cover";
import { ProjectHeader } from "@/components/header";
import { Footer } from "@/components/footer";
import Link from "next/link";

const projects = [
  {
    title: "ITA Engenharia",
    subtitle: "UX/UI Design",
    projectUrl: "/ita",
    imageUrl: "/images/ita/LAD ITA 1.png",
    imageWidth: 500,
    imageHeight: 303,
    size: "large" as const,
  },
  {
    title: "Beontag",
    subtitle: "UX/UI Design",
    projectUrl: "/beontag",
    imageUrl: "/images/beontag/beontag.png",
    imageWidth: 500,
    imageHeight: 303,
    size: "small" as const,
  },
  {
    title: "Oriz",
    subtitle: "UX/UI Design",
    projectUrl: "/oriz-partners",
    imageUrl: "/images/oriz-partners/cover.png",
    imageWidth: 500,
    imageHeight: 303,
    size: "medium" as const,
  },
  {
    title: "Carbonext",
    subtitle: "UX/UI Design",
    projectUrl: "/carbonext",
    imageUrl: "/images/carbonext/cover.png",
    imageWidth: 500,
    imageHeight: 303,
    size: "medium" as const,
  },
];

export default function Home() {
  return (
    <div className="flex flex-col h-screeng">
      <ProjectHeader></ProjectHeader>
      <div className="flex flex-col mt-4 px-4 gap-y-10">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
          <h1 className="text-xl lg:text-3xl font-medium lg:col-span-12">Hi, I'm Isabela,</h1>
          <h2 className="text-4xl font-medium lg:col-span-8 lg:text-6xl">
            A UX/UI designer focused on bridging the gap between digital products and branding design.
          </h2>
          <Link href="/ita" className="lg:col-span-12">
            <Button className="w-[135px] h-[48px] rounded-4xl cursor-pointer">See projects</Button>
          </Link>
        </div>
        <div className="grid grid-cols-12 gap-6 auto-rows-auto lg:mt-20">
          {projects.map((project) => (
            <ProjectCover
              key={project.title}
              title={project.title}
              subtitle={project.subtitle}
              projectUrl={project.projectUrl}
              imageUrl={project.imageUrl}
              imageWidth={project.imageWidth}
              imageHeight={project.imageHeight}
              size={project.size}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 w-full gap-y-6 py-6 lg:grid-cols-12 lg:mb-[150px]">
          <span className="text-sm lg:col-span-6 lg:col-start-6">ABOUT ME</span>
          <p className="text-[16px] lg:col-span-6 lg:col-start-6">
            I've been working as an UX/UI Designer and Product Designer for 4 years, developing digital
            products and corporate websites for clients across various industries. Currently working at
            FutureBrand, a consulting design agency, my work has been focused on aligning brand identity with
            digital experience to create enhanced user experiences.
          </p>
          <p className="text-[16px] lg:col-span-6 lg:col-start-6">
            I've worked with notable brands such as Nescau, Seara, iFood, Stone, Banco do Brasil, Beontag,
            Banco Pine, SP Invisível, Banco da Amazônia, Motiva (ex-CCR), AAN and Luz da Lua. I had the
            opportunity to collaborate with FutureBrand’s New York team in multidisciplinary projects.
          </p>
          <p className="text-[16px] lg:col-span-6 lg:col-start-6">
            My expertise lies in connecting brands and digital products and technology teams, covering UX/UI
            design, product design, design system, user research and no-code and low-code tools. 
          </p>
          <span className="text-sm lg:col-span-6 lg:col-start-6">ACCOMPLISHMENTS AND AWARDS</span>
          <div className="flex flex-col gap-y-2.5 lg:col-span-6 lg:col-start-6">
            <p className="text-[16px] font-bold">Red Dot Awards</p>
            <p className="text-[16px]">Oriz Partners - Website (2025)</p>
          </div>
          <div className="flex flex-col gap-y-2.5 lg:col-span-6 lg:col-start-6">
            <p className="text-[16px] font-bold">Latin Design Awards (LAD)</p>
            <p className="text-[16px]">Shortlist - Rolim (2025)</p>
            <p className="text-[16px]">Shortlist - ITA (2025)</p>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
