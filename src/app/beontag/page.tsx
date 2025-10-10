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
        name="Beontag"
        description="Following its global rebranding, Beontag—a leading company in IoT 
        solutions—sought to create a digital platform that would reflect this 
        transformation and efficiently integrate its product portfolio.The site
        features a responsive design, seamless catalog integration, and an optimized
        search system, making it easier for users to find products. In addition, the
        platform highlights Beontag’s expertise in cutting-edge technology and reflects
        its corporate identity—reinforcing its position as a leader in the IoT sector.
        With this evolution, the company has strengthened its digital presence and
        enhanced the experience for clients and business partners alike."
        services={["User Interface", "User Experience"]}
        agency="FutureBrand"
        year="2024"
        cover="/images/beontag/cover.png"
      />
      <main className="mx-4">
        <ProjectSection
          title="PROCESS"
          subSections={[
            {
              type: "text",
              content: [
                {
                  title: "Discovery",
                  content: `To address the challenges and meet audience needs, a
                  strategic and collaborative approach was adopted, including
                  interactive workshops with both internal and external stakeholders. 
                  During these workshops, key internal and external personas were
                  mapped—an essential step in developing a personalized navigation
                  experience, as the website functions as a product catalog and serves
                  a variety of user profiles.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/beontag/Frame 20.png",
              alt: "Project Overview",
              width: 1400,
              height: 506,
            },
            {
              type: "text",
              content: [
                {
                  title: "Sitemap",
                  content: `After compiling the insights gathered during the discovery
                  phase, I designed the website’s sitemap by considering how each
                  audience profile in the regions where Beontag operates interacts with
                  the company’s products and solutions.`,
                },
                {
                  title: "Wireframe",
                  content: `The wireframe was designed in medium-to-high fidelity,
                  consolidating the user navigation through prototypes developed
                  in Figma, which were validated with the brand’s stakeholders in
                  each country.`,
                },
                {
                  title: "",
                  content: `The website was designed to provide a seamless experience
                  for both Beontag’s sales team and customers who prefer to navigate
                  independently. The content was structured dynamically, with
                  personalized navigation based on each user's technical level—offering
                  an intuitive experience for beginners and more in-depth information
                  for technical users.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/beontag/Captura de Tela 2025-05-07 às 22.28.46 1.png",
              alt: "Project Overview",
              width: 1400,
              height: 821,
            },
            {
              type: "image",
              src: "/images/beontag/Captura de Tela 2025-05-07 às 22.53.26 1.png",
              alt: "Project Overview",
              width: 1400,
              height: 626,
            },
            {
              type: "text",
              content: [
                {
                  title: "UI Design",
                  content: `The final interface design leveraged brand elements to
                  create a clean, easy-to-navigate layout, with a key highlight being
                  the geolocation-based navigation. This feature automatically adjusts
                  the displayed portfolio according to the user’s region, ensuring
                  information is both relevant and appropriately tailored.`,
                },
              ],
            },
            {
              type: "image",
              src: "/images/beontag/Frame 15.png",
              alt: "Project Overview",
              width: 1400,
              height: 352,
            },
            {
              type: "image",
              src: "/images/beontag/lad_cover.png",
              alt: "Project Overview",
              width: 1400,
              height: 735,
            },
            {
              type: "image",
              src: "/images/beontag/grid-beontag 1.png",
              alt: "Project Overview",
              width: 1400,
              height: 735,
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
        nextProject={{ name: "ITA Eng.", endpoint: "/ita" }}
        previousProject={{ name: "Carbonext", endpoint: "/carbonext" }}
      />
      <Footer />
    </>
  );
}
