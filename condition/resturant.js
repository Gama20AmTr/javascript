const age = 12;
const price = 500;

if(age <= 12){
    console.log('You can eat for free');
}

else if(age >= 60){
    //50% discount
    const disCount = price * 50 / 100;
    const payAmount = price - disCount;

    console.log(payAmount);
}


else{
    console.log("You need to pay");
}