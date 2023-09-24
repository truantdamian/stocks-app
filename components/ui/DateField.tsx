"use client";
export const DateField = (props) => {
  const { className, error, ...otherProps } = props;
  return (
    <div className="w-full relative">
      <input
        type="date"
        className={`${
          error ? "border-red-400" : "border-gray-200"
        } block w-full placeholder-gray-400/70 dark:placeholder-gray-500 rounded-lg border  bg-white px-5 py-2.5 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40  ${className}`}
        {...otherProps}
      />
      {error && <p className="absolute text-xs text-red-400">{error}</p>}
    </div>
  );
};
