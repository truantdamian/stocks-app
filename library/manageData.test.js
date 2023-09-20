import { getPaginatedData } from "./manageData";

const data = [
  { val: 1 },
  { val: 2 },
  { val: 3 },
  { val: 4 },
  { val: 5 },
  { val: 6 },
  { val: 7 },
  { val: 8 },
  { val: 9 },
  { val: 10 },
  { val: 11 },
  { val: 12 },
  { val: 13 },
  { val: 14 },
  { val: 15 },
  { val: 16 },
  { val: 17 },
  { val: 18 },
  { val: 19 },
];

describe("manage data", () => {
  test("expect data when data length less than itemPerPage", () => {
    const lessData = [{ a: 1 }, { a: 2 }, { a: 3 }];

    const { paginatedData } = getPaginatedData(lessData, 1, 10);

    expect(paginatedData.length).toBe(lessData.length);
  });

  test("expect if itemPerPage is 10 paginated data length to be 10", () => {
    const { paginatedData } = getPaginatedData(data, 1, 10);

    expect(paginatedData.length).toBe(10);
  });

  test("expect if currentPage=1 and itemPerPage=10 last element val=9", () => {
    const { paginatedData } = getPaginatedData(data, 1, 10);

    expect(paginatedData[paginatedData.length - 1].val).toBe(10);
  });

  test("expect if currentPage=2 and itemPerPage=10 last element val=19", () => {
    const { paginatedData } = getPaginatedData(data, 2, 10);

    expect(paginatedData[paginatedData.length - 1].val).toBe(19);
  });

  test("expect if currentPage=3 and itemPerPage=10 paginatedData length be 0", () => {
    const { paginatedData } = getPaginatedData(data, 3, 10);

    console.log(paginatedData);

    expect(paginatedData.length).toBe(0);
  });
});
