///////////////////////////1///////////////////////////////////////
const searchCandidatesByPhoneNumber = phone => {
    phone = phone.replace(/[^0-9]/g, '');
    let condidatesPhoneNumber = condidateArr.filter(item => item.phone.replace(/[^0-9]/g, '').includes(phone));
    return condidatesPhoneNumber
}
console.log(searchCandidatesByPhoneNumber("43") );
console.log(searchCandidatesByPhoneNumber("933"));
console.log(searchCandidatesByPhoneNumber('+1(869) 40') );
console.log(searchCandidatesByPhoneNumber('+1(869)408-39-82')) ;
/////////////////////////////////////2/////////////////////////////////////
const getCandidateById = id => {
    let condidatesWhithIdDate = condidateArr.filter(item => item._id == id).map(((item) => item.registered));
    let condidateDateRight = new Date(condidatesWhithIdDate).toLocaleDateString('de-DE', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
    }).replace(/\./g, '/')
    console.log(condidateDateRight);
    console.log(condidatesWhithIdDate);
    let condidateWithRightDate = condidateArr.filter(item => item._id == id ? item.registered = condidateDateRight : "");


    return condidateWithRightDate
}

console.log(getCandidateById('5e216bc9f51c08c39c3ed006'))
console.log(getCandidateById('5e216bc9e51667c70ee19f4f'))

//////////////////////////////////3////////////////////////////////////////////

const sortCandidatesArr = sortBy => {
    let arr_copy = condidateArr.slice()
    if (sortBy == 'asc') {
        arraySort = arr_copy.sort(function (a, b) {
            return a.balance.replace(/[^0-9]/g, '') - b.balance.replace(/[^0-9]/g, '')
                ;
        })
    }
    if (sortBy == 'desc') {
        arraySort = arr_copy.sort(function (a, b) {
            return b.balance.replace(/[^0-9]/g, '') - a.balance.replace(/[^0-9]/g, '')
        })
    }
    if (sortBy == undefined) {
        arraySort = condidateArr;
    }
    return arraySort
}


///////////////////////////////////////4////////////////////////////////

const getEyeColorMap = () => {
    let condidatEyeColor = condidateArr.reduce(
        function (prev, item, index) {
            prev[item.eyeColor] = prev[item.eyeColor] || [];

            prev[item.eyeColor].push(item);
            return prev



        }, {}
    )
    return condidatEyeColor
}

let newArr = getEyeColorMap();
console.log(newArr);

