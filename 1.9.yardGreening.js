function yardGreening(input){
    let squareMeter = 7.61 * (input[0]);
    let discount = squareMeter * 0.18;
    let totallPrice = squareMeter
    let finalPrice = squareMeter - discount

    console.log(`The final price is: ${finalPrice} lv. 
    The discount is: ${discount} lv.`);
}

yardGreening(["150"])//without this row