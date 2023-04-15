function fishTank(input) {
    let lenght = Number(input[0]);
    let depth = Number(input[1]);
    let hight = Number(input[2]);
    let percent = Number(input[3]);
    
    let liter = (lenght * depth * hight) / 1000;
    let addPercent = (percent * 0.01);

    let totalLiters = (liter * (1- addPercent));

    console.log(totalLiters);
}
fishTank(["85 ","75 ","47 ","17 "]);