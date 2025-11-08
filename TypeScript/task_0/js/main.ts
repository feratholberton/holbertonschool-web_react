interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'Fer',
  lastName: 'Falcon',
  age: 45,
  location: 'Montevideo',
};

const student2: Student = {
  firstName: 'Dan',
  lastName: 'Raura',
  age: 35,
  location: 'Young',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const tableBody: HTMLTableSectionElement = document.createElement('tbody');

studentsList.forEach((student: Student): void => {
  const row: HTMLTableRowElement = document.createElement('tr');
  const firstNameCell: HTMLTableCellElement = document.createElement('td');
  const locationCell: HTMLTableCellElement = document.createElement('td');

  firstNameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

table.appendChild(tableBody);
document.body.appendChild(table);
