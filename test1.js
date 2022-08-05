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

export const studentsInstance = new Grades();

console.log(studentsInstance.getApproved([1, 2, 3, 4, 5, 6]));
