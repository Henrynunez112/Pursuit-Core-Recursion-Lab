//problem 1
const sumRec = (num) =>{
    if(num === 0) return 0;
    return num += sumRec(num - 1)

}
console.log(sumRec(6))

//problem 2

const multArr = (arr) =>{
    if(arr.length === 0) return 1;
    let el = arr.pop()
    return multArr(arr)*el
}
console.log(multArr([2, 3, 5]))

const concatArr = (arr) =>{
    if(arr.length <= 0) return "";
    let string = arr.pop()
    return concatArr(arr) + " " + string
}
console.log(concatArr(['or', 'just', 'the', 'end', 'of', 'time']))
