const { sortMethodSpeedTest } = require("./9999.utils");

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

module.exports = selectionSort;

sortMethodSpeedTest(selectionSort);

// 排序前 => [5, 3, 4, 2, 6, 1]

// 第1轮 => [ 1, 3, 4, 2, 6, 5 ]
//
// 第2轮 => [ 1, 2, 4, 3, 6, 5 ]
//
// 第3轮 => [ 1, 2, 3, 4, 6, 5 ]
//
// 第4轮 => [ 1, 2, 3, 4, 6, 5 ]
//
// 第5轮 => [ 1, 2, 3, 4, 5, 6 ]

// 结果 => [ 1, 2, 3, 4, 5, 6 ]
