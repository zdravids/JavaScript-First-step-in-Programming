function depositCalculator(input) {

    let Deposit = Number(input[0]);
    let periodInMonths = Number(input[1]);
    let percent = Number(input[2]);

    let sum = Deposit + periodInMonths * ((Deposit * percent / 100) / 12);

    console.log(sum);
}
depositCalculator(["200 ","3 ","5.7 "])