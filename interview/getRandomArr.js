function getRandomArr(len, range) {
    const arr = new Array(len);
    let index = 0;
    const getRandomNumber = () => {
        const [min, max] = range;
        return min + Math.floor(Math.random() * (max - min))
    }

    const getArr = (arr) => {
        if (index >= len) return arr;

        const n = getRandomNumber();

        if (!arr.includes(n)) {
            arr[index] = n;
            index++;
        }

        return getArr(arr);
    }

    return getArr(arr);
}

const arr = getRandomArr(5, [5, 32]);

console.log(arr);