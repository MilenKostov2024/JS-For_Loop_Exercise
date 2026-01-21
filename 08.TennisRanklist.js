function tennisRanklist(input) {
    let index = 0;

    let tournaments = Number(input[index++]);
    let startPoints = Number(input[index++]);

    let totalPoints = startPoints;
    let wonTournaments = 0;
    let earnedPoints = 0;

    for (let i = 0; i < tournaments; i++) {
        let result = input[index++];

        if (result === "W") {
            totalPoints += 2000;
            earnedPoints += 2000;
            wonTournaments++;
        } else if (result === "F") {
            totalPoints += 1200;
            earnedPoints += 1200;
        } else if (result === "SF") {
            totalPoints += 720;
            earnedPoints += 720;
        }
    }

    let averagePoints = Math.floor(earnedPoints / tournaments);
    let winPercent = (wonTournaments / tournaments * 100).toFixed(2);

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${averagePoints}`);
    console.log(`${winPercent}%`);
}

tennisRanklist(["5", "1400", "F", "SF", "W", "W", "SF"]);