
increment_delay = 0

function merge_sort() {
    merge_partition(0, array_size - 1)
    let complexity = 'Merge Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(NlogN)\nAverage Case: Θ(NlogN)\nWorst Case: O(NlogN)\n\n\n'
    enable_buttons(complexity)
}

function mergesort(start, mid, end) {
    var p = start, q = mid + 1

    var Arr = [], k = 0

    for (var i = start; i <= end; i++) {
        if (p > mid) {
            Arr[k++] = div_sizes[q++]
            div_update(divs[q - 1], div_sizes[q - 1], "crimson")
        }
        else if (q > end) {
            Arr[k++] = div_sizes[p++]
            div_update(divs[p - 1], div_sizes[p - 1], "crimson")
        }
        else if (div_sizes[p] < div_sizes[q]) {
            Arr[k++] = div_sizes[p++]
            div_update(divs[p - 1], div_sizes[p - 1], "crimson")
        }
        else {
            Arr[k++] = div_sizes[q++]
            div_update(divs[q - 1], div_sizes[q - 1], "crimson")
        }
    }

    for (var t = 0; t < k; t++) {
        div_sizes[start++] = Arr[t]
        div_update(divs[start - 1], div_sizes[start - 1], "darkcyan")
    }
}

function merge_partition(start, end) {
    if (start < end) {
        var mid = Math.floor((start + end) / 2)
        div_update(divs[mid], div_sizes[mid], "yellow")

        merge_partition(start, mid)
        merge_partition(mid + 1, end)

        mergesort(start, mid, end)
    }
}
