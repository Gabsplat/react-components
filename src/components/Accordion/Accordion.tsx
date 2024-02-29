import { useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

type AccordionData = {
  title: string;
  paragraph: string;
};

interface AccordionProps {
  accordionData: AccordionData[];
  className: string;
  defaultOpenIndex: number;
  allowMultipleOpen: boolean;
}

export default function Accordion({
  accordionData,
  className,
  defaultOpenIndex,
  allowMultipleOpen,
}: AccordionProps) {
  const [tabsState, setTabsState] = useState(() => {
    try {
      let initialItemState = accordionData.map(() => false);
      if (defaultOpenIndex >= 0 && defaultOpenIndex < accordionData.length) {
        initialItemState[defaultOpenIndex] = true;
      }
      return initialItemState;
    } catch (e) {
      return null;
    }
  });

  const handleItemClick = (index: number) => {
    if (!tabsState) return;

    const newItemStates = tabsState.map((itemState, idx) => {
      if (index === idx) {
        if (!allowMultipleOpen && itemState === true) {
          return true;
        }
        return !itemState;
      }
      if (!allowMultipleOpen) {
        return false;
      }
      return itemState;
    });

    setTabsState(newItemStates);
    return newItemStates;
  };

  return (
    <section
      className={`bg-neutral-900 text-white w-[40rem] rounded-xl overflow-hidden border-1 border-black ${
        className || ""
      }`}
    >
      {accordionData &&
        tabsState &&
        accordionData.map((tabData, index) => {
          return (
            <AccordionItem
              key={tabData.title}
              title={tabData.title}
              paragraph={tabData.paragraph}
              setOpen={() => handleItemClick(index) || false}
              isOpen={tabsState[index]}
            />
          );
        })}
    </section>
  );
}

interface AccordionItemProps {
  title: string;
  paragraph: string;
  isOpen: boolean;
  setOpen: () => {};
}

const AccordionItem = ({
  title,
  paragraph,
  isOpen,
  setOpen,
}: AccordionItemProps) => {
  return (
    <div className="border-1 border-black">
      <button
        onClick={() => setOpen()}
        className={` w-full px-6 py-4 flex cursor-pointer justify-between text-left ${
          isOpen
            ? "border-0 border-b-2 border-solid border-cyan-200 bg-cyan-400"
            : ""
        }`}
      >
        <span>{title}</span>
        {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
      </button>
      {isOpen && (
        <span
          className={`px-6 pt-5 pb-6 block ${
            isOpen ? "border-0 border-b-2 border-solid border-neutral-700" : ""
          }`}
        >
          {paragraph}
        </span>
      )}
    </div>
  );
};
