import { FaWhatsapp } from "react-icons/fa";

//components
import Image from "next/image";

//image
import heroImg from "../../public/img/hero.png";

//internal components
import { Container } from "@/components/Container";
import StudentTypeList from "./student-type/student-type-list";

//files
import dataStudent from "../data-json/dataStudent.json";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap">
        <div className="flex items-center w-full lg:w-1/2 mb-20">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Domine o inglês,
              <br /> domine o mundo
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Aulas personalizadas e online de inglês respeitando o seu ritmo de
              aprendizado
            </p>
            <StudentTypeList data={dataStudent} />

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row mt-6">
              <a
                href="https://wa.me/5512991436595?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20as%20aulas%20de%20ingl%C3%AAs."
                target="_blank"
                rel="noopener"
                className="flex items-center px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
              >
                FALE COMIGO
                <FaWhatsapp
                  className="ml-2"
                  style={{ width: 24, height: 24 }}
                />
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2 sm:mb-10 lg:mb-0">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </Container>
    </>
  );
};
