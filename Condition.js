let myCondition = true
if (myCondition) console.log('Hello...')
else console.log('Huhu')

//for
let emergencyNumber = [113,114,115]
console.log('Length of array: ',emergencyNumber.length)

for (let i=0;i<emergencyNumber.length;i++)
{
    if (emergencyNumber[i] == 113) {
        console.log(i)
        console.log('So khan cap cua CA: ',emergencyNumber[i])
    }
    else if (emergencyNumber[i] == 114) {
        console.log(i)
        console.log('So khan cap cua cuu hoa: ', emergencyNumber[i])
    }
    else {
        console.log(i)
        console.log('So khan cap cua cap cuu: ', emergencyNumber[i])
    }
}
console.log('end for...')