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