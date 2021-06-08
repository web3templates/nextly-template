import Head from "next/head";
import Benefits from "../components/benefits";
import Hero from "../components/hero";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nextly - Free Nextjs & TailwindCSS Landing Page Template</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <Hero />
      <Benefits />
    </>
  );
}
