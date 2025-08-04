// ===== HOMEWORK ASSIGNMENT =====
// Grade Calculator for 5 Subjects

console.log("=== Homework: Grade Calculator ===");

// TODO: Step 1 - Declare an array with 5 subject marks

// TODO: Step 2 - Loop through the array to compute the total

// TODO: Step 3 - Calculate average from the total

// TODO: Step 4 - Use if-else to print the overall grade
// Grade rules: A (90+), B (80–89), C (70–79), F (<70)
let array=[80,90,100,80,90];
let sum=0;
for(i=0;i<array.length;i++){
    sum+=array[i];
}
console.log("Total score is:",sum);
let average=sum/5;
console.log("Average score is:",average);
if(average>=90){
    console.log("You get Grade A");
}else if(average>=80){
    console.log("You get Grade B");

}else if(average>=70){
    console.log("You get Grade C");

}else{
    console.log("You get Grade F");
}
