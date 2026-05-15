const weeklyExpenses = [
   [12.50, 5.00, 20.25], //Monday
   [8.00],               //Tuesday
   [15.75, 3.10],        //Wednesday
   [50.00, 12.00],       // Thursday
   [10.50, 4.25, 3.50],  // Friday
   [100.00, 25.00],      // Saturday
   [15.00]               // Sunday
];

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
let grandtotal = 0
console.log(weeklyExpenses)
for (let i = 0; i < weeklyExpenses.length; i++) {
   let dailytotal = 0
   for (let j = 0; j < weeklyExpenses[i].length; j++){
      dailytotal += weeklyExpenses[i][j]
}
console.log(days[i] + " Total:$" + dailytotal.toFixed(2));
grandtotal += dailytotal;
}
console.log("Grand Total:", grandtotal)