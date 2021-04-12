function getFormattedDate(incomDate) {
   let formattedDate = {
      minutes: incomDate.getMinutes(),
      hours: incomDate.getHours(),
      day: incomDate.getDate(),
      month: incomDate.getMonth() + 1,
      year: incomDate.getFullYear(),
      weekday: incomDate.toLocaleString("en-US", {weekday: 'long'})
   }
   function date(dayMonth) {
      return String(dayMonth).length === 1 ? '0' + dayMonth : dayMonth;
  }
   function time(hourMin) {
       return String(hourMin).length === 1 ? '0' + hourMin : hourMin;
   }
   return `${date(formattedDate.day)}.${date(formattedDate.month)}.${formattedDate.year} ${time(formattedDate.hours)}:${time(formattedDate.minutes)} ${formattedDate.weekday}`;
}