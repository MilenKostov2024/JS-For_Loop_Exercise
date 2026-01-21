function salary(input) {
    let index = 0;
    let n = Number(input[index++]);
    let salary = Number(input[index++]);

    for (let i = 0; i < n; i++) {
        let site = input[index++];

        if (site === "Facebook") {
            salary -= 150;
        } else if (site === "Instagram") {
            salary -= 100;
        } else if (site === "Reddit") {
            salary -= 50;
        }

        if (salary <= 0) {
            console.log("You have lost your salary.");
            return;
        }
    }

    console.log(salary);
}

salary(["3", "500", "Facebook", "Stackoverflow.com", "Instagram"]);