'use strict';

module.exports = (t) => {
    if(!t || t === undefined ){
      throw(new Error('Argument must be a date/datetime.'));
    }
    const timeStamp = new Date(t);
    const now = Date.now();
    const linuxTimestamp = Date.parse(timeStamp);
    const linuxNow = now;
    const msSecDiff = linuxNow - linuxTimestamp;
    const secDiff = msSecDiff / 1000;
    const minDiff = Math.round(secDiff / 60);
    const hourDiff = Math.round(minDiff / 60);
    const dayDiff = Math.round(hourDiff / 24);
    const weekDiff = Math.round(dayDiff / 7);
    const monthDiff = Math.round(weekDiff / 4);
    const yearDiff = Math.round(monthDiff / 12);
      
    // Casual time
    const casualTime = {
      seconds: 'Just now.',
      minutes: 'Minutes ago.',
      realMinutes: minDiff + ' minutes ago.',
      hours: 'About ' + hourDiff + (hourDiff > 1 ? ' hours' : ' hour') + ' ago.',
      days: 'About ' + dayDiff + (dayDiff > 1 ? ' days' : 'day') + ' ago.',
      weeks: weekDiff + (weekDiff > 1 ? ' weeks' : 'week') + ' ago.',
      months: monthDiff + (monthDiff > 1 ? ' months' : 'month') + ' ago.',
      years: yearDiff + (yearDiff > 1 ? ' years' : 'year') + ' ago.'
    };

    const checkDiffType = (diff) => {
      if(secDiff < 60){
        return casualTime.seconds;
      }
      else if(minDiff <= 15 ){
        return casualTime.minutes;
      }
      else if(minDiff > 15 && minDiff < 60 ){
        return casualTime.realMinutes;
      }
      else if(hourDiff < 24){

        return casualTime.hours;
      }
      else if(dayDiff < 7){
        return casualTime.days;
      }
      else if(weekDiff < 4){
        return casualTime.weeks;
      }
      else if(monthDiff < 12){
        return casualTime.months;
      }
      else if(monthDiff > 12){
        return casualTime.years;
      }
    };
  return checkDiffType();
};
