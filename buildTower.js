
function tower (num) {
for(let i = 0; i < num; i++) {
    var output = ''
    for(let j = 0; j < num - i; j++) output += ' '
    for (let k = 0; k <= i; k++) output += '* '
    console.log(output)

}
}


tower(12)

//jareds solution

// function makeTower(n) {
//     let lengthOfStr = 2 * n - 1
//     let arr = []

//     for(let i = 1; i < n; i ++){
//         let starAmount = 2 * i -1
//         let halfSpaceAmount = (lengthOfStr - starAmount) / 2

//         let firstSpaces = ''.padStart(halfSpaceAmount, " ")
//         let starStr = ''.padStart(starAmount, '*')

//         arr.push(firstSpaces + starStr + firstSpaces)
//     }
//     return arr
// }


// console.log(makeTower(6))