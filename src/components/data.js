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
  desc: `English with Labelle nasceu em 2019, quando que eu tive a certeza que eu 
  queria fazer isso da minha vida, e após um período trabalhando informalmente. 
  Com o intuito de proporcionar um ambiente agradável e confortável durante as aulas, 
  sempre priorizei a respeitar o tempo de aprendizagem de cada aluno(a). 
  Cada indivíduo é único, bem como sua maneira de aprender, por isso eu desenvolvo
   um plano de ação individual. Acredito que o plano de ação é um dos meus 
   diferenciais, pois é o que permite aperfeiçoar as habilidades do aluno.
Também trato os meus alunos como os próprios responsáveis do seu aprendizado, 
portanto, eu dou meios e ferramentas para que ele possa continuar estudando 
após as aulas.
Minha missão é te ajudar a atingir os seus objetivos e finalmente realizar os 
seus sonhos!
`,
  image: Mission,
  bullets: [],
};

const benefitOne = {
  title: "Valores",
  desc: "Os compromissos que assumimos com nossos alunos e a sustentação do nosso trabalho tem como pilares:",
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
      icon: <HandThumbUpIcon />,
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
