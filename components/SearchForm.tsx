"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField } from "./ui/TextField";
import { Button } from "./ui/Button";
import { AutoComplete } from "./ui/AutoComplete";

export const SearchForm = ({ name, symbol }) => {
  const router = useRouter();
  const [search, setSearch] = useState({ symbol: symbol, name: name });

  const handleChange = ({ target }) => {
    setSearch({ ...search, [target.name]: target.value });
  };

  const handleClick = () => {
    const { symbol, name } = search;
    router.push(`?symbol=${symbol}&name=${name}&page=1`);
  };

  return (
    <>
      <div className="flex flex-col md:flex-row gap-4">
        {/* <TextField
          placeholder="Symbol"
          name="symbol"
          value={search["symbol"]}
          className={"w-full md:w-56"}
          onChange={handleChange}
        /> */}

        <AutoComplete id="symbol" placeholder="Symbol" />

        <TextField
          placeholder="Name"
          name="name"
          value={search["name"]}
          className={"w-full"}
          onChange={handleChange}
        />
        <Button onClick={handleClick}>Buscar</Button>
      </div>
    </>
  );
};
