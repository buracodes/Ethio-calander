export function getEthiopianMonth(date) {
    const ethiopianMonths = [
        'መስከረም',
        'ጥቅምት',
        'ህዳር ',
        'ታህሳስ',
        'ጥር',
        'የካቲት',
        'መጋቢት',
        'ሚይዚያ',
        'ግንቦት ',
        'ሰኔ ',
        'ሐምሌ ',
        'ነሃሴ ',
        'ጳጉሜ ',
     
    ];
    const ethiopianMonthIndex = Math.floor((date.getMonth() + 9) % 12);
    return ethiopianMonths[ethiopianMonthIndex];
  }
  
  export function getEthiopianYear(date) {
    const gregorianYear = date.getFullYear();
    const gregorianEpoc = new Date(1970, 0, 1);
    const gregorianDays = Math.floor((date.getTime() - gregorianEpoc.getTime()) / (24 * 60 * 60 * 1000));
   
    const ethiopianEpoc = new Date(3928, 8, 12);
    const ethiopianDays = gregorianDays + Math.floor((gregorianYear - 1970) / 4) + (ethiopianEpoc.getTime() - gregorianEpoc.getTime()) / (24 * 60 * 60 * 1000);
    return Math.floor(ethiopianDays / 365) + 1;
  }
  
  export function isEthiopianLeapYear(ethiopianYear) {
    const leapYearPattern = [2, 5, 8, 11];
    return leapYearPattern.includes(ethiopianYear % 4);
  }
  
  export function getEthiopianDaysInMonth(ethiopianMonth, ethiopianYear) {
    const daysInMonthMap = {
        'መስከረም': 30,
      'ጥቅምት': 30,
      'ህዳር ': 30,
      'ታህሳስ': 30,
      'ጥር': 30,
      'የካቲት': 30,
      'መጋቢት': 30,
      'ሚይዚያ': 30,
      'ግንቦት ': 30,
      'ሰኔ ':30,
      'ሐምሌ ': 30,
      'ነሃሴ ': 30,
      'ጳጉሜ ': isEthiopianLeapYear(ethiopianYear) ? 6 : 5,
    };
    return daysInMonthMap[ethiopianMonth];
  }
 