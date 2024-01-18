let Employee = require("./Employee");
class OfficialEmployee extends Employee{

    constructor(name, id){
        super(name, id);
    }

    signContract(){
        console.log(this.name + "Need to contact HR to sign");
    }
}

module.exports = OfficialEmployee;