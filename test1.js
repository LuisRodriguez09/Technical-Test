// Este arreglo contiene calificaciones de diferentes alumnos
const list = [7, 4, 6, 7, 4, 8, 9, 10];

class Grades {
  getApproved(noteList) {
    const studentGrades = noteList;
    let studentsApproveds = [];
    studentGrades.map((val) => {
      if (val > 6) {
        studentsApproveds.push(val);
      }
    });
    return studentsApproveds;
  }
  getNotApproved(noteList) {
    let studentsNotApproveds = [];
    noteList.map((val) => {
      if (val < 6) {
        studentsNotApproveds.push(val);
      }
    });
    return studentsNotApproveds;
  }
  getAverage(noteList) {
    let average = noteList.reduce((a, b) => a + b, 0) / noteList.length;
    return average;
  }
  getTop(noteList) {
    let topStudent = Math.max(...noteList);
    return topStudent;
  }
  getMinor(noteList) {
    let minusStudent = Math.min(...noteList);
    return minusStudent;
  }
}

export const studentsInstance = new Grades(list);

// Desarrolla una clase que contenga un método para emitir cada uno de los siguientes resultados:
// cuántos alumnos aprobaron
// cuántos alumnos reprobaron
// el promedio del grupo
// la calificación más alta del grupo
// la calificación más baja del grupo

// Para cada método realiza pruebas unitarias con al menos 4 casos de prueba, utiliza mi arreglo como una de las entradas en cada uno

// Entregar proyeto en GitHub, GitLab o BitBucket usando npm o deno
