///////////////////////1////////////////
let result = []
const citiesAndCountries = {
    'Киев': 'Украина',
    'Нью-Йорк': 'США',
    'Амстердам': 'Нидерланды',
    'Берлин': 'Германия',
    'Париж': 'Франция',
    'Лиссабон': 'Португалия',
    'Вена': 'Австрия',
};
for (key in citiesAndCountries) {


    const item = key + "-это " + citiesAndCountries[key];
    result.push(item);
}
console.log(result);


//////////////2/////////////
function getArray() {
    const massA = [];

    const array_size = 4;
    const amount = 12;

    for (let i = 0; i < amount; i++) {
        var BMassIndex = parseInt(i / array_size);
        massA[BMassIndex] = massA[BMassIndex] || []
        massA[BMassIndex].push(i + 1);
    }


    return massA;

}
console.log(getArray())

/////////////////////3///////////////////////
const namesOfDays = {
    ru: ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресе́нье'],
    en: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
}

function getNameOfDay() {
    const lang = 'ru';
    const day = 7;
    const myDay = day - 1;
    let inDay;
    for (property in namesOfDays) {

        if (property == lang) {
            inDay = namesOfDays[lang][myDay];

        }
    }
    return inDay;

}

console.log(getNameOfDay())
/////////////////4//////////////
const array = [4, 12, 43, 43, 21, 2,34,323,32,5,2,7, 21, ]
function getSum() {
    let sum;  
    for (i = 0; i < array.length; i++) {
        for (j = 0; j < array.length; j++) {
            if (array[i] < array[j]) {
                let bols = array[i];
                array[i] = array[j];
                array[j] = bols;
            }
        }
        
    }
    console.log(array)
  return  sum =array[0]+array[1];


}
console.log(getSum())
//////////////4 моё решение /////////////
let arr = [4, 12, 43, 43, 21, 2,34,323,32,5,2,7, 21];

function SumMinNum(arr) {
    let newArr = [];
     arrOne=Infinity;
     arrTwo=Infinity;

    for(let i = 0; i < arr.length; i++) {
         
        newArr.push(arr[i]) 
    }
    for (let i = 0; i < newArr.length; i++) {
        if(newArr[i] < arrOne) {
            arrTwo = arrOne;
            arrOne = newArr[i];
            
        } else if (newArr[i] < arrTwo) {
            arrTwo = newArr[i];
        }
    }
    return console.log(arrOne + arrTwo);
}
SumMinNum(arr);