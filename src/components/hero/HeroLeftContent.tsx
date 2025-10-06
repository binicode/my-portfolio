import { StatusIndicator } from "./StatusIndicator";
import { Greeting } from "./Greeting";
import { MainHeading } from "./MainHeading";
import { TitleWithIcons } from "./TitleWithIcons";
import { Description } from "./Description";
import { HeroButtons } from "./HeroButtons";
import { SocialLinks } from "./SocialLinks";

interface HeroLeftContentProps {
  scrollToSection: (href: string) => void;
}

export function HeroLeftContent({ scrollToSection }: HeroLeftContentProps) {
  return (
    <section className="space-y-8 lg:pr-8" aria-labelledby="hero-main-heading">
      <StatusIndicator />
      <Greeting />
      <MainHeading />
      <TitleWithIcons />
      <div className="hidden md:block">
        <Description />
      </div>
      <HeroButtons scrollToSection={scrollToSection} />
      <SocialLinks />
    </section>
  );
}
