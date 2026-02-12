let height = 2.67;
let weight = 67;
let BMI = weight / (height * height);
let classification;
if(BMI < 18.5){
    classification = "Underweight";
}else if(BMI >= 18.5){
    classification ="Normal";
}else{
    classification ="Fat";
}
console.log("BMI", BMI);
console.log("classification", classification);