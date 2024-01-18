let OfficialEmployee = require("./OfficialEmployee")
let PartTimeEmployee = require("./PartTimeEmployee")

let teo = new OfficialEmployee("Teo", 4123456789)
let ti = new PartTimeEmployee("Ti", 6248861)

teo.getEmployeeInfo();
ti.getEmployeeInfo();

let teoExtraSalary = teo.getExtraSalary();
let tiExtraSalary = ti.getExtraSalary();
console.log("Phu cap Teo: ", teoExtraSalary)
console.log("Phu cap Ti: ", tiExtraSalary)

teo.signContract();
/*
 khi dung ke thua can chu y
- lop cha super-class, lop con la sup-class
- tu khoa ke thua: extends
- dung super de goi tu constructor tu class cha
- co the overrivew tu pthuc cu cua lop cha
- dong thoi them pthuc khac de dung
*/
