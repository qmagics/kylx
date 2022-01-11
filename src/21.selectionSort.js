// 选择排序
function selectionSort(arr) {
    const len = arr.length;
    let temp = undefined;
    let minIndex = undefined;

    for (let i = 0; i < len - 1; i++) {
        minIndex = i;

        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j; // 找出最小元素的索引
            }
        }

        // 交换当前元素和最小元素
        temp = arr[minIndex];
        arr[minIndex] = arr[i];
        arr[i] = temp;
    }

    return arr;
}

const a = [1, 21, 45, 20, 5, 2, 24, 12, 6, 75, 8, 39, 10];

selectionSort(a);
console.log(a);
