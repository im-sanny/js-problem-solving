// check the year its leap year or not 

function isLeapYear(year){
    if ((year % 400 === 0) || ((year % 4 === 0) && (year % 100 !== 0))) {
        console.log(`${year} is a leap year!`);
    }else{
        console.log(`${year} is not a leap year!`);
    }
}
isLeapYear(2032)


function isLeapYear(year){
    if ((year % 400 === 0) || (year % 4 === 0) && year % 100 !== 0) {
        console.log(`${year} is a leap year`);
    }else{
        console.log(`${year} is not a leap year!`);
    }
}

isLeapYear(2024)