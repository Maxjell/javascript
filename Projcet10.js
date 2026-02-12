let score = 90;
let level = 3;
let aquiredBonus = true;

if(aquiredBonus){
    if(level > 5){
        score +=  30;
    }
}
if(score >=100){
    console.log("Final score", score)
    console.log("congrates you have won!");
}else{
    console.log("Final score", score);
    console.log("Keep going.");
}