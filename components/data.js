import {
  EmojiHappyIcon,
  ChartSquareBarIcon,
  CursorClickIcon,
  DeviceMobileIcon,
  AdjustmentsIcon,
  SunIcon,
} from "@heroicons/react/outline";

import benefitOneImg from "../public/img/benefit-one.png";
import benefitTwoImg from "../public/img/benefit-two.png";

const benefitOne = {
  title: "Our Benefits",
  desc: "Our benefits include many more! Please visit our contact form for more information.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Monthly Returns",
      desc: "We provide monthly returns of up to 25% on your initial investment.",
      icon: <EmojiHappyIcon />,
    },
    {
      title: "Our Strategy",
      desc: "Our sophisticated trading strategies allow us to trade with an accuracy of over 75%.",
      icon: <ChartSquareBarIcon />,
    },
    {
      title: "Beginner-Friendly",
      desc: " No prior investment experience required , Start investing with as little as 500$.",
      icon: <CursorClickIcon />,
    },
  ],
};

const benefitTwo = {
  title: "How it Works",
  desc: "Simple 3 step process.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Choose the initial amount you want to invest based on our return on investment table.",
      desc: "1",
      icon: <DeviceMobileIcon />,
    },
    {
      title: "Inquire us through our website.",
      desc: "2",
      icon: <AdjustmentsIcon />,
    },
    {
      title: "Start earning monthly returns sent straight to your wallet of choice.  ",
      desc: "3",
      icon: <SunIcon />,
    },
  ],
};

export { benefitOne, benefitTwo };
