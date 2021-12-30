function profitPerProperty(time, earnings) {
    let theatre = 0;
    let pub = 0;
    let commercialPark = 0;
    let theatreEarnings = 0;
    let pubEarnings = 0;
    let commercialParkEarnings = 0;
    let totalEarnings = 0;
    let theatreCount = 0;
    let pubCount = 0;
    let commercialParkCount = 0;

    while (time > 0) {
        if (time >= 5) {
            theatre++;
            time -= 5;
            theatreEarnings += 1500;
            theatreCount++;
        } else if (time >= 4) {
            pub++;
            time -= 4;
            pubEarnings += 1000;
            pubCount++;
        } else if (time >= 10) {
            commercialPark++;
            time -= 10;
            commercialParkEarnings += 3000;
            commercialParkCount++;
        }
    }

    totalEarnings = theatreEarnings + pubEarnings + commercialParkEarnings;

    if (totalEarnings === earnings) {
        return `T:${theatreCount}P:${pubCount}C:${commercialParkCount}`;
    } else {
        return 'No Solution'; 
    }
}

console.log(profitPerProperty(7, 3000));
