import GetStarted from "@/components/GetStarted";
import PageHead from "@/components/PageHead";
import SectionDirectors from "./SectionDirectors";

const About = () => {
  return (
    <>
      <PageHead
        title="About"
        description="We help companies build dynamic teams made up of top global
              talent. Using our network of passionate professionals we drive
              innovation and deliver incredible outcomes. Talented, diverse
              teams shape the best products and experiences. We’ll bring those
              teams to you."
      />
      <SectionDirectors />
      <GetStarted />
    </>
  );
};

export default About;
