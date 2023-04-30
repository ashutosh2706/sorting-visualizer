function selection_sort() {

    increment_delay = 0
    for (var i = 0; i < array_size - 1; i++) {

        div_update(divs[i], div_sizes[i], "crimson")

        index_min = i

        for (var j = i + 1; j < array_size; j++) {
            div_update(divs[j], div_sizes[j], "yellow")

            if (div_sizes[j] < div_sizes[index_min]) {
                if (index_min != i)
                    div_update(divs[index_min], div_sizes[index_min], "darkorchid")

                index_min = j
                div_update(divs[index_min], div_sizes[index_min], "crimson")
            }
            else div_update(divs[j], div_sizes[j], "darkorchid")
        }

        if (index_min != i) {
            var temp = div_sizes[index_min]
            div_sizes[index_min] = div_sizes[i]
            div_sizes[i] = temp

            div_update(divs[index_min], div_sizes[index_min], "crimson")
            div_update(divs[i], div_sizes[i], "crimson")
            div_update(divs[index_min], div_sizes[index_min], "darkorchid")
        }
        div_update(divs[i], div_sizes[i], "darkcyan")
    }
    div_update(divs[i], div_sizes[i], "darkcyan")
    let complexity = 'Selection Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(N^2)\nAverage Case: Θ(N^2)\nWorst Case: O(N^2)\n\n\n'
    enable_buttons(complexity)
}