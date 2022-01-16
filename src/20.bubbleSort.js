// 冒泡排序
function bubbleSort(arr) {
    const len = arr.length;
    let temp = undefined;

    for (let i = 0; i < len - 1; i++) {
        console.log(`第${i+1}轮`);
        for (let j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
                console.log(arr);
            }
        }
    }

    console.log('排序结束：', arr);

    return arr;
}

console.log(bubbleSort([5, 3, 4, 2, 6, 1]))

// 排序前 => 5 3 4 2 6 1
// 
// 比较过程（忽略没有换位的操作）
// 第一轮   |-> 3 5 4 2 6 1
//         |-> 3 4 5 2 6 1
//         |-> 3 4 2 5 6 1
//         |-> 3 4 2 5 1 6
//
// 第二轮   |-> 3 2 4 5 1 6 
//         |-> 3 2 4 1 5 6
//
// 第三轮   |-> 2 3 4 1 5 6
//         |-> 2 3 1 4 5 6
//
// 第四轮   |-> 2 1 3 4 5 6
// 
// 第五轮   |-> 1 2 3 4 5 6