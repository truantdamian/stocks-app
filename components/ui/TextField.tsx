"use client";
export const TextField = (props) => {
  const { className, ...otherProps } = props;
  return (
    <input
      type="text"
      className={`blockplaceholder-gray-400/70 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 ${className}`}
      {...otherProps}
    />
  );
};
