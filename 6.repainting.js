function repainting(input) {

    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let thinner = Number(input[2]);
    let hours = Number(input[3]);

    let bags = 0.4;

    // let nylonTotalSum = (naylon + 2) * 1.5;
    // let paintTotalSum = (paint * 1.1) * 14.5;
    // let thinnerTotalSum = (thinner * 5);
    // let bags = 0.4;

    // let totalSumForMaterials = nylonTotalSum + paintTotalSum + thinnerTotalSum + bags;
    // let workersHours = (totalSumForMaterials * 0.3) * hours;
    // let TotalSum = totalSumForMaterials + workersHours;

    let totalExpences = (((naylon + 2) * 1.5) + ((paint * 1.1) * 14.5) + (thinner * 5) + bags);

    let workersHours = (totalExpences * 0.3) * hours;

    let total = totalExpences + workersHours;

    console.log(total);
}
repainting(["10 ", "11 ", "4 ", "8 "]);