//STRING
let myName = "Peter"
let myNameLength = myName.length
console.log("do dai ten toi: ",myNameLength)
//Add between 2 string
// cach 1: +
let testFinal = 'Hello' + 'World'
console.log(testFinal)

let testFinal2 = "1" + "2"
console.log(testFinal2)
// cach 2: concat()
let firstName = "Phat"
let lastName = 'Tran Tan'
let fullName = lastName.concat(firstName);
console.log(fullName)
//loai bo khoang trang dau cuoi
let test = ' a b c d  '
console.log(test.trim())
//slipt()
console.log('*******')
let helloString = 'Hello'
let helloStringSplit = helloString.split("")
console.log(helloStringSplit)

let helloString2 = "abcdefABC"
let helloString2Split = helloString2.split("ef")
console.log(helloString2Split)

//ktra phan tu co trong chuoi indexOf (co phan biet chu hoa/thuong)
// return <0 neu ko tim thay, return vi tri phan tu neu tim thay

let indexOfA = helloString.indexOf("A")
console.log(indexOfA)

let indexofo = helloString.indexOf("o")
console.log(indexofo)

