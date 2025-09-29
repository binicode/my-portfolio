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
    <div className="space-y-8 lg:pr-8">
      <StatusIndicator />
      <Greeting />
      <MainHeading />
      <TitleWithIcons />
      <Description />
      <HeroButtons scrollToSection={scrollToSection} />
      <SocialLinks />
    </div>
  );
}