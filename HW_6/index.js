///////////////////////1/////////////////////////
const arr = ['Vasya', 'Petya', 'Alexey', 'Andrey', 'Sasha'];
removeUser = (arr, index) => {
    return arr.splice(index, 1)


}


removeUser(arr, 1)
console.log(arr)
///////////////////////////////2////////////////////
getAllKeys = (obj) => {
    return Object.keys(obj)
}
const object = { name: 'Vasya', surname: 'Pyatochkin', age: 12 }
//////////////////////////////////3/////////////////////////

const obj = { name: 'Vasya', age: 1 }
getAllValues = (obj) => {
    return Object.values(obj)

}
//////////////////////////4/////////////////////
const firstObj = {
    name: 'Vasya',
    surmane: 'Petychkin',
    id: 8,

}

const secondObj = {
    name: 'Ivan',
    surmane: 'Petychkin',
    id: 12,
}

insertIntoarr = (obj, id) => {

    const index = condidateArr.findIndex(item => item._id == id);
    let addObject = condidateArr.splice(index, 0, obj)

    return condidateArr;
}

//////////////////////////////5//////////////////////////

class Condidate {
    constructor(condidat) {
        for (let key in condidat) {
            this.name = condidat.name
            this.address = condidat.address
        }
    }

    get state() {
        let condidateState = this.address.split(", ");
        let states = condidateState[2];
        return states;
    }
}

const condidat = new Condidate(condidateArr[8]);
console.log(condidat.state);
//////////////////////////////6////////////////////////////
getCompanyNames = () => {


    let condidatCompany = condidateArr.map((item) => item.company);
    let companyWhithOutDublicate = condidatCompany.filter((item, index) => { return condidatCompany.indexOf(item) === index });
    return companyWhithOutDublicate;
}
console.log('CompanyNames', getCompanyNames())
////////////////////////////////7///////////////////////////
getUsersByYear = (year) => {

    let condidatThisYear = condidateArr.filter(item => item.registered.split('-')[0] == year);
    let condidatIdThisYear = condidatThisYear.map((item) => item._id);
    return condidatIdThisYear;
}
console.log('ByYear', getUsersByYear(2017))
//////////////////////////////8///////////////////////////
getCondidatesByUnreadMsg = (messages) => {

    let condidatUnreadMessages = condidateArr.filter(item => item.greeting.split(' ')[5] == messages);

    return condidatUnreadMessages
}
console.log('UnreadMessages', getCondidatesByUnreadMsg(8))
//////////////////////////9///////////////////////////////
getCondidatesByGender = (gender) => {

    let condidatThisGender = condidateArr.filter(item => item.gender == gender);

    return condidatThisGender
}
console.log('Gender', getCondidatesByGender('male'))
//////////////////////10(join)/////////////////////////////
const arrNames=['Vasya','Kolya','Misha','Grisha','Antosha']

Array.prototype.cJoin=function(sign){
    let signLoc= sign;
    if (sign==undefined){signLoc=','}
    let newString='';
   
    for(let i=0;i<this.length;i++){
        newString += String(this[i]+ (i==this.length-1 ? ' ': signLoc))
    }
    
    return newString;
}

let a = arrNames.cJoin();
console.log(a);
/////////////////////////////////////////////////////////////////