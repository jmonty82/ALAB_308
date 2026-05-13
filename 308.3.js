// Part 1

Loop through all numbers from 1 to 100.
// for(let i = 1; i<=100; i++){
//     console.log(i);
// }

// If a number is divisible by 3, log “Fizz.”
// let x = "Fizz"
// for(let i = 1; i<=100; i++)
//     if(i % 3 === 0)
//         console.log(i,x)



// If a number is divisible by 5, log “Buzz.”
// {console.log("Fizz");}

    // for(let i = 1; i<=100; i++){
    // if(i % 5 === 0){
    // console.log(i, "Buzz");}
    // }
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”

 for(let i = 1; i <= 100; i++){
    if(i % 3 && i % 5);}
        {
    console.log(i,"Fizz Buzz");
    }

// If a number is not divisible by either 3 or 5, log the number.

for (let i = 1; i <= 3; i++) {
    let str = ''
    for (let j = 1; j <= i; j++) {
        str += j
    }
    console.log(str)
}
console.log('done')

Part 2

//PRIME NUMBERS: 2  3   5   7   11  13  17  19  23  29  31  37  41  43  47
//can't divide a number by anything but itself
let n = 9; // not a prime number
//create a loop that searchs for the next prime number, starting at n and incrementing from there
for (let i = n + 1; ; i++) {



   // n + 1 = 10
   // n / j
   //10 / 9
   //10 / 8
   //10 / 7
   //10 / 6
   //10 / 5 <--not prime
   //10 / 4
   //10 / 3
   //10 / 2 <-- stop here

   let isPrime = true

   for (let j = n - 1; j >= 2; j--) {
      // i is 10 and j is 9 (in the first iteration)
      //checking if i (10) is divisible by j (9,8,7,6,5)
      if (i % j === 0) {
         // not prime because j is not 1 or the number itself
         isPrime = false;
         break;
      }

   }
   //if we go through the nested loop and isPrime is still true, then the current number (i) must be prime
   if (isPrime === true) {
      console.log(i);
      break; // exists the outer loop
   }
}

Part 3

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const table = csv.split("\n")
console.log(table)

let arr2 = [];
for (i of table){
   arr2.push( i.split(","));
}
console.log(arr2);
