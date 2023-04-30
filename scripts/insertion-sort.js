
function insertion_sort() {
    increment_delay = 0

    for (var j = 0; j < array_size; j++) {
        div_update(divs[j], div_sizes[j], "yellow")

        var key = div_sizes[j]
        var i = j - 1
        while (i >= 0 && div_sizes[i] > key) {

            div_update(divs[i], div_sizes[i], "crimson")
            div_update(divs[i + 1], div_sizes[i + 1], "crimson")

            div_sizes[i + 1] = div_sizes[i]

            div_update(divs[i], div_sizes[i], "crimson")
            div_update(divs[i + 1], div_sizes[i + 1], "crimson")

            div_update(divs[i], div_sizes[i], "darkorchid")
            if (i == j - 1)
                div_update(divs[i + 1], div_sizes[i + 1], "yellow")
            else
                div_update(divs[i + 1], div_sizes[i + 1], "darkorchid")
            i -= 1
        }
        div_sizes[i + 1] = key
        for (var t = 0; t < j; t++) div_update(divs[t], div_sizes[t], "darkcyan")
    }

    div_update(divs[j - 1], div_sizes[j - 1], "darkcyan")

    let complexity = 'Insertion Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(N)\nAverage Case: Θ(N^2)\nWorst Case: O(N^2)\n\n\n'
    enable_buttons(complexity)
}