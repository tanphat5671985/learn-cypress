let originalArray = []
for (let i = 1; i <= 10 ; i++)
{
    console.log(i)
    originalArray.push(i)
}
console.log('New array: ',originalArray)

let evenNum = []
let oddNum = []
for (let i = 0; i < originalArray.length;i++)
{
    if (originalArray[i]%2) evenNum.push(originalArray[i])
    else oddNum.push(originalArray[i])
}
console.log('list even number of original array: ', evenNum)
console.log('list odd number of original array: ',oddNum)