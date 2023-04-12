
function formatDate(date) {
    const diff = new Date() - date; //ищем разницу в милисекундах
    if (diff < 1000) {
        return 'прямо сейчас'
    }
   const secDiff  = Math.round(diff / 1000);
    if (secDiff < 60) {
        return `${secDiff} сек. назад`
    }

    const minDiff  = Math.round(secDiff / 60);
    if (minDiff < 60) {
        return `${minDiff} мин. назад`
    } 

    return fullDate();
}


// функция сборки полной даты
const fullDate = () => {
    const date1 = addZeroToDate();
    const month = addZeroToMonth();
    const year = new Date().getFullYear().toString().slice(-2);
    const hours = addZeroToHours();
    const min =  addZeroToMin();
    const fullDate =`${date1}.${month}.${year} ${hours}:${min} `;
    return fullDate;   
}


  //функция добавления 0 к месяцу
  const addZeroToMonth = () => {
    const month= new Date().getMonth()+1;
    if (month < 10){
      return `0${month}`
    } else {
     return `${month}`
    }
    }

  //функция добавления 0 к дате
  const addZeroToDate = () => {
    const date1= new Date().getDate();
    if (date1 < 10){
      return `0${date1}`
    } else {
     return `${date1}`
    }
    }

   //функция добавления 0 к часам
   const addZeroToHours = () => {
    const hours = new Date().getHours();
    if (hours < 10){
      return `0${hours}`
    } else {
     return `${hours}`
    }
    }
  
    //функция добавления 0 к минутам
   const addZeroToMin = () => {
      const min = new Date().getMinutes();
      if (min < 10){
        return `0${min}`
      } else {
       return `${min}`
      }
      }

console.log(formatDate(new Date(new Date - 1)) );
console.log(formatDate(new Date(new Date - 30 * 1000)) );
console.log(formatDate(new Date(new Date - 5 * 60 * 1000)) );
console.log(formatDate(new Date(new Date - 86400 * 1000)) );

