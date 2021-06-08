import Image from "next/image";
import React from "react";
import Container from "./container";
import SectionTitle from "./sectionTitle";
import { AnnotationIcon } from "@heroicons/react/outline";

export default function Benefits(props) {
  return (
    <>
      <SectionTitle
        pretitle="Nextly Benefits"
        title=" Why should you use this landing page">
        Nextly is a free landing page & marketing website template for startups
        and indie projects. Its built with Next.js & TailwindCSS. And its
        completely open-source.
      </SectionTitle>

      <Container className="flex flex-wrap ">
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div>
            <Image
              src="/img/benefit.png"
              width="521"
              height="482"
              alt="Benefits"
              layout="intrinsic"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center w-full lg:w-1/2">
          <SectionTitle title="Highlight your benefit" align="left">
            You can use this space to highlight your first benefit or a feature
            of your product. It can also contain an image or Illustration like
            in the example along with some bullet points.
          </SectionTitle>
          <div>
            <div className="flex space-x-3">
              <div className="w-6 h-6 bg-indigo-500">
                <AnnotationIcon className="w-5 h-5 text-blue-500" />
              </div>
              <div>text</div>
            </div>
          </div>
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          NEXTLY BENEFITS Why should you use this landing page Nextly is a free
          landing page & marketing website template for startups and indie
          projects. Its built with Next.js & TailwindCSS. And its completely
          open-source.
          <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          NEXTLY BENEFITS Why should you use this landing page Nextly is a free
          landing page & marketing website template for startups and indie
          projects. Its built with Next.js & TailwindCSS. And its completely
          open-source.
          <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
          NEXTLY BENEFITS Why should you use this landing page Nextly is a free
          landing page & marketing website template for startups and indie
          projects. Its built with Next.js & TailwindCSS. And its completely
          open-source.
          <br />
          <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
        </div>
      </Container>
    </>
  );
}
