import Image from "next/image";
import React from "react";
import { Container } from "@/components/Container";

import userOneImg from "../../public/img/tami_voshida.jpg";
import userTwoImg from "../../public/img/hemelly_gleice.jpg";
import userThreeImg from "../../public/img/diogo.jpg";

export const Testimonials = () => {
  return (
    <Container>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
        <div className="lg:col-span-2 xl:col-auto">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Muito atenciosa, cria um <Mark>ambiente confortável</Mark> e
              seguro para o aprendizado. Adapta as aulas para preferências e
              características de cada aluno e é sempre aberta a feedbacks. Além
              de ser uma companhia maravilhosa para papos em inglês.
            </p>

            <Avatar image={userOneImg} name="Tamires Voshida" title="" />
          </div>
        </div>
        <div>
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              I love my classes. The best and the <Mark>funniest moment</Mark>{" "}
              of my day!! She`s excellent. I recommend!!
              <br />
              <br />
              Se tu não entendeu o que eu escrevi, deveria fazer aulas com ela
              :D hehe
            </p>

            <Avatar image={userTwoImg} name="Dylan Ambrose" title="" />
          </div>
        </div>
        <div className="">
          <div className="flex flex-col justify-between w-full h-full bg-gray-100 px-14 rounded-2xl py-14 dark:bg-trueGray-800">
            <p className="text-2xl leading-normal ">
              Professora sensacional, método de ensino perfeito, atenciosa com
              os alunos, <Mark>metodologia de ensino</Mark> que mudou minha
              experiência no inglês, vcs não vão se arrepender.
            </p>

            <Avatar image={userThreeImg} name="Diogo Ayslan" title="" />
          </div>
        </div>
      </div>
    </Container>
  );
};

interface AvatarProps {
  image: any;
  name: string;
  title: string;
}

function Avatar(props: Readonly<AvatarProps>) {
  return (
    <div className="flex items-center mt-8 space-x-3">
      <div className="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
        <Image
          src={props.image}
          width="40"
          height="40"
          alt="Avatar"
          placeholder="blur"
        />
      </div>
      <div>
        <div className="text-lg font-medium">{props.name}</div>
        <div className="text-gray-600 dark:text-gray-400">{props.title}</div>
      </div>
    </div>
  );
}

export function Mark(props: { readonly children: React.ReactNode }) {
  return (
    <>
      {" "}
      <mark className="text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 dark:ring-indigo-900 dark:bg-indigo-900 dark:text-indigo-200">
        {props.children}
      </mark>{" "}
    </>
  );
}
