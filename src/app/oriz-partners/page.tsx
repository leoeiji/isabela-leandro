import { ProjectHeader } from "@/components/header";
import { ProjectPresentation } from "@/components/project-presentation";
import { ProjectSection } from "@/components/project-section";
import { ProjectCredits } from "@/components/project-credits";
import { ProjectSwitch } from "@/components/project-switch";
import { Footer } from "@/components/footer";

export default function Oriz() {
  return (
    <>
      <ProjectHeader />
      <ProjectPresentation
        name="Oriz Partners"
        description="The Oriz Partners brand embodies a bold vision: to broaden client's
        horizons through independent, tailor-made solutions. More than a positioning,
        it’s a promise of a dynamic and forward-thinking approach to wealth management.
        This vision plays a central role in shaping the new website — the brand’s
        digital flagship. Designed to reflect Oriz’s core values of exclusivity,
        transparency, and long-term vision, the site delivers a seamless, modern,
        and client-centric experience."
        services={["User Interface"]}
        agency="FutureBrand"
        year="2023"
        cover="/images/oriz-partners/cover.png"
      />
      <main className="mx-4">
        <ProjectSection
          title="CONTEXT"
          subSections={[
            {
              type: "text",
              content: [
                {
                  title: "",
                  content: `Oriz's digital project was carefully designed to create an
                  online environment that conveys sophistication and attention to
                  detail, reflecting the brand’s close and special relationship with
                  its clients. The main goal is to deliver an engaging experience
                  through subtle digital microinteractions that make navigation more
                  dynamic and intuitive. These small interactive details not only
                  enhance visual appeal but also contribute to a smoother and more
                  enjoyable user experience. One example of this approach is the
                  homepage banner, which changes according to the time of access,
                  displaying an image that corresponds to the time of day the user is
                  browsing—adding a personal, instantly relatable touch.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/oriz-partners/ORIZ_4.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
            {
              type: "image",
              src: "/images/oriz-partners/ORIZ_6.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
            {
              type: "image",
              src: "/images/oriz-partners/Frame 15.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
            {
              type: "image",
              src: "/images/oriz-partners/ORIZ_1 - Capa 1.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
          ]}
        />

        <ProjectCredits
          teams={[
            {
              name: "UX/UI",
              members: ["Fabio Massaru", "Isabela Leandro"],
            },
            {
              name: "Development",
              members: ["Gerson Lima", "Alanderson de Rosa"],
            },
            {
              name: "Lead Digital",
              members: ["Rodrigo Alarcon", "Victoria Bevilacqua"],
            },
            {
              name: "Project Management",
              members: ["Andressa Bliska"],
            },
            {
              name: "Branding",
              members: ["Thiago Cruz"],
            },
          ]}
        />
      </main>
      <ProjectSwitch
        nextProject={{ name: "Carbonext", endpoint: "/carbonext" }}
        previousProject={{ name: "Banco da Amazônia", endpoint: "/banco-amazonia" }}
      />
      <Footer />
    </>
  );
}
