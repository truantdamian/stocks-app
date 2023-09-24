"use client";

import { useMemo, useRef, useState } from "react";
import { createAutocomplete } from "@algolia/autocomplete-core";
import { TextField } from "./TextField";

export const AutoComplete = (props) => {
  const inputRef = useRef(null);

  const [autocompleteState, setAutocompleteState] = useState({
    collections: [],
    isOpen: false,
  });

  const [textSelected, setTextSelected] = useState("");

  const handleChange = ({ target }) => {
    setTextSelected(target.value);
  };

  const autocomplete = useMemo(
    () =>
      createAutocomplete({
        placeholder: "Busca tu oferta",
        onStateChange: ({ state }) => setAutocompleteState(state),
        getSources: () => [
          {
            sourceId: "offers-next-api",
            getItems: ({ query }) => {
              if (!!query) {
                return fetch(`/api/stock?symbol=${query}&name=&page=-1`).then(
                  (res) => res.json()
                );
              }
            },
            onSelect: function (event) {
              console.log("test");
              setAutocompleteState({ ...autocompleteState, isOpen: false });
            },
          },
        ],
      }),
    [props]
  );

  const inputProps = autocomplete.getInputProps({
    inputElement: inputRef.current,
  });

  return (
    <div className="relative">
      <TextField
        ref={inputRef}
        placeholder="Symbol"
        value={textSelected}
        onChange={handleChange}
        {...inputProps}
      />
      {autocompleteState.isOpen && (
        <div className="w-full absolute mt-16 top-0 left-0 border border-gray-100 bg-white overflow-hidden rounded-lg shadow-lg z-10">
          {autocompleteState.collections.map((collection, index) => {
            const { items } = collection;
            return (
              <section
                className="max-h-96 overflow-y-auto w-full"
                key={`section-${index}`}
              >
                {items.length > 0 && (
                  <ul {...autocomplete.getListProps()}>
                    {items.map((item) => (
                      <div
                        key={`${item.symbol}-${item.mic_code}`}
                        className="p-2 hover:bg-gray-100 cursor-pointer"
                      >
                        {item.symbol}
                      </div>
                    ))}
                  </ul>
                )}
              </section>
            );
          })}
        </div>
      )}
    </div>
  );
};
