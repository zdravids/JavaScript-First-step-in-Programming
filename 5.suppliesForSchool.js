function suppliesForSchool(input) {

    let pencilPacks = Number(input[0]);
    let markerPacks = Number(input[1]);
    let detergentLiters = Number(input[2]);
    let discount = Number(input[3])/100;

    // let pencilFinalPrice = pencilPacks * 5.8;
    // let markerFinalPrice = markerPacks * 7.2;
    // let litersFinalPrice = detergentLiters * 1.2;

    // let finalPrice = pencilFinalPrice + markerFinalPrice + litersFinalPrice;
    // let priceAfterDiscount = finalPrice - (finalPrice * (doscount / 100));

    // console.log(priceAfterDiscount);

    let total = ((pencilPacks * 5.8) + (markerPacks * 7.2) + (detergentLiters * 1.2));
    let totalAfterDiscount = (total - (total * discount));
    console.log(totalAfterDiscount);
}
suppliesForSchool(["2 ","3 ","4 ","25 "])