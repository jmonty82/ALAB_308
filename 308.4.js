// Part 1 & 2

const csv = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26";
const table = csv.split("\n")
console.log(table)

let arr2 = [];
for (i of table){
   arr2.push( i.split(","));
}
console.log(arr2);

// Part 3
let objectsArr = [];
let headers = arr2[0];

for (let i = 1; i < arr2.length; i++){
    let row = arr2[i];
        const objects = {};
        // loop through each column in the row
        for (let j = 0; j < headers.length; j++){
            let key = headers[j].toLowerCase();
            objects[key] = row[j]
        }
        objectsArr.push(objects)
}
console.log(objectsArr)

