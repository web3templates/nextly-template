import React from "react";
import { Container } from "@/components/Container";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-custom-dark-purple px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl shadow-[0_0_40px_rgba(142,68,173,0.3)] border border-custom-purple">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-bold lg:text-4xl font-nunito">
            Ready to scale your business?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl font-inter">
            Let&apos;s build something great together.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="mailto:info@cypherridge.com"
            className="inline-block py-3 mx-auto text-lg font-bold text-center text-custom-dark-purple bg-white rounded-full px-7 lg:px-10 lg:py-4 hover:bg-gray-100 transition-colors font-nunito"
          >
            Start a Project
          </a>
        </div>
      </div>
    </Container>
  );
};
