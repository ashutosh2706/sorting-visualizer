increment_delay = 0

function heap_sort() {
    for (var i = Math.floor(array_size / 2) - 1; i >= 0; i--) {
        max_heapify(array_size, i);
    }

    for (var i = array_size - 1; i > 0; i--) {
        swap(0, i);
        div_update(divs[i], div_sizes[i], "darkcyan")
        div_update(divs[i], div_sizes[i], "yellow")

        max_heapify(i, 0);

        div_update(divs[i], div_sizes[i], "darkorchid")
        div_update(divs[i], div_sizes[i], "darkcyan")
    }
    div_update(divs[i], div_sizes[i], "darkcyan")

    let complexity = 'Heap Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(NlogN)\nAverage Case: Θ(NlogN)\nWorst Case: O(NlogN)\n\n\n'
    enable_buttons(complexity)
}

function swap(i, j) {
    div_update(divs[i], div_sizes[i], "crimson")
    div_update(divs[j], div_sizes[j], "crimson")

    var temp = div_sizes[i];
    div_sizes[i] = div_sizes[j];
    div_sizes[j] = temp;

    div_update(divs[i], div_sizes[i], "crimson")
    div_update(divs[j], div_sizes[j], "crimson")
    div_update(divs[i], div_sizes[i], "darkorchid")
    div_update(divs[j], div_sizes[j], "darkorchid")
}

function max_heapify(n, i) {
    var largest = i;
    var l = 2 * i + 1;
    var r = 2 * i + 2;

    if (l < n && div_sizes[l] > div_sizes[largest]) {
        if (largest != i) {
            div_update(divs[largest], div_sizes[largest], "darkorchid")
        }

        largest = l;

        div_update(divs[largest], div_sizes[largest], "crimson")
    }

    if (r < n && div_sizes[r] > div_sizes[largest]) {
        if (largest != i) {
            div_update(divs[largest], div_sizes[largest], "darkorchid")
        }

        largest = r;

        div_update(divs[largest], div_sizes[largest], "crimson")
    }

    if (largest != i) {
        swap(i, largest);
        max_heapify(n, largest);
    }
}