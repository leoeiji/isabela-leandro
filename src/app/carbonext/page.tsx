import { ProjectHeader } from "@/components/header";
import { ProjectPresentation } from "@/components/project-presentation";
import { ProjectSection } from "@/components/project-section";
import { ProjectCredits } from "@/components/project-credits";
import { ProjectSwitch } from "@/components/project-switch";
import { Footer } from "@/components/footer";

export default function ItaEngineering() {
  return (
    <>
      <ProjectHeader />
      <ProjectPresentation
        name="Carbonext"
        description="Carbonext is a pioneering company in nature-based solutions to
        combat climate change through carbon credit generation and forest conservation.
        The focuses on preserving the Amazon Rainforest by implementing REDD+
        (Reducing Emissions from Deforestation and Forest Degradation) projects.
        The website serves as a comprehensive resource for individuals and businesses
        seeking to offset their greenhouse gas emissions by purchasing verified carbon
        credits."
        services={["User Interface", "User Experience"]}
        agency="FutureBrand"
        year="2025"
        cover="/images/carbonext/cover.png"
      />
      <main className="mx-4">
        <ProjectSection
          title="PROCESS"
          subSections={[
            {
              type: "text",
              content: [
                {
                  title: "Discovery / Deep-dive",
                  content: `To fully understand Carbonext’s operations, projects, and
                  solutions, we conducted an in-depth immersion into the company’s
                  history and activities, working closely with brand stakeholders and
                  performing an extensive analysis of its website and digital products.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/carbonext/1.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
            {
              type: "text",
              content: [
                {
                  title: "Sitemap",
                  content: `Following the immersion, we identified three main user
                  profiles for the website, along with other key stakeholders that
                  needed to be considered. Based on these insights, we developed the
                  sitemap by clustering relevant information for each audience, which
                  guided the definition of the site’s main menu.`,
                },
                {
                  title: "Wireframe",
                  content: `The wireframe was developed after defining the sitemap and
                  the content to be featured on the website. In addition to showcasing
                  its projects and solutions, Carbonext positioned itself as a platform
                  for sharing knowledge about the carbon market and climate change.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/carbonext/2.png",
              alt: "Project Overview",
              width: 1400,
              height: 680,
            },
            {
              type: "text",
              content: [
                {
                  title: "UI Design",
                  content: `The website interface features simple and fluid navigation,
                  utilizing dark mode as a resource that reflects technology and
                  innovation. It incorporates modern and easily understandable style 
                  references, along with microinteractions that delight the user.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/carbonext/3.png",
              alt: "Project Overview",
              width: 1400,
              height: 626,
            },
            {
              type: "image",
              src: "/images/carbonext/4.png",
              alt: "Project Overview",
              width: 1400,
              height: 735,
            },
            {
              type: "image",
              src: "/images/carbonext/5.png",
              alt: "Project Overview",
              width: 1400,
              height: 459,
            },
            {
              type: "image",
              src: "/images/carbonext/6.png",
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
              members: ["Isabela Leandro"],
            },
            {
              name: "Development",
              members: ["Gerson Lima", "Alanderson de Rosa"],
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
      <ProjectSwitch
        nextProject={{ name: "Beontag", endpoint: "/beontag" }}
        previousProject={{ name: "Oriz", endpoint: "/oriz-partners" }}
      />
      <Footer />
    </>
  );
}
