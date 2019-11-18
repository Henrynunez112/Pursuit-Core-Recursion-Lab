// //problem 1
// const sumRec = (num) =>{
//     if(num === 0) return 0;
//     return num += sumRec(num - 1)

// }
// console.log(sumRec(6))

// //problem 2

// const multArr = (arr) =>{
//     if(arr.length === 0) return 1;
//     let el = arr.pop()
//     return multArr(arr)*el
// }
// console.log(multArr([2, 3, 5]))

// //problem 3

// const concatArr = (arr) =>{
//     if(arr.length <= 0) return "";
//     let string = arr.pop()
//     return concatArr(arr) + " " + string
// }
// console.log(concatArr(['or', 'just', 'the', 'end', 'of', 'time']))


// //problem 4
// const sumEvens = (arr) =>{
//     if(arr.length <= 0) return 0;
//     let el = arr.pop()
//     return el % 2 === 0 ? sumEvens(arr) + el : sumEvens(arr)
// }
// console.log(sumEvens([10, 5, 1, 2, 12]))


//problem 5
const range = (num1, num2, rangeArr = []) => {
    if(num2 === num1){
        rangeArr.push(num2)
        return rangeArr
    }rangeArr.push(num1)
        num1++
        return range(num1, num2, rangeArr)
}
console.log(range(2,10))