const binarySearch = (list, expected) => {
    let sortedList = list.sort((a, b) => a - b)
    let step = 0;
    while(true){
        step++;
        console.log(`Step ${step}`);
        if(sortedList.length === 0) {
            console.log(`Number ${expected} could not been found`);
            return false;
        }
        const mid = Math.floor(sortedList.length / 2);
        let mediumResult = sortedList[mid]
        console.log(`Checking number ${mediumResult} in array with the following numbers: ${sortedList}`);
        if(mediumResult === expected){
            return true;
        } else if (mediumResult > expected) {
            sortedList = sortedList.splice(0, mid);
        } else {
            sortedList = sortedList.splice(mid + 1, sortedList.length);
        }

    }
}

const bookBinarySearch = (list, expected) => {
    let low = 0;
    let high = list.length - 1;
    let step = 0;
    while(low  <= high){
        step++;
        console.log(`Step ${step}`);
        let mid = (low + high);
        let guess = list[mid];
        if(guess === expected){
            return mid;
        } else if (guess > expected) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }
}

module.exports = {binarySearch, bookBinarySearch};