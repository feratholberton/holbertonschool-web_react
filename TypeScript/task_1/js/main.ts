interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [key: string]: unknown;
}

interface Directors extends Teacher {
  numberOfReports: number;
}

interface PrintTeacherFunction {
  (firstName: string, lastName: string): string;
}

interface StudentClassInterface {
  readonly firstName: string;
  readonly lastName: string;
  workOnHomework(): string;
  displayName(): string;
}

interface StudentClassConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

const StudentClass: StudentClassConstructor = class StudentClassImpl implements StudentClassInterface {
  constructor(public readonly firstName: string, public readonly lastName: string) {}

  workOnHomework(): string {
    return 'Currently working';
  }

  displayName(): string {
    return this.firstName;
  }
};

const printTeacher: PrintTeacherFunction = (firstName, lastName) => {
  const firstInitial: string = firstName.length ? firstName[0] : '';
  return `${firstInitial}. ${lastName}`;
};

const teacher3: Teacher = {
  firstName: 'John',
  lastName: 'Doe',
  fullTimeEmployee: false,
  location: 'London',
  contract: false,
};

console.log(teacher3);

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};

console.log(director1);

console.log(printTeacher('John', 'Doe'));

const student: StudentClassInterface = new StudentClass('Rita', 'Perez');
console.log(student.displayName());
console.log(student.workOnHomework());
