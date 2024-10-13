import React from "react";
import { Container } from "@/components/Container";
import { FaWhatsapp } from "react-icons/fa";

export const Cta = () => {
  return (
    <Container>
      <div className="flex flex-wrap items-center justify-between w-full max-w-4xl gap-5 mx-auto text-white bg-indigo-600 px-7 py-7 lg:px-12 lg:py-12 lg:flex-nowrap rounded-xl">
        <div className="flex-grow text-center lg:text-left">
          <h2 className="text-2xl font-medium lg:text-3xl">
            Prontos para iniciar?
          </h2>
          <p className="mt-2 font-medium text-white text-opacity-90 lg:text-xl">
            Entre em contato e comece sua jornada.
          </p>
        </div>
        <div className="flex-shrink-0 w-full text-center lg:w-auto">
          <a
            href="https://wa.me/5512991436595?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20ingl%C3%AAs."
            target="_blank"
            rel="noopener"
            className="flex items-center py-3 mx-auto text-lg font-medium text-center text-indigo-600 bg-white rounded-md px-7 lg:px-10 lg:py-5 "
          >
            FALE COMIGO
            <FaWhatsapp className="ml-2" style={{ width: 24, height: 24 }} />
          </a>
        </div>
      </div>
    </Container>
  );
};
