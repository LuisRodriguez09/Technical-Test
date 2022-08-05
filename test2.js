// Este arreglo contiene calificaciones de diferentes alumnos
const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

export class NumbersExercise {
  constructor(grades) {
    this.grades = grades;
  }
  triangularNumbers(n) {
    let a = 0;
    for (let i = 1; i <= n; i++) {
      a += i;
    }
    return a;
  }
  fibonacci(num) {
    const fib = [0, 1];
    for (let i = 2; i <= num; i++) {
      fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib[num];
  }
  primeNumbers(num) {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
      if (num % i === 0) return false;
    return num > 1;
  }
}

export const NumbersExerciseInstance = new NumbersExercise(list);