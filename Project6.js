let age = 14;
let citizenship = true;
let VoterID = true;
if(age >= 18){
    if(citizenship = true){
        console.log(`You are allowed to vote`)
    }else{
        console.log(`You are in the wrong country`)
    }
    if(VoterID = true){
         console.log(`You are allowed to vote`)
    }else{
        console.log(`You will need a VoterID`)
    }
}else{
    console.log(`you must be 18 or above to vote`)
}
if(age >=18 + citizenship + VoterID){
    console.log(`You are allowed to vote`)
}else{
    console.log(`you are not allowed to vote`)
}
