'use strict';

module.exports = (t, config = null) => {
    if(!t || t === undefined ){
      throw(new Error('Argument must be a date/datetime.'));
    }
    const timeStamp = new Date(t);
    const now = Date.now();
    const linuxTimestamp = Date.parse(timeStamp);
    const linuxNow = now;
    const msSecDiff = linuxNow - linuxTimestamp;
    let secDiff = msSecDiff / 1000;
    const minDiff = Math.round(secDiff / 60);
    const hourDiff = Math.round(minDiff / 60);
    const dayDiff = Math.round(hourDiff / 24);
    const weekDiff = Math.round(dayDiff / 7);
    const monthDiff = Math.round(weekDiff / 4);
    const yearDiff = Math.round(monthDiff / 12);
      
    // Casual time
    let casualTime = {
      seconds: 'just now.',
      minutes: 'minutes ago.',
      realMinutes: minDiff + ' minutes ago.',
      hours: 'about ' + hourDiff + (hourDiff > 1 ? ' hours' : ' hour') + ' ago.',
      days: 'about ' + dayDiff + (dayDiff > 1 ? ' days' : ' day') + ' ago.',
      weeks: weekDiff + (weekDiff > 1 ? ' weeks' : ' week') + ' ago.',
      months: monthDiff + (monthDiff > 1 ? ' months' : ' month') + ' ago.',
      years: yearDiff + (yearDiff > 1 ? ' years' : ' year') + ' ago.'
    };

    let casualTimeVerbose = {
      seconds: secDiff + (secDiff > 1 ? ' seconds' : ' second') + ' ago.',
      minutes: minDiff + (minDiff > 1 ? ' minutes' : ' minute') + ' ago.',
      hours: 'about ' + hourDiff + (hourDiff > 1 ? ' hours' : ' hour ') + ' and ' + minDiff + (minDiff > 1 ? ' minutes' : ' minute') + ' ago.',
      days: 'about ' + dayDiff + (dayDiff > 1 ? ' days' : ' day ') + ' and ' + hourDiff + (hourDiff > 1 ? ' hours' : ' hour') + ' ago.',
      weeks: weekDiff + (weekDiff > 1 ? ' weeks' : ' week ') + ' and ' + dayDiff + (dayDiff > 1 ? ' days' : ' day') + ' ago.',
      months: monthDiff + (monthDiff > 1 ? ' months' : ' month ') + ' and ' + dayDiff + (dayDiff > 1 ? ' days' : ' day') + ' ago.',
      years: yearDiff + (yearDiff > 1 ? ' years' : ' year ') + monthDiff + (monthDiff > 1 ? ' months' : ' month') + ' and ' + dayDiff + (dayDiff > 1 ? ' days' : ' day') +  ' ago.'
    };

    const verboseDiff = (diff) => {
      const years = Math.round(secDiff / 31536000);
      if(years >= 1){
        secDiff = secDiff - 31536000;
      }

      console.log(secDiff)
      const months = Math.round(secDiff / 2592000);
      if(months >= 1 && months <= 12){
        secDiff = secDiff - 2592000;
      }
      console.log(secDiff)
      const weeks = Math.round(secDiff / 604800);
      if(weeks >= 1 && weeks < 4){
        secDiff = secDiff - 604800;
      }
      console.log(secDiff)
      const days = Math.round(secDiff / 86400);
      if(days >= 1 && days <= 30){
        secDiff = secDiff - 86400;
      }
      console.log(secDiff)
      const hours = Math.round(secDiff / 3600);
      if(hours >= 1 && hours < 24){
        secDiff = secDiff - 3600;
      }
      console.log(secDiff)
      const mins = Math.round(secDiff / 60);
      
      
      
      
      console.log(years)
      console.log(months)
      console.log(weeks)
      console.log(days)
      console.log(hours)
      console.log('this is mins ', mins)


      if(secDiff < 60){
        return casualTimeVerbose.seconds;
      }
      else if(minDiff < 60 ){
        return casualTimeVerbose.minutes;
      }
      else if(hourDiff < 24){
        return casualTimeVerbose.hours;
      }
      else if(dayDiff < 7){
        return casualTimeVerbose.days;
      }
      else if(weekDiff < 4){
        return casualTimeVerbose.weeks;
      }
      else if(monthDiff < 12){
        return casualTimeVerbose.months;
      }
      else if(monthDiff > 12){
        return casualTimeVerbose.years;
      }
    }
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
    if(config){
      const {uppercase, exact, verbose} = config;
      // Uppercase textual returns - no worries about numerals
      if(uppercase){
        for(const prop in casualTime){
          casualTime[prop] = casualTime[prop].charAt(0).toUpperCase() + casualTime[prop].slice(1);
        };
      }
      if(verbose){
        console.log('returning verbose')
        return verboseDiff();
      }
    }
    else{
      return checkDiffType();
    }
};
