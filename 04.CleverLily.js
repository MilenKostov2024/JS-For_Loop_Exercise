function cleverLily(age, washingMachinePrice, toyPrice) {
    
    let money = 0;
    let toys = 0;
    let currentGift = 10;

    for (let year = 1; year <= age; year++) {
        if (year % 2 === 0) {
            money += currentGift - 1; // братът взима 1 лев
            currentGift += 10;
        } else {
            toys++;
        }
    }

    money += toys * toyPrice;

    if (money >= washingMachinePrice) {
        console.log(`Yes! ${(money - washingMachinePrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(washingMachinePrice - money).toFixed(2)}`);
    }
}