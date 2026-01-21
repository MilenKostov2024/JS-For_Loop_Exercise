function trekkingMania(input) {
    let index = 0;
    let groupsCount = Number(input[index++]);

    let musala = 0;
    let montBlanc = 0;
    let kilimanjaro = 0;
    let k2 = 0;
    let everest = 0;

    let totalPeople = 0;

    for (let i = 0; i < groupsCount; i++) {
        let people = Number(input[index++]);
        totalPeople += people;

        if (people <= 5) {
            musala += people;
        } else if (people <= 12) {
            montBlanc += people;
        } else if (people <= 25) {
            kilimanjaro += people;
        } else if (people <= 40) {
            k2 += people;
        } else {
            everest += people;
        }
    }

        console.log((musala / totalPeople * 100).toFixed(2) + "%");
        console.log((montBlanc / totalPeople * 100).toFixed(2) + "%");
        console.log((kilimanjaro / totalPeople * 100).toFixed(2) + "%");
        console.log((k2 / totalPeople * 100).toFixed(2) + "%");
        console.log((everest / totalPeople * 100).toFixed(2) + "%");
    }

trekkingMania(["10", "10", "5", "1", "100", "12", "26", "17", "37", "40", "78"]);