import { studentsInstance } from "../test1";

// NOTE: To the cases approved and not approved, i contemplated that the smaller number
// to qualify


test("Testing approved students", () => {
  expect(studentsInstance.getApproved([7, 4, 6, 7, 4, 8, 9, 10])).toEqual(
    expect.arrayContaining([7, 7, 8, 9, 10])
  );
  expect(studentsInstance.getApproved([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])).toEqual(
    expect.arrayContaining([7, 8, 9, 10])
  );
  expect(studentsInstance.getApproved([9, 9, 9, 9, 2, 4, 10])).toEqual(
    expect.arrayContaining([9, 9, 9, 9, 10])
  );
  expect(studentsInstance.getApproved([8, 3, 5, 1, 10, 10, 9, 5])).toEqual(
    expect.arrayContaining([8, 10, 10, 9])
  );
  expect(studentsInstance.getApproved([8, 3, 3, 3, 2, 1, 9])).toEqual(
    expect.arrayContaining([8, 9])
  );
  expect(studentsInstance.getApproved([10, 10, 10, 10, 10, 10])).toEqual(
    expect.arrayContaining([10, 10, 10, 10, 10, 10])
  );
  expect(studentsInstance.getApproved([8, 8, 9, 2, 10, 5, 10])).toEqual(
    expect.arrayContaining([8, 8, 9, 10, 10])
  );
  expect(studentsInstance.getApproved([2, 8, 5, 3, 10, 5, 10])).toEqual(
    expect.arrayContaining([8, 10, 10])
  );
  expect(studentsInstance.getApproved([5, 5, 5, 10, 10, 10])).toEqual(
    expect.arrayContaining([10, 10, 10])
  );
  expect(studentsInstance.getApproved([5, 3, 2, 1, 4, 2, 5])).toEqual(
    expect.arrayContaining([])
  );
});

test("Testing not approved students", () => {
  expect(studentsInstance.getNotApproved([7, 4, 6, 7, 4, 8, 9, 10])).toEqual(
    expect.arrayContaining([4, 4])
  );
  expect(
    studentsInstance.getNotApproved([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  ).toEqual(expect.arrayContaining([1, 2, 3, 4, 5]));
  expect(studentsInstance.getNotApproved([10, 5, 2, 8, 6, 9, 9, 4])).toEqual(
    expect.arrayContaining([5, 2, 4])
  );
  expect(studentsInstance.getNotApproved([7, 7, 5, 6, 9, 10, 3])).toEqual(
    expect.arrayContaining([5, 3])
  );
  expect(studentsInstance.getNotApproved([5, 5, 2, 10, 9, 3, 5, 2])).toEqual(
    expect.arrayContaining([5, 5, 2, 3, 5, 2])
  );
  expect(studentsInstance.getNotApproved([9, 9, 9, 9, 2, 4, 10])).toEqual(
    expect.arrayContaining([2, 4])
  );
  expect(studentsInstance.getNotApproved([8, 3, 5, 1, 10, 10, 9, 5])).toEqual(
    expect.arrayContaining([3, 5, 1, 5])
  );
});

test("Testing average students", () => {
  expect(studentsInstance.getAverage([7, 4, 6, 7, 4, 8, 9, 10])).toBe(6.875);
  expect(studentsInstance.getAverage([4, 8, 9, 10, 8, 10, 10])).toBe(
    8.428571428571429
  );
  expect(studentsInstance.getAverage([1, 3, 5, 8, 7, 2, 10])).toBe(
    5.142857142857143
  );
  expect(studentsInstance.getAverage([4, 9, 9, 1, 10, 10, 9])).toBe(
    7.428571428571429
  );
  expect(studentsInstance.getAverage([9, 8, 7, 6, 5, 4, 3, 2])).toBe(5.5);
  expect(studentsInstance.getAverage([5, 3, 7, 9, 9, 10, 4])).toBe(
    6.714285714285714
  );
  expect(studentsInstance.getAverage([10, 10, 10, 10, 10, 10])).toBe(10);
  expect(studentsInstance.getAverage([10, 4, 8, 9, 4, 10, 10])).toBe(
    7.857142857142857
  );
  expect(studentsInstance.getAverage([7, 7, 7, 7, 10, 10, 10, 8])).toBe(8.25);
  expect(studentsInstance.getAverage([9, 9, 10, 8, 9, 2, 9])).toBe(8);
});

test("Testing top students", () => {
  expect(studentsInstance.getTop([7, 4, 6, 7, 4, 8, 9, 10])).toBe(10);
  expect(studentsInstance.getTop([1, 4, 2, 7, 4, 9, 9, 9])).toBe(9);
  expect(studentsInstance.getTop([7, 4, 2, 5, 5, 6, 8, 9])).toBe(9);
  expect(studentsInstance.getTop([7, 4, 6, 2, 7, 10, 9, 1])).toBe(10);
  expect(studentsInstance.getTop([7, 4, 6, 7, 4, 8, 9, 10])).toBe(10);
  expect(studentsInstance.getTop([7, 4, 6, 7, 4, 8, 9, 10])).toBe(10);
  expect(studentsInstance.getTop([7, 4, 8])).toBe(8);
  expect(studentsInstance.getTop([5, 4, 9, 6, 6, 8])).toBe(9);
  expect(studentsInstance.getTop([7, 4, 6, 7])).toBe(7);
  expect(studentsInstance.getTop([3, 1, 4, 6, 4, 4, 3, 6])).toBe(6);
});

test("Testing minor students", () => {
  expect(studentsInstance.getMinor([7, 4, 6, 7, 4, 8, 9, 10])).toBe(4);
  expect(studentsInstance.getMinor([1, 4, 2, 7, 4, 9, 9, 9])).toBe(1);
  expect(studentsInstance.getMinor([7, 4, 2, 5, 5, 6, 8, 9])).toBe(2);
  expect(studentsInstance.getMinor([7, 4, 6, 2, 7, 10, 9, 1])).toBe(1);
  expect(studentsInstance.getMinor([7, 4, 6, 7, 4, 8, 9, 10])).toBe(4);
  expect(studentsInstance.getMinor([7, 4, 6, 7, 4, 8, 9, 10])).toBe(4);
  expect(studentsInstance.getMinor([7, 4, 8])).toBe(4);
  expect(studentsInstance.getMinor([5, 4, 9, 6, 6, 8])).toBe(4);
  expect(studentsInstance.getMinor([7, 4, 6, 7])).toBe(4);
  expect(studentsInstance.getMinor([3, 1, 4, 6, 4, 4, 3, 6])).toBe(1);
});
