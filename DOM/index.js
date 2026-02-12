function getProfit(){
    const costprice = Number(document.getElementById(`cp`).value);
    const sellingprice = Number(document.getElementById(`sp`).value);
    const profit = sellingprice - costprice;
    msg.innerHTML =`Profit:${profit}`;
}