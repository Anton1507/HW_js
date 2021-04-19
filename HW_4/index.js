AllStudentList = []

class Student {
    static nextId = 1;
    static listOfStudents = [];
    static ratingStud() {
        let listOfStudntsWithRequiredRating = Student.listOfStudents.filter(student => {
            if (student.ratingPoint > 800) {
                return true
            } return false
        })


        let raitingSort = listOfStudntsWithRequiredRating.sort((a, b) => {

            if (a.ratingPoint == b.ratingPoint) {
                return b.schoolPoint - a.schoolPoint
            } return b.ratingPoint - a.ratingPoint;
        })
        let budget = raitingSort.slice(0, 5);
        return budget;
    };


    constructor(enrollee) {
        this.name = enrollee.name;
        this.surname = enrollee.surname;
        this.ratingPoint = enrollee.ratingPoint;
        this.schoolPoint = enrollee.schoolPoint;


        this.Id = Student.nextId
        Student.nextId++

        Student.listOfStudents.push(this);


    }


    get isSelfPayment() {


        var budgetStudArray = Student.ratingStud();
        for (let student of budgetStudArray) {
            if (student.Id == this.Id) { return true }
        }
        return false;
    }



}






    var newStuden = new Student(enrolle);




////////////////2//////////////////////////
class CustomString {


    constructor(string) {
        this.string = string;
    }
    reverse(string) {
        let result = string.split('');
        let revArr = result.reverse();
        let revString = revArr.join('');
        return revString

    }

    ucFirst(string) {
        let resUp = string.split('');
        let UpLeter = resUp[0].toUpperCase();
        resUp[0] = UpLeter;
        let stringWithUp = resUp.join('');
        return stringWithUp

    }
    ucWords(string) {
        let arrWhithWords = string.split(' ');
        let newArr = arrWhithWords.map(this.ucFirst);
        let upWords = newArr.join(' ');
        return upWords
    }

}

const myString = new CustomString('qwerty');



///////////////////////3//////////////////////

class Validator {
    checkIsEmail(str) {
        let email = /\@/.test(str);
        return email
    }
    checkIsDomain(str) {
        let dom = /(\.(com|ru|ua))$/.test(str);
        return dom
    }
    checkIsDate(str) {
        let dateNum = /^([0-2][1-9]|3[0-1])\.(0[1-9]|1[1-2])\.([0-9]{1,4})$/.test(str)
        return dateNum;
    }
    checkIsPhone(str){
        let namber = /^\+38/.test(str);
        return namber;
    }
}
var validator = new Validator();