import { ProjectHeader } from "@/components/header";
import { ProjectPresentation } from "@/components/project-presentation";
import { ProjectSection } from "@/components/project-section";
import { ProjectCredits } from "@/components/project-credits";
import { Footer } from "@/components/footer";

export default function ItaEngineering() {
  return (
    <>
      <ProjectHeader nextProjectEndpoint="/beontag" />
      <ProjectPresentation
        name="ITA Engenharia"
        description="After undergoing a rebranding process to revitalize its image and
          reinforce its position as a leader in the engineered wood sector, ITA faced
          its next major challenge: translating its innovative identity into the digital 
          space. The goal was to create a website that clearly reflects the company's
          cutting-edge vision and effectively communicates its expertise and excellence
          in a powerful way."
        services={["User Interface", "User Experience"]}
        agency="FutureBrand"
        year="2024"
        cover="/images/ita/cover.png"
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
                  content: `To achieve the goal of translating ITA's pioneering spirit into
                    the digital realm, a website was developed that redefines user
                    interaction. Featuring a minimalist yet captivating design, the site
                    blends a sophisticated aesthetic with a series of visual events that
                    engage the user. Navigation was conceived in a disruptive way, eliminating
                    traditional buttons and adopting a model where scrolling and cursor
                    clicks become the primary forms of interaction. This approach creates
                    an immersive experience that mirrors the innovative solutions offered
                    by ITA Engenharia and reflects its solid and creative trajectory in the
                    engineered wood market.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/ita/LAD ITA 1.png",
              alt: "Project Overview",
              width: 1400,
              height: 250,
            },
          ]}
        />
        <ProjectSection
          title="PROCESS"
          subSections={[
            {
              type: "text",
              content: [
                {
                  title: "Sitemap",
                  content: `Following the discovery phase—conducted through stakeholder
                  meetings and research—the development of the website's sitemap began.
                  By gaining a clear understanding of ITA Engenharia's solutions and market
                  positioning, it was possible to outline the site's information
                  architecture in a way that addresses the needs of all user profiles.
                  This ensured an optimized experience tailored to each type of visitor.`,
                },
                {
                  title: "Wireframe",
                  content: `After defining the sitemap, we designed medium-fidelity
                  wireframes for the entire website, with a particular focus on the
                  Solutions and Projects sections. We developed a system of listings
                  and filters to simplify navigation and enhance user experience.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/ita/wireframe.png",
              alt: "Project Overview",
              width: 1400,
              height: 250,
            },
            {
              type: "text",
              content: [
                {
                  title: "UI Design",
                  content: `Uniting the entire solution design process with ITA Engenharia's
                  new visual identity, we began the interface design phase. Closely aligned
                  with the brand's visual assets, we developed the project's styleguide and
                  designed the interface, incorporating microinteractions to create a more
                  disruptive navigation experience—without compromising functionality.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/ita/LAD ITA 3.png",
              alt: "Project Overview",
              width: 1400,
              height: 250,
            },
            {
              type: "image",
              src: "/images/ita/LAD ITA 4.png",
              alt: "Project Overview",
              width: 1400,
              height: 250,
            },
            {
              type: "image",
              src: "/images/ita/LAD ITA 2.png",
              alt: "Project Overview",
              width: 1400,
              height: 250,
            },
          ]}
        />
        <ProjectCredits
          teams={[
            {
              name: "UX/UI",
              members: ["Isabela Leandro", "Luana Baiocco"],
            },
            {
              name: "Development",
              members: ["Gerson Lima", "Alanderson de Rosa", "Felipe Oliveira"],
            },
            {
              name: "Lead Digital",
              members: ["Rodrigo Alarcon"],
            },
            {
              name: "Project Management",
              members: ["Andressa Bliska"],
            },
            {
              name: "Branding",
              members: ["FutureBrand"],
            },
          ]}
        />
      </main>
      <Footer />
    </>
  );
}
