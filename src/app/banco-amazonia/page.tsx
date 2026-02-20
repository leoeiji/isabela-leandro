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
        name="Banco da Amazônia"
        description="With over 80 years of experience, Banco da Amazônia has always
        played a fundamental role in shaping the territory it carries in its name.
        Present throughout the entire Legal Amazon region, the institution plays a
        strategic role in the region’s economic, social, and environmental development.
        Despite its relevance, the brand no longer reflected the future-oriented vision
        that had come to guide the Bank’s journey. It was time to renew not only its
        positioning, but also its expression, organizational culture, narrative, and
        relationship with the territory so it became more digital-oriented."
        services={["User Interface", "User Experience"]}
        agency="FutureBrand"
        year="2026"
        cover="/images/banco-amazonia/cover.mp4"
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
                  content: `For the digital aspect of the rebranding, Bank of Amazônia
                  had a huge challenge: renew their website reflecting the new
                  positioning and visual identity, while also updating their technology;
                  and most challenging of all, creating a core banking app from scratch.
                  The core of the work was to not only design new products for them,
                  but to also shift their culture and mindset to always search a
                  future-oriented experience.`,
                },
              ],
            },
            {
              type: "video",
              src: "/images/banco-amazonia/1.mp4",
            },
            {
              type: "video",
              src: "/images/banco-amazonia/2.mp4",
            },
          ]}
        />

        <ProjectSection
          title="SOLUTION"
          subSections={[
            {
              type: "text",
              content: [
                {
                  title: "",
                  content: `Based on active listening with employees, specialists, and
                  local representatives, we developed a brand strategy from the inside
                  out — aligning positioning, culture, and identity. The new brand
                  presents the Bank as a bridge between traditional knowledge and
                  technological innovation, recognizing the Amazon as a living ecosystem
                  of solutions. It reflects this new chapter with greater lightness,
                  closeness, and dynamism — without losing institutional solidity.
                  Colors, shapes, and language were all designed to express a living
                  brand, deeply connected to the territory and in tune with those who
                  inhabit and transform the Amazon every day.`,
                },
              ],
            },
            {
              type: "video",
              src: "/images/banco-amazonia/3.mp4",
            },
            {
              type: "video",
              src: "/images/banco-amazonia/4.mp4",
            },
          ]}
        />

        <ProjectCredits
          teams={[
            {
              name: "UX/UI",
              members: ["Isabela Leandro", "Julia Oliveira"],
            },
            {
              name: "Lead Digital",
              members: ["Rodrigo Alarcon"],
            },
            {
              name: "",
              members: [
                "Business Account: Beatriz Serra, Marina Ribeiro, Vinicius Abreu",
                "Strategic Direction – Brand, Culture, ESG, and Business: Felipe Luz, Isabel Sobral, Karen Fontana, Rodrigo Valdevite",
                "Strategy – Brand, Culture, ESG, and Business: Camila Costa, Gabriel Daher, Marina Bruzadin, Mariana Batista, Olivia Moraes, Raquel Botacci, Sofia Barbará, Tatiana Garcia",
                "Research, Data & Insights: Estela Brunhara, Gabriel Azevedo, Isabel Mossato, Jamille Machado, Leonardo Fioretti, Sofia Azevedo",
                "Design: Alexandre Ruzzuti, Amanda Emilia, Camila Izumi, Giulia Paladino, Giulia Ferreira, Giovanna Moretti, Victor Silva",
                "Copywriting: Andressa Trindade, Fernanda Damas, Gabriel Cipriani, Thayná Alves",
                "Motion Graphics: Francisco Fernandes, César Quirino, Higor Santos, Rebeca Prado, Douglas Khozam",
                "3D: Vitor OlianiProduction: Everton Silva",
                "Customer Experience (CX): Felipe Montagnoli, Fernanda Lins, Monica Kato",
              ],
            },
          ]}
        />
      </main>
      <ProjectSwitch
        nextProject={{ name: "Oriz", endpoint: "/oriz-partners" }}
        previousProject={{ name: "Home", endpoint: "/" }}
      />
      <Footer />
    </>
  );
}
