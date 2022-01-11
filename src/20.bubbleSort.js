// 冒泡排序
function bubbleSort(arr) {
    const len = arr.length;
    let temp = undefined;

    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }

    return arr;
}


const a = [1, 21, 45, 20, 5, 2, 24, 12, 6, 75, 8, 39, 10];

bubbleSort(a);
console.log(a);