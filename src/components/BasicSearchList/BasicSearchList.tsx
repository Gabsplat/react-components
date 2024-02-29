import { useMemo, useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";

type SearchListItem = {
  text: string;
  href?: string;
};

interface SearchListProps {
  data: SearchListItem[];
  placeholder?: string;
}

export default function BasicSearchList({
  data,
  placeholder,
}: SearchListProps) {
  const [inputValue, setInputValue] = useState("");

  const filteredList = useMemo(() => {
    if (inputValue !== "") {
      return data.filter((listItem) =>
        listItem.text.toLowerCase().includes(inputValue.toLowerCase())
      );
    }
    return data;
  }, [data, inputValue]);

  return (
    <section>
      <input
        placeholder={placeholder || "Search..."}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="appearance-none text-white focus:outline-cyan-300 focus:outline focus:outline-2 bg-neutral-900 caret-cyan-500 px-4 py-2 rounded-xl w-96"
      />
      <div className="flex flex-col gap-2 mt-2">
        {filteredList.length > 0 ? (
          filteredList.map((item) => (
            <Link
              to={item.href || "/"}
              className="flex justify-between items-center group bg-neutral-900 rounded-xl px-3 py-2 font-normal text-white hover:text-white hover:ml-2 transition-all ease-in duration-75"
            >
              <span>{item.text}</span>
              <IoIosArrowForward className="hidden group-hover:block" />
            </Link>
          ))
        ) : (
          <span>No results found...</span>
        )}
      </div>
    </section>
  );
}
