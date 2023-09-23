"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { autocomplete } from "@algolia/autocomplete-js";

export const SearchForm = ({ name, symbol }) => {
  const refInput = useRef(null);
  const router = useRouter();
  const [search, setSearch] = useState({ symbol: symbol, name: name });

  const handleChange = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
  };

  const handleClick = () => {
    const { symbol, name } = search;

    console.log("search", symbol, name);

    router.push(`?symbol=${symbol}&name=${name}&page=1`);
  };

  useEffect(() => {
    autocomplete({
      container: "#autocomplete",
      placeholder: "Search for products",
      getSources() {
        return [];
      },
    });
  }, []);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        <div id="autocomplete"></div>
        <input
          ref={refInput}
          type="text"
          placeholder="Symbol"
          name="symbol"
          value={search["symbol"]}
          onChange={handleChange}
          className="block w-full md:w-56 placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={search["name"]}
          onChange={handleChange}
          className="block w-full placeholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40"
        />
        <button
          onClick={handleClick}
          className="px-6 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80"
        >
          Buscar
        </button>
      </div>
    </>
  );
};
