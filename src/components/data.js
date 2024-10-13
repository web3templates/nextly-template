import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
  GlobeAltIcon,
  PaperAirplaneIcon,
  BriefcaseIcon,
  HandThumbUpIcon,
  NumberedListIcon,
  HomeModernIcon,
} from "@heroicons/react/24/solid";

import BenefitOneImg from "../../public/img/benefit-one.png";
import BenefitTwoImg from "../../public/img/benefit-two.png";
import Mission from "../../public/img/mission.png";

const mission = {
  title: "Missão",
  desc: `English with Labelle oferece aulas de inglês personalizadas desde 2019. Com anos de experiência 
  e um profundo conhecimento das necessidades dos alunos, desenvolvi um método de ensino que combina teoria 
  e prática, sempre adaptando-se ao seu ritmo e estilo de aprendizado. Meu objetivo é te proporcionar não 
  apenas o domínio da língua, mas também a confiança para se comunicar em qualquer situação.
`,
  image: Mission,
  bullets: [],
};

const benefitOne = {
  title: "Valores",
  desc: "Nossa missão é proporcionar uma experiência de aprendizado única e personalizada, construída sobre os pilares:",
  image: BenefitOneImg,
  bullets: [
    {
      title: "Honestidade - Compromisso",
      desc: "",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Foco no aluno - Visão estratégica",
      desc: "",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Dedicação - Inovação",
      desc: "",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Cursos e Serviços",
  desc: "",
  image: BenefitTwoImg,
  bullets: [
    {
      title: "General English",
      desc: "Desenvolva o idioma do iniciante ao avançado",
      icon: <GlobeAltIcon />,
    },
    {
      title: "Travel English",
      desc: "Prepare-se para a sua viagem",
      icon: <PaperAirplaneIcon />,
    },
    {
      title: "Business English",
      desc: "Inglês para negócios",
      icon: <BriefcaseIcon />,
    },
    {
      title: "Proficiência do idioma",
      desc: "Preparação para exames de proficiência",
      icon: <NumberedListIcon />,
    },
    {
      title: "Au Pair",
      desc: "Preparação para Au Pair program",
      icon: <HomeModernIcon />,
    },
  ],
};

export { benefitOne, benefitTwo, mission };
