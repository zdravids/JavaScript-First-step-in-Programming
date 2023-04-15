function vacationBooksList(input) {
    
    let pageNumber = Number(input[0]);
    let pagePerHour = Number(input[1]);
    let days = Number(input[2]);

    // let hours = pageNumer / pagePerHour;
    // let hoursPerDay = hours / days;

    let totalHours = ((pageNumber / pagePerHour) / days);

    console.log(totalHours);
}
vacationBooksList(["432 ","15 ","4 "])