function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}
function bubble_sort(A) {
    for (let i = A.length - 1; i >= 1; i--) {
        for (let j = 1; j <= i; j++) {
            if (A[j] < A[j - 1]) {
                swap(A, j - 1, j);
            }
        }
    }
}

const A = [3, 2, 5, 1, 4];
bubble_sort(A);
console.log(A);