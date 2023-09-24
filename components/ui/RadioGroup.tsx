"use client";
import { useLayoutEffect, useState } from "react";

const CheckIcon = () => {
  return (
    <svg
      className="hidden h-5 w-5 text-blue-600"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  );
};

export const RadioGroup = ({ config }) => {
  const [optionChecked, setOptionChecked] = useState("");

  const { nameGroup, defaultChecked, options, callbackClick } = config;

  useLayoutEffect(() => {
    setOptionChecked(defaultChecked);
  }, [defaultChecked]);

  const handleClick = (option) => {
    setOptionChecked(option.value);
    callbackClick(option.value);
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row">
      {options.map((option) => (
        <div className="w-full" key={option.value}>
          <input
            type="radio"
            name={nameGroup}
            value={option.value}
            id={option.id}
            className={`peer hidden [&:checked_+_label_svg]:block`}
            checked={option.value === optionChecked}
            readOnly
          />

          <label
            htmlFor={option.id}
            className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-blue-500 peer-checked:ring-1 peer-checked:ring-blue-500"
            onClick={() => handleClick(option)}
          >
            <div className="flex gap-2 flex-col">
              <div className="flex flex-row gap-2">
                <CheckIcon />
                <p className="text-gray-700">{option.label}</p>
              </div>
            </div>
          </label>
        </div>
      ))}
    </div>
  );
};
