function foodDelivery(input) {

    let chickenMenue = Number(input[0]);
    let fishMenue = Number(input[1]);
    let vegMenue = Number(input[2]);

    let chikenTotal = chickenMenue * 10.35;
    let fishTotal = fishMenue * 12.40;
    let vegTotal = vegMenue * 8.15;

    let total = (chikenTotal + fishTotal + vegTotal);

    let desert = (total * 0.2);
    let delivery = 2.5;

    let priceToPay = (total + desert + delivery);

    console.log(priceToPay);
}
foodDelivery(["2 ","4 ","3 "]);