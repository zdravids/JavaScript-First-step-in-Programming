function basketballEquipment(input) {

    let anualTax = Number(input[0]);

    let sneekers = (anualTax - (anualTax * 0.4));
    let equipment = (sneekers - (sneekers * 0.2));
    let ball = (equipment * 0.25);
    let accessories = (ball * 0.20);

    let Expences = (anualTax + sneekers + equipment + ball + accessories);

    console.log(Expences);
}
basketballEquipment(["365 "]);