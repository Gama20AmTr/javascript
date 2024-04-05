/**
 * Multi_ Level Condition
 */


const price = 3000;

if(price >= 5000){
    //10% discount
    const disCount = price * 10/100;
    const payment = price - disCount
    console.log(payment);
}
else if(price > 2500 ){
    //5% discount
    const disCount = price * 5 / 100;
    const payAmount = price - disCount;

    console.log(payAmount);
}
else{
    console.log(price);
}