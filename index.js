const { bookBinarySearch } = require("./algoritmos/binarySearch");

const main = () => {
    var list = [];
    for (var i = 1; i <= 256; i++) {
        list.push(i);
    }
    console.log(bookBinarySearch(list, 1));
}

main();