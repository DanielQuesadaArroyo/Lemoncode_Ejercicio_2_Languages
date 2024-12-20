interface Student {
  name: string;
  califications: number[];
}

class StudentSummary {
  //access only inside the Employee class
  private name: string;
  private highestCalification: number;
  private averageCalifications: number;

  constructor(
    name: string,
    highestCalification: number,
    averageCalifications: number
  ) {
    this.name = name;
    this.highestCalification = highestCalification;
    this.averageCalifications = averageCalifications;
  }
  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
  getHighestCalification() {
    return this.highestCalification;
  }

  setHighestCalification(highestCalification: number) {
    this.highestCalification = highestCalification;
  }

  getAverageCalifications() {
    return this.averageCalifications;
  }

  setAverageCalifications(averageCalifications: number) {
    this.averageCalifications = averageCalifications;
  }
}

const students = [
  {
    name: "Juan",
    califications: [1.56, 2.13, 7.53, 9.71, 2.67, 2.43, 2.86, 9.42, 8.08, 7.34],
  },
  {
    name: "Álvaro",
    califications: [4.49, 1.52, 7.0, 8.3, 8.01, 6.45, 3.72, 3.27, 6.99, 6.01],
  },
  {
    name: "María",
    califications: [2.99, 7.33, 1.14, 3.26, 0.98, 2.94, 4.99, 4.51, 1.8, 9.3],
  },
  {
    name: "Jorge",
    califications: [4.6, 3.63, 9.07, 9.03, 3.05, 6.61, 4.81, 1.39, 2.97, 8.69],
  },
  {
    name: "Mónica",
    califications: [9.72, 6.07, 1.11, 4.72, 0.04, 1.56, 0.66, 3.87, 6.97, 9.48],
  },
];

const summarizeClassRoom = (students: Student[]): StudentSummary[] => {
  let media: number;
  let studentsSummary = new Array();

  for (let student of students) {
    media = 0;
    let studentSummary = new StudentSummary(student.name, 0, 0);

    for (let calification of student.califications) {
      media += calification;

      if (studentSummary.getHighestCalification() < calification) {
        studentSummary.setHighestCalification(calification);
      }
    }

    studentSummary.setAverageCalifications(
      Number((media / student.califications.length).toPrecision(3))
    );

    studentsSummary.push(studentSummary);
  }

  return studentsSummary;
};

console.log(summarizeClassRoom(students));
// [
//   { name: 'Juan', highestCalification: 9.71, averageCalifications: '5.37' },
//   { name: 'Álvaro', highestCalification: 8.3, averageCalifications: '5.58' },
//   { name: 'María', highestCalification: 9.3, averageCalifications: '3.92' },
//   { name: 'Jorge', highestCalification: 9.07, averageCalifications: '5.38' },
//   { name: 'Mónica', highestCalification: 9.72, averageCalifications: '4.42' }
// ]
