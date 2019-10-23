'use strike'

const years = [];

function daysInYear(year) {

  if (!years.includes(year) && parseInt(year) === year) {

    years.push(year);
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {

      return 366;
    } else {

      return 365;
    }
  }
  
  return "exception";
}

daysInYear(2019); // 365
daysInYear('2019'); // exception
daysInYear(2020); // 366
daysInYear(2020.2); // exception
daysInYear(2100); // 365
daysInYear({year: 2100}); // exception