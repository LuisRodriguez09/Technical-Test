import { NumbersExerciseInstance } from "../test2";

test("Testing triangular numbers", () => {
  expect(NumbersExerciseInstance.triangularNumbers(100)).toBe(5050);
  expect(NumbersExerciseInstance.triangularNumbers(10)).toBe(55);
  expect(NumbersExerciseInstance.triangularNumbers(5)).toBe(15);
  expect(NumbersExerciseInstance.triangularNumbers(7)).toBe(28);
  expect(NumbersExerciseInstance.triangularNumbers(32)).toBe(528);
  expect(NumbersExerciseInstance.triangularNumbers(11)).toBe(66);
  expect(NumbersExerciseInstance.triangularNumbers(135)).toBe(9180);
  expect(NumbersExerciseInstance.triangularNumbers(48)).toBe(1176);
  expect(NumbersExerciseInstance.triangularNumbers(95)).toBe(4560);
  expect(NumbersExerciseInstance.triangularNumbers(46)).toBe(1081);
});

test("Testing fibonacci numbers", () => {
  expect(NumbersExerciseInstance.fibonacci(2)).toBe(1);
  expect(NumbersExerciseInstance.fibonacci(3)).toBe(2);
  expect(NumbersExerciseInstance.fibonacci(4)).toBe(3);
  expect(NumbersExerciseInstance.fibonacci(5)).toBe(5);
  expect(NumbersExerciseInstance.fibonacci(6)).toBe(8);
  expect(NumbersExerciseInstance.fibonacci(7)).toBe(13);
  expect(NumbersExerciseInstance.fibonacci(8)).toBe(21);
  expect(NumbersExerciseInstance.fibonacci(9)).toBe(34);
  expect(NumbersExerciseInstance.fibonacci(10)).toBe(55);
});

test("Testing prime numbers", () => {
    expect(NumbersExerciseInstance.primeNumbers(10)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(25)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(28)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(4)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(3)).toBe(true);
    expect(NumbersExerciseInstance.primeNumbers(31)).toBe(true);
    expect(NumbersExerciseInstance.primeNumbers(49)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(43)).toBe(true);
    expect(NumbersExerciseInstance.primeNumbers(20)).toBe(false);
    expect(NumbersExerciseInstance.primeNumbers(11)).toBe(true);
  });
  