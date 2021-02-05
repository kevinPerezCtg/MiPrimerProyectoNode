//importando moment
var moment = require('moment'); // require

let now = moment().format();
console.log("now ",now);

let february = moment("2020-02-29").isValid();
console.log("february ",february)

let today = moment().format('dddd');
console.log("today ",today);

let year = moment().format('YYYY');
console.log("year ",year);

let month = moment().format('MMMM');
console.log("month ",month);


//1. Mostrar fecha, mes(nombre del mes) y el año
let ejer1 = moment().format("YYYY-MM-DD");
console.log("La fecha de hoy es:",ejer1);

//2. Mostrar el dia que naci
let ejer2 = moment([1995,03,29]).format("dddd");
console.log("El día que naci fue:",ejer2);

//3. Hace cuantos años naci
let a = moment([2021,2,4]);
let b = moment([1995,3,29]);
console.log("Naci hace:", Number(a.diff(b,'years')) + ' años');

//4. Que fecha sera en 258 dias
let fechaMas258 = moment().add(258, 'days').format('d-y-m');
console.log("La fecha en 258 días será:"+fechaMas258);

//5. que fecha sera en 4 semanas
let fechaMas4Weeks = moment().add(4, 'weeks').format('d-y-m');
console.log("La fecha en 4 semanas será:"+fechaMas4Weeks);










