function infi() {
    let list = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16];

    for (let i of list) {
        if (isFinite(i) === true)  {
            console.log("Angka " + i + " IS Infinity.");
        } else {
            console.log("Angka " + i + " NOT Infinity.");
        }
    }
}

infi();