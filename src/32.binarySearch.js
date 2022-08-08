function binarySearch(nums, target) {
    const len = nums.length;
    let left = 0, right = len - 1;

    while (left <= right) {
        let mid = left + Math.floor((right - left) / 2);
        let midVal = nums[mid];

        if (midVal === target) {
            return mid;
        }
        else if (midVal > target) {
            right = mid - 1;
        }
        else {
            left = mid + 1;
        }
    }

    return -1;
}