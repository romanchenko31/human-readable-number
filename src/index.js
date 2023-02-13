let arr = [];
let arrNumber = [];

module.exports = function toReadable(number) {
    arrNumber = String(number).split("");
    if (arrNumber.length === 3) {
        for (let i = 0; i < arrNumber.length; i += 1) {
            if (i === 0) {
                hundredths(arrNumber[i]);
            }
            if (i === 1) {
                tenths(arrNumber[i], arrNumber);
                if (arrNumber[i] === "1") {
                    return arr.join(" ");
                }
            }

            if (i === 2) {
                if (arrNumber[i] === "0") {
                    return arr.join(" ");
                }
                single(arrNumber[i]);
            }
        }
    }
    if (arrNumber.length === 2) {
        for (let i = 0; i < arrNumber.length; i += 1) {
            if (i === 0) {
                tenths(arrNumber[i], arrNumber);
                if (arrNumber[i] === "1") {
                    return arr.join(" ");
                }
            }
            if (i === 1) {
                if (arrNumber[i] === "0") {
                    return arr.join(" ");
                }
                single(arrNumber[i]);
            }
        }
    }
    if (arrNumber.length === 1) {
        arrNumber.map((v) => single(v));
    }
    return arr.join(" ");
};

function hundredths(v) {
    for (let i = 0; i < 10; i += 1) {
        if (v == i) {
            switch (v) {
                case "1":
                    arr.push("one hundred");
                    break;
                case "2":
                    arr.push("two hundred");
                    break;
                case "3":
                    arr.push("three hundred");
                    break;
                case "4":
                    arr.push("four hundred");
                    break;
                case "5":
                    arr.push("five hundred");
                    break;
                case "6":
                    arr.push("six hundred");
                    break;
                case "7":
                    arr.push("seven hundred");
                    break;
                case "8":
                    arr.push("eight hundred");
                    break;
                case "9":
                    arr.push("nine hundred");
                    break;
            }
        }
    }
}

function tenths(v, arrNumber) {
    for (let i = 0; i < 10; i += 1) {
        if (v == i) {
            switch (v) {
                case "1":
                    for (let k = 0; k < 10; k += 1) {
                        if (arrNumber[arrNumber.length - 1] == k) {
                            switch (k) {
                                case 0:
                                    arr.push("ten");
                                    return;
                                case 1:
                                    arr.push("eleven");
                                    return;
                                case 2:
                                    arr.push("twelve");
                                    return;
                                case 3:
                                    arr.push("thirteen");
                                    return;
                                case 4:
                                    arr.push("fourteen");
                                    return;
                                case 5:
                                    arr.push("fifteen");
                                    return;
                                case 6:
                                    arr.push("sixteen");
                                    return;
                                case 7:
                                    arr.push("seventeen");
                                    return;
                                case 8:
                                    arr.push("eighteen");
                                    return;
                                case 9:
                                    arr.push("nineteen");
                                    return;
                            }
                        }
                    }

                case "2":
                    arr.push("twenty");
                    break;
                case "3":
                    arr.push("thirty");
                    break;
                case "4":
                    arr.push("forty");
                    break;
                case "5":
                    arr.push("fifty");
                    break;
                case "6":
                    arr.push("sixty");
                    break;
                case "7":
                    arr.push("seventy");
                    break;
                case "8":
                    arr.push("eighty");
                    break;
                case "9":
                    arr.push("ninety");
                    break;
            }
        }
    }
}

function single(v) {
    for (let i = 0; i < 10; i += 1) {
        if (v == i) {
            switch (v) {
                case "0":
                    arr.push("zero");
                    break;
                case "1":
                    arr.push("one");
                    break;
                case "2":
                    arr.push("two");
                    break;
                case "3":
                    arr.push("three");
                    break;
                case "4":
                    arr.push("four");
                    break;
                case "5":
                    arr.push("five");
                    break;
                case "6":
                    arr.push("six");
                    break;
                case "7":
                    arr.push("seven");
                    break;
                case "8":
                    arr.push("eight");
                    break;
                case "9":
                    arr.push("nine");
                    break;
            }
        }
    }
}
