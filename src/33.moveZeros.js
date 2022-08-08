// 移动0 快慢指针
function moveZeros(arr) {
    let len = arr.length;
    let i = j = 0;

    while (j < len) {
        if (arr[j] !== 0) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
        }
        j++;
    }
}

// 移动0 顺序替换
function moveZeros2(arr) {
    const len = arr.length;
    let last_index = 0;

    for (let i = 0; i < len; i++) {
        if (arr[i] !== 0) {
            arr[last_index] = arr[i];
            last_index++;
        }
    }

    last_index++;

    while (last_index < len) {
        arr[last_index++] = 0;
    }

    // for (let j = last_index + 1; j < len; j++) {
    //     arr[j] = 0;
    // }
}

const arr = [0, 1, 2, 0, 3, 2, 0, 0, 5, 0, 0, 0, 8, 47, 9];
// moveZeros(arr);
moveZeros2(arr);
console.log(arr);