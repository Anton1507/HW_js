

let Emploee = function (employee) {

    this.id = employee.id;
    this.name = employee.name;
    this.surname = employee.surname;
    this.salary = employee.salary;
    this.workExperience = employee.workExperience;
    this.isPrivileges = employee.isPrivileges;
    this.gender = employee.gender;


    this.getFullName = () => {
        `${this.surname} ${this.name}`;
    }

    }

    Emploee.createEmployesFromArr = (arr) => {
        let emplyeeConstructArr = [];
        for (let i = 0; i < arr.length; i++) {
            emplyeeConstructArr.push(new Emploee(arr[i]));
        }
        return emplyeeConstructArr;
    };

    Emploee.getFullNamesFromArr = (arr) => {
        const newFullNameArr = []
        for (let emploee of arr) {
            newFullNameArr.push(emploee.getFullName())
        }
        return newFullNameArr;
    }

    Emploee.getMiddleSalary = (arr) => {
        let sumSalary = 0;
        for (let emplyee of arr) {
            sumSalary += emplyee.salary
        }
        let midleSalary = sumSalary / arr.length

        return midleSalary;
    }

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
    }

    Emploee.getRandomEmployee = (arr) => {
        let randomNumbe = getRandomInt(0, arr.length);
        return arr[randomNumbe]



    }

    let arrayOfEmploeeObjects = Emploee.createEmployesFromArr(emplyeeArr);
    let arrayOfFullNames = Emploee.getFullNamesFromArr(arrayOfEmploeeObjects);
    let sumSalaryResult = Emploee.getMiddleSalary(arrayOfEmploeeObjects);
    console.log(Emploee.getRandomEmployee(emplyeeArr));
    console.log(Emploee.getRandomEmployee(emplyeeArr));
    console.log(Emploee.getRandomEmployee(emplyeeArr));