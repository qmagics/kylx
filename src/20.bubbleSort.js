// 冒泡排序
function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len - 1; i++) { // 轮次
        for (var j = 0; j < len - 1 - i; j++) { // 元素
            if (arr[j] > arr[j + 1]) {        // 相邻元素两两对比
                var temp = arr[j + 1];        // 元素交换
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