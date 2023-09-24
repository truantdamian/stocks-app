"use client";
import { useState } from "react";

export const DropDownField = (props) => {
  const { options, error, onChange } = props;
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState({ value: "", text: "Intervalo" });

  const handleSelected = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange(option.value);
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="relative w-full">
        <div className="relative">
          <button
            onClick={handleClick}
            className={`${
              error
                ? "border-red-400 focus:border-red-500 focus:ring-red-300"
                : "border-gray-200 focus:border-blue-500 focus:ring-blue-300"
            } w-full border relative z-10 flex items-center p-2.5 text-sm text-gray-600 bg-white  rounded-md  focus:ring-opacity-40  focus:ring focus:outline-none`}
          >
            <span className="mx-1">{selected.text}</span>
            <svg
              className="w-5 h-5 mx-1"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 15.713L18.01 9.70299L16.597 8.28799L12 12.888L7.40399 8.28799L5.98999 9.70199L12 15.713Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
          {error && <p className="absolute text-xs text-red-400">{error}</p>}
        </div>

        {isOpen && (
          <div className="absolute left-0 z-20 w-56 py-2 mt-2 overflow-hidden origin-top-right bg-white rounded-md shadow-xl ">
            {options.map((option) => (
              <div
                key={option.value}
                onClick={() => handleSelected(option)}
                className="flex items-center p-3 -mt-2 text-sm text-gray-600 transition-colors duration-300 transform  hover:bg-gray-100"
              >
                {option.text}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
