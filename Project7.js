let price = 900;
let discount = 80;
let member = true;
if(member = true){
    let discountamount =(price * discount) / 100;
    let finalprice = price - discount;
    console.log(`Since you are a member, you will get ${discount}% discount. Final price:${price} `)
}else{
    console.log(`The price ${price} will be reduce normally onless yuoe become a member to get a ${discount}% off`)
}