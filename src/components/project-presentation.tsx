import Image from "next/image";
import { FadeIn } from "@/components/fade-in";

interface JobPresentationProps {
  name: string;
  description: string;
  services: string[];
  agency: string;
  year: string;
  cover: string;
}

export function ProjectPresentation({
  name,
  description,
  services,
  agency,
  year,
  cover,
}: JobPresentationProps) {
  return (
    <>
      <FadeIn>
        <section className="grid grid-cols-2 mt-6 mx-4 lg:grid-cols-12">
          <h1 className="text-5xl lg:text-[84px] col-span-4 font-medium lg:col-span-5">{name}</h1>
          <div className="col-span-1 lg:hidden"></div>
          <div className="py-4 col-span-6 flex flex-col gap-y-6">
            <p className="text-lg font-light">{description}</p>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-sm font-medium text-[#9E9E9E]">SERVICE</p>
                {services.map((service, index) => (
                  <p key={index} className="text-[20px] font-medium">
                    {service}
                  </p>
                ))}
              </div>
              <div>
                <p className="text-sm font-medium text-[#9E9E9E]">AGENCY</p>
                <p className="text-[20px] font-medium">{agency}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-[#9E9E9E]">YEAR</p>
                <p className="text-[20px] font-medium">{year}</p>
              </div>
            </div>
          </div>
        </section>
      </FadeIn>
      <FadeIn delay={150}>
        {cover.endsWith(".mp4") ? (
          <video
            src={cover}
            autoPlay
            muted
            loop
            playsInline
            className="w-full mt-10 mb-4 h-[400px] lg:h-screen object-cover"
          />
        ) : (
          <Image
            src={cover}
            alt={`Cover image for ${name}`}
            className="w-full mt-10 mb-4 h-[400px] lg:h-screen object-cover"
            width={1440}
            height={680}
          />
        )}
      </FadeIn>
    </>
  );
}
