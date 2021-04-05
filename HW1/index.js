///////////////1///////////////////////
for (let i=1;i<=10;i++){
    if ((i%3)==0){console.log('FizBuz')}
    else if ((i%2)==0){console.log('Fiz')}
    else if ((i%2)==!0){console.log('Buz')}
}
////               
for(let i=10;i<=1;i*(i-1))
{console.log(let)}
//////////////2/////////////////////

let z = 1;
let i = 10;
while(i > 1){
    z =z * i;
    i--;
}
console.log(z);
/////3/////////////////////////
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let addPapers;
let papersAll = (consumptionPerWeek*weeksAmount);
let forFullPack =papersAll%sheetsInReamPaper;
if(forFullPack<sheetsInReamPaper){ addPapers=sheetsInReamPaper-forFullPack};
let pachekInAllWeek = (papersAll+addPapers)/sheetsInReamPaper;

console.log(pachekInAllWeek);
//////////4//////////////////
const roomsOnFloor = 3;
const floors = 9;
const roomNumber =958 ;// или любое другое число, но минимум трехзначное
const roomInPorch=roomsOnFloor*floors;
let porch ;
let floor ;
ofZeroPorch=roomNumber%roomInPorch;
porch=((roomNumber-ofZeroPorch)/roomInPorch)+1;
ostOfFloor=(ofZeroPorch%roomsOnFloor);
if(ostOfFloor<3){floor=((ofZeroPorch-ostOfFloor)/ roomsOnFloor)+1};
if(ostOfFloor%3==0){floor=(ofZeroPorch/roomsOnFloor)};
console.log('porch='+porch);
console.log('floor='+floor);
////////5////////////////////
const height = 6;
const widht = (height * 2) - 1;
let sharp = '#';
let dash = '-';
let DashCount = height - 1;
let sharpCount = 1;
for (let i = 0; i < height; i++) {
    
    let rez = ''

    for (let addLeftDashCount = 0; addLeftDashCount < DashCount; addLeftDashCount++) {
        rez += dash;
    }

    for (let addCenterSahrpCount = 0; addCenterSahrpCount < sharpCount; addCenterSahrpCount++) {
        rez += sharp
    }

    for (let addRightDashCount = 0; addRightDashCount < DashCount; addRightDashCount++) {
        rez += dash
    }
    
    DashCount = DashCount - 1;
    sharpCount = sharpCount + 2;

    console.log(rez);
}


