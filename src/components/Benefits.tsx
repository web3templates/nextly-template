import Image from "next/image";
import React from "react";
import { Container }  from "@/components/Container";

interface BenefitsProps {
  imgPos?: "left" | "right";
  data: {
    imgPos?: "left" | "right";
    title: string;
    desc: string;
    image: any;
    bullets: {
      title: string;
      desc: string;
      icon: React.ReactNode;
    }[];
  };
}
export const Benefits = (props: Readonly<BenefitsProps>) => {
  const { data } = props;
  return (
      <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap ">
        <div
          className={`flex items-center justify-center w-full lg:w-1/2 ${
            props.imgPos === "right" ? "lg:order-1" : ""
          }`}>
          <div className="relative">
            {/* Background glow for image */}
            <div className="absolute inset-0 bg-custom-blue blur-[100px] opacity-30 rounded-full"></div>
            <Image
              src={data.image}
              width={521}
              height={521}
              alt="Benefits"
              className={"object-cover relative z-10 rounded-2xl"}
              placeholder="blur"
              blurDataURL={data.image.src}
            />
          </div>
        </div>

        <div
          className={`flex flex-wrap items-center w-full lg:w-1/2 ${
            data.imgPos === "right" ? "lg:justify-end" : ""
          }`}>
          <div>
            <div className="flex flex-col w-full mt-4">
              <h3 className="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-white lg:leading-tight lg:text-4xl font-nunito">
                {data.title}
              </h3>

              <p className="max-w-2xl py-4 text-lg leading-normal text-gray-400 lg:text-xl xl:text-xl font-inter">
                {data.desc}
              </p>
            </div>

            <div className="w-full mt-5">
              {data.bullets.map((item, index) => (
                <Benefit key={index} title={item.title} icon={item.icon}>
                  {item.desc}
                </Benefit>
              ))}
            </div>
          </div>
        </div>
      </Container>
  );
};

function Benefit(props: any) {
  return (
      <div className="flex items-start mt-8 space-x-4">
        <div className="flex items-center justify-center flex-shrink-0 mt-1 bg-white/5 border border-white/10 backdrop-blur-sm rounded-xl w-14 h-14 shadow-lg">
          {React.cloneElement(props.icon, {
            className: "w-7 h-7 text-custom-orange",
          })}
        </div>
        <div>
          <h4 className="text-xl font-bold text-white font-nunito">
            {props.title}
          </h4>
          <p className="mt-1 text-gray-400 font-inter">
            {props.children}
          </p>
        </div>
      </div>
  );
}
