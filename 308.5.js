// Take an array of numbers and return the sum.
let numbers = [1, 2, 3]
function sum(numbers) {
    let total = 0;
    for (let number of numbers) {
        total += number
    }
    return total
}
console.log(sum(numbers))

// Take an array of numbers and return the average.
let avg = [4, 5, 6]
function average(avg) {
    let total = 0;
    for (let number of avg) {
        total += number
    }
    return total / avg.length
}
console.log(average(avg))
// Take an array of strings and return the longest string.
let str = ["build", "chicken", "dog"]
function longeststring(str) {
    let longest = "";
    for (let string of str) {
        if (string.length > longest.length) {
            longest = string;
        }
    }
    return longest
}
console.log(longeststring(str))
// Take an array of strings, and a number and return an array of the strings that are longer than the given number. 
let words = ["movie", "fun", "saiyan"]
let number = 3
function stringsLongerThan(words, number) {
    let newList = []
    for (let str of words) {
        if (str.length > number) {
            newList.push(str)
        }
    }
    return newList
}
console.log(stringsLongerThan(words, number))
// For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3); would return ["hello", "morning"].

// Take a number, n, and print every number between 1 and n without using loops. Use recursion.