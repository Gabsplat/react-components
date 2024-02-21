import { useEffect, useState } from "react";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

export default function Accordion({
  data,
  style,
  defaultOpenIndex,
  allowMultipleOpen,
}) {
  // -> here I want to set the state
  const [currentItemState, setCurrentItemState] = useState(() => {
    let initialItemState = data.map(() => false);
    if (defaultOpenIndex >= 0 && defaultOpenIndex < data.length) {
      initialItemState[defaultOpenIndex] = true;
    }
    return initialItemState;
  });

  const handleItemClick = (index) => {
    const newItemStates = currentItemState.map((itemState, idx) => {
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

    setCurrentItemState(newItemStates);
    return newItemStates;
  };

  return (
    <section
      style={style}
      className="bg-neutral-900 text-white w-[40rem] rounded-xl overflow-hidden border-1 border-black"
    >
      {data.map((item, index) => {
        return (
          <AccordionItem
            key={item.title}
            title={item.title}
            paragraph={item.paragraph}
            setOpen={() => handleItemClick(index)}
            isOpen={currentItemState[index]}
          />
        );
      })}
    </section>
  );
}

const AccordionItem = ({ title, paragraph, isOpen, setOpen, icon: Icon }) => {
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
