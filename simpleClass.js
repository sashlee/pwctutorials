class Student {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  getBirthYear() {
    return this.dob.getFullYear();
  }
}
const Oluwakemi = new Student("Oluwakemi", "Onajinri", "4-3-1998");
console.log(Oluwakemi);
