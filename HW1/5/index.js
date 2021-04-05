const height = 80;
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


