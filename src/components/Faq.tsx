"use client";
import React from "react";
import { Container } from "@/components/Container";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

export const Faq = () => {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <DisclosureButton className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </DisclosureButton>
                  <DisclosurePanel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </DisclosurePanel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
};

const faqdata = [
  {
    question: "Como funciona?",
    answer:
      "Nossos cursos são personalizados, com aulas particulares ao vivo. Adaptamos nossas aulas às suas necessidades e objetivos específicos.",
  },
  {
    question: "Qual é o valor do investimento?",
    answer:
      "Oferecemos opções de preços flexíveis para se adequar ao seu orçamento. Para discutir suas necessidades individuais e preços, agende uma consulta gratuita",
  },
  {
    question: "É necessário já saber o inglês?",
    answer:
      "Não. Faremos uma pré-chamada que é essencial para entender seus objetivos de aprendizado. Discutiremos seu nível atual, interesses e agendaremos um horário conveniente para as aulas.",
  },
  {
    question: "O que diferencia nossos curso dos outros? ",
    answer:
      "Nossos cursos são únicos devido ao nosso foco em instrução personalizada e uma programação de aprendizado. Priorizamos suas necessidades e objetivos individuais para garantir que você obtenha os melhores resultados possíveis.",
  },
];
