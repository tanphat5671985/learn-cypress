let myArray = [1, "Teo", 2, 'Ti']
console.log(myArray[0])

myArray.push('Peter')
console.log('string after pushing: ', myArray)

myArray[8] = 3
console.log('string after editing: ', myArray)

myArray.pop()
console.log('string after poping: ', myArray)

myArray.splice(2,2) //
console.log('string after splicing: ', myArray)

testArray = ['a','b','c','d','e','f']
testArray.splice(2,3)
console.log('string after splicing: ', testArray)
//abf

//splice(start)
//splice(start, deleteCount)
//splice(start, deleteCount, item1)
//splice(start, deleteCount, item1, item2, itemN)