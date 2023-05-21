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

    get fullName() {
      return this.firstName+' '+this.lastName;
    }

    set fullName(fullName){
      let nameParts = fullName.split(' ');
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    }

    isBlack(){
      if (this.fullName == "Barak Obama"){
        return true;
      }
      return false;
    }
  }

  let president = new Person('Joe', 'Biden');
  president.age = 35;
  console.log(president.fullName + president.age+president.isBlack());
  president.fullName = "Barak Obama";
  console.log(president.fullName+president.isBlack());

})();
