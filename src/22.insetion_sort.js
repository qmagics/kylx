function insert(A, i, x) {
    let p = i - 1;

    while (p >= 0 && A[p] > x) {
        A[p + 1] = A[p];
        p--;
    }

    A[p + 1] = x;
}


function insertion_sort(A) {
    for (let i = 0; i < A.length; i++) {
        insert(A, i, A[i]);
    }
}
const a = [2, 1, 3, 6, 5];
insertion_sort(a);
console.log(a);