const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let addPapers;
let papersAll = (consumptionPerWeek*weeksAmount);
let forFullPack =papersAll%sheetsInReamPaper;
if(forFullPack<sheetsInReamPaper){ addPapers=sheetsInReamPaper-forFullPack};
let pachekInAllWeek = (papersAll+addPapers)/sheetsInReamPaper;

console.log(pachekInAllWeek);
