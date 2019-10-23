'use strike'

function daysInYear(year) {

  try {
    if (!Number.isInteger(year)) {
      throw new Error('exception');
    }

    if ((year % 100 !== 0 && year % 4 === 0) || year % 400 === 0) {
     return 366 ;
    } else {
      return 365;
    }
  } catch (error) {
    return error;
  }
}
