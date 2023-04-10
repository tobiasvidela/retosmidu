function countHours(year, holidays) {
    //Comprobar la cantidad de días festivos a tener en cuenta
    let validHolidays = 0;
    for (let i = 0; i < holidays.length; i++) {
      // crear variables para los datos y transformarlos a un formato utilizable para Date()
      let dia, mes, fecha;
      mes = holidays[i].slice(0,2)-1;
      dia = holidays[i].slice(3);
      // crear fecha con las variables bien definidas
      fecha = new Date(year, mes, dia);
      // comprobar que sea un día hábil y agregarlo al contador validHolidays
      if (0 < fecha.getDay() && fecha.getDay() < 6) validHolidays++
    };
    //Calcular horas extra
    let horasExtra = validHolidays * 2
    return horasExtra
  }
console.log(countHours(2023, ['01/06', '04/01', '12/25']))
console.log(countHours(2022, ['01/06', '04/01', '12/25']))
console.log(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']))
console.log(countHours(2000, ['01/01']))

function countHoursGPT(year, holidays) {
  let validHolidays = holidays.filter(holiday => {
    let [month, day] = holiday.split('/');
    let date = new Date(year, month - 1, day);
    return date.getDay() > 0 && date.getDay() < 6;
    });
  return validHolidays.length * 2;
}
