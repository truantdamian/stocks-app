export const convertToDate = (date: string, separator: "-" | "/") => {
  const dateParse = date.split(separator);

  if (dateParse.length < 3) {
    return new Date();
  }

  const year = parseInt(dateParse[0]);
  const month = parseInt(dateParse[1]);
  const day = parseInt(dateParse[2]);

  return new Date(year, month - 1, day);
};
