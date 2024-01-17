class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    //method
    talk(friendName){
        console.log("Hello", friendName)
    }

    getPersonalInfor(){
        console.log("My name is ", this.name)
        console.log("My age is ", this.age)
    }
}

let teo = new Person();
teo.talk("Ti")

let ti = new Person();
ti.talk("Teo")

let tun = new Person();
tun.talk()

let tung = new Person();
tung.talk(tun)

let bao = new Person('Bao', 20)
bao.getPersonalInfor()
bao.talk(bao)

module.exports = Person;