import Head from "next/head";
import Hero from "../components/hero";
import Navbar from "../components/navbar";
import SectionTitle from "../components/sectionTitle";

import { benefitOne, benefitTwo } from "../components/data";
import Video from "../components/video";
import Benefits from "../components/benefits";
import Footer from "../components/footer";
import Testimonials from "../components/testimonials";
import Cta from "../components/cta";
import Faq from "../components/faq";
import PopupWidget from "../components/popupWidget";
import Pricing from "../components/pricing";

//import dynamic from "next/dynamic";

// const Video = dynamic(() => import("../components/video"));

// const Benefits = dynamic(() => import("../components/benefits"));
// const Footer = dynamic(() => import("../components/footer"));
// const Testimonials = dynamic(() => import("../components/testimonials"));
// const Cta = dynamic(() => import("../components/cta"));
// const Faq = dynamic(() => import("../components/faq"));

// const PopupWidget = dynamic(() => import("../components/popupWidget"));

export default function Home() {
  return (
    <>
      <Head>
        <title>Infinit Capital - Worlds leading crypto hedgefund </title>
        <meta
          name="description"
          content="Infinit Capital - Worlds leading crypto hedgefund "
        />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <Navbar />
      <Hero />
      <SectionTitle
        pretitle="Infinit Capital Benefits"
        title=" Why you should choose us?">
        Infinit Capital is asia's first crypto hedge fund,
        Let us help you to grow your crypto wealth 
        by providing monthly returns of up to 25%!
      </SectionTitle>
      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />
      <Pricing />
      <SectionTitle
        pretitle="Watch a video"
        title="Find out how we work!">
        Watch this video below to learn everything about us and
        how we handle our customers.
      </SectionTitle>
      <Video />
      {/* <SectionTitle
        pretitle="Testimonials"
        title="Here's what our customers said">
        Testimonails is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>
      <Testimonials /> */}
      <SectionTitle pretitle="FAQ" title="Frequently Asked Questions">
        For any further question's, please contact  us.
      </SectionTitle>
      <Faq />
      <Cta />
      {/* <Footer />
      <PopupWidget /> */}
    </>
  );
}
