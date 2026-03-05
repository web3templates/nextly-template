import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";

export default function Home() {
  return (
    <Container>
      <Hero />
      <SectionTitle
        id="registration-section"
        preTitle="Register Interest"
        title="Register Your Interest Here"
      >
        Form fields
      </SectionTitle>
    </Container>
  );
}
