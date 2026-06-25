import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CommandLineIcon,
  CircleStackIcon,
  CloudIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Artificial Intelligence & Data",
  desc: "AI that solves real problems, not just buzzword bingo. We build custom LLMs, chatbots, and AI integrations that scale with your business.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Custom AI Solutions",
      desc: "Tailored AI models trained on your data to automate and optimize workflows.",
      icon: <CpuChipIcon />,
    },
    {
      title: "Data Engineering",
      desc: "Robust data pipelines to process, analyze, and visualize your core business metrics.",
      icon: <CircleStackIcon />,
    },
    {
      title: "Cloud Infrastructure",
      desc: "Scalable cloud architecture designed for high availability and performance.",
      icon: <CloudIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Web & Mobile Development",
  desc: "From napkin sketch to launch-ready product. We design and build applications that look good, feel smooth, and hold up at scale.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Custom Web Apps",
      desc: "Fast, reliable, and scalable web applications built with modern frameworks.",
      icon: <CodeBracketIcon />,
    },
    {
      title: "iOS & Android",
      desc: "Native and cross-platform mobile apps that deliver exceptional user experiences.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "API Development",
      desc: "Secure, high-performance APIs to connect your services and third-party tools.",
      icon: <CommandLineIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
