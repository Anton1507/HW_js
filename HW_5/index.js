//////////////////1/////////////////
const summa = (init) => {
  return (add) => {
    init += add;
    return init;
  }
}
let counter = summa(0)
console.log(counter(3))
console.log(counter(5))
console.log(counter(228))
/////////////////////////2///////////

const initArr = ((init) => {
  let newArray = [];

  let index = 0;
  return (init) => {

    init != undefined ? newArray[index++] = init : newArray.splice(0, newArray.length);

    return newArray;
  }
})()


console.log(initArr(58));
console.log(initArr({ name: 'Вася' }));
console.log(initArr());
///////////////3/////////////////////

const getTime = (() => {
  let currentTime = new Date().getTime();
  return () => {
    let differenceInMs = new Date().getTime() - currentTime;
    let differenceInSeconds = differenceInMs / 1000;
    let countOfIntMinutes = Math.floor(differenceInSeconds / 60);
    let differenceOfSecondsPart = differenceInSeconds - (countOfIntMinutes * 60);
    return Math.floor(differenceOfSecondsPart) == 0 ? 'Enabled' : Math.floor(differenceOfSecondsPart);
  }
})()

///////////////////////////4/////////////////////

const timer = ((time) => {

  const lastTime = new Date().getTime();
  const idTime = setInterval((time) => {

    let nextTime = lastTime + time * 1000;
    let differenceTimeInSecondsDisplay;
    let differenceTimeInSeconds = (nextTime - new Date().getTime()) / 1000;
    let differenceInMinuts = Math.floor(differenceTimeInSeconds / 60);
    if (differenceTimeInSeconds >= 60) {
      differenceTimeInSecondsDisplay = differenceTimeInSeconds - (differenceInMinuts * 60)
    } else differenceTimeInSecondsDisplay = differenceTimeInSeconds;
    if (Math.floor(differenceTimeInSeconds) == 0) { clearInterval(idTime), console.log("Time End") }

    differenceInMinuts = String(differenceInMinuts);
    differenceTimeInSecondsDisplay = String(Math.floor(differenceTimeInSecondsDisplay));
    if (differenceInMinuts <= 9) { differenceInMinuts = differenceInMinuts.padStart(2, '0') }
    if (differenceTimeInSecondsDisplay <= 9) { differenceTimeInSecondsDisplay = differenceTimeInSecondsDisplay.padStart(2, '0') }

    let displayTime = differenceInMinuts + ':' + differenceTimeInSecondsDisplay;


    console.log(displayTime);


  }, 1000, time);

})
/////////////////////////////////////////////////////////



