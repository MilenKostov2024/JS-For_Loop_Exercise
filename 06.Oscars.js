function oscars(input) {
    let index = 0;

    let actorName = input[index++];
    let points = Number(input[index++]);
    let n = Number(input[index++]);

    for (let i = 0; i < n; i++) {
        let judgeName = input[index++];
        let judgePoints = Number(input[index++]);

        points += (judgeName.length * judgePoints) / 2;

        if (points > 1250.5) {
            console.log(
                `Congratulations, ${actorName} got a nominee for leading role with ${points.toFixed(1)}!`
            );
            return;
        }
    }

    let needed = 1250.5 - points;
    console.log(
        `Sorry, ${actorName} you need ${needed.toFixed(1)} more!`
    );
}

oscars(["Zahari Baharov", "205", "4", "Johnny Depp", "45", "Will Smith", "29", "Jet Lee", "10", "Matthew Mcconaughey", "39"]);