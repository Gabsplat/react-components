import { useState } from "react";

const defaultList = ["Hola, que tal", "Como", "Estas"];

export default function SearchList({ data, placeholder }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <section>
      <input
        placeholder={placeholder || "Search..."}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="appearance-none text-white focus:outline-cyan-300 focus:outline focus:outline-2 bg-neutral-900 caret-cyan-500 px-4 py-2 rounded-xl w-96"
      />
      <div className="mt-4 px-3">
        {inputValue !== ""
          ? defaultList.filter((item) =>
              item.toLowerCase().includes(inputValue.toLowerCase())
            )
          : defaultList.map((item) => <h5>{item}</h5>)}
      </div>
    </section>
  );
}
