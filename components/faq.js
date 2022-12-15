import React from "react";
import Container from "./container";
import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";

export default function Faq() {
  return (
    <Container className="!p-0">
      <div className="w-full max-w-2xl p-2 mx-auto rounded-2xl">
        {faqdata.map((item, index) => (
          <div key={item.question} className="mb-5">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex items-center justify-between w-full px-4 py-4 text-lg text-left text-gray-800 rounded-lg bg-gray-50 hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-indigo-100 focus-visible:ring-opacity-75 dark:bg-trueGray-800 dark:text-gray-200">
                    <span>{item.question}</span>
                    <ChevronUpIcon
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-indigo-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-500 dark:text-gray-300">
                    {item.answer}
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          </div>
        ))}
      </div>
    </Container>
  );
}

const faqdata = [
  {
    question: "Can anyone invest in Infinit Capital?",
    answer: "yes! Everyone can start investing with pd infinity regardless of your experience. We also lowered the minimum investment as low as we can to 500$ to make it more accessible for as many people as possible. ",
  },
  {
    question: "How are my returns going to be paid out?",
    answer: "Your returns will be sent out to your wallet of choice on a monthly basis.",
  },
  {
    question: "How do I get started with Infinit Capital? ",
    answer:
      "All you have to do to start investing with us is inquiring us through our website, our team will take care of the rest! ",
  },
  {
    question: "How will Infinit Capital invest my capital? ",
    answer:
      "We will use your capital to trade the best low risk opportunities within the crypto space.",
  },
];
