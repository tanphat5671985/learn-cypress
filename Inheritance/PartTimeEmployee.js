let Employee = require("./Employee");
class PartTimeEmployee extends Employee{

    constructor(name, id){
        super(name, id);
    }
    getExtraSalary(){
        return 0;
    }
}
module.exports = PartTimeEmployee;