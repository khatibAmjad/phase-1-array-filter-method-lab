// Code your solution here
function findMatching(arr, string){
    return arr.filter((arr) => {return arr.toLowerCase() === string.toLowerCase()})
}

function fuzzyMatch(arr, string){
    return arr.filter((arr) => {return arr[0] === string[0];})
}

function matchName(arr, string){
    return arr.filter((arr) => {return arr.name === string;})
}