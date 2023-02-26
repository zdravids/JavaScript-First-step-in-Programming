function projectCreation(input) {
    let name = input[0];
    let num = Number(input[1]);
    let result = 3 * num;

    console.log(`The architect ${name} will need ${result} hours to complete ${num} project/s.`);
}

projectCreation(["George","4"]); // witout this row