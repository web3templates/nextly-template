import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <>
      <Hero />
      <Container>
        <SectionTitle
          preTitle="Our Services"
          title="What We Do"
        >
          We provide smart, innovative, robust, and scalable solutions for all your software development needs. From AI integrations to complex web and mobile platforms.
        </SectionTitle>

        <Benefits data={benefitOne} />
        <Benefits imgPos="right" data={benefitTwo} />

        <SectionTitle
          preTitle="Our Process"
          title="How we bring your idea to life"
        >
          We believe in transparency, speed, and quality. Watch a brief overview of how we work with founders and businesses to deliver top-tier products.
        </SectionTitle>

        <Video videoId="fZ0D0cnR88E" />

        <SectionTitle
          preTitle="Testimonials"
          title="Here's what our partners say"
        >
          We don&apos;t just build software, we build businesses. Hear from the founders and companies we&apos;ve helped scale.
        </SectionTitle>

        <Testimonials />

        <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
          Got questions? We&apos;ve got answers. If you don&apos;t see your question here, feel free to reach out to us directly.
        </SectionTitle>

        <Faq />
        <Cta />
      </Container>
    </>
  );
}
