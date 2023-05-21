// Import stylesheets
//import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;
(function () {
  class Person {
    constructor(firstName, lastName, age) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = 0;
    }

    static AgeOfRetirement = 65;

    get fullName() {
      return this.firstName + ' ' + this.lastName;
    }

    set fullName(fullName) {
      let nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isBlack() {
      if (this.fullName == 'Barak Obama') {
        return true;
      }
      return false;
    }

    isRetired() {
      return this.age > Person.AgeOfRetirement;
    }
  }

  class Student extends Person {
    constructor(firstName, lastName, age) {
      super(firstName, lastName, age);
      this.courses = [];
    }

    static fromPerson(person){
      return new Student(person.firstName, person.lastName, person.age);
    }

    enroll(courseId) {
      this.courses.push(courseId);
    }

    getCourses(){
      return this.courses.join(',');
    }
  }

  let president = new Person('Joe', 'Biden');
  president.age = 75;
  console.log(president.fullName + president.age + president.isRetired());
  president.fullName = 'Barak Obama';
  president.age = 50;
  console.log(president.fullName + president.isRetired());

  let student = new Student('Ilon', 'Mask', 50);
  student.enroll('CS101');
  student.enroll('E101');

  console.log(student.fullName + ' is enrolled in ' + student.getCourses());

  var student2 = Student.fromPerson(president);
  console.log(student2.fullName);
})();
