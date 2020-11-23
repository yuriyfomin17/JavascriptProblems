const pivot = (arr, start = 0, end = arr.length + 1) => {
    const swap = (list, a, b) => [list[a], list[b]] = [list[b], list[a]];

    let pivot = arr[start],
        pointer = start;

    for (let i = start; i < arr.length; i++) {
        if (arr[i] < pivot  ) {
            pointer++;
            swap(arr, pointer, i);
        }
    };
    swap(arr, start, pointer);

    return pointer;
}

const quickSort = (arr, start = 0, end = arr.length) => {
    debugger
    let pivotIndex = pivot(arr, start, end);

    if (start >= end) return arr;
    quickSort(arr, start, pivotIndex);
    quickSort(arr, pivotIndex + 1, end);

    return arr;
};

console.log(quickSort([ 4, 2, 6, 5, 3, 9 ]));