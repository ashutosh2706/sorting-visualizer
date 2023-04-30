function bubble_sort() {

    increment_delay = 0
    let comparison = 0

    for (var i = 0; i < array_size - 1; i++) {
        for (var j = 0; j < array_size - i - 1; j++) {

            div_update(divs[j], div_sizes[j], "yellow")                      //Color update
            div_update(divs[j + 1], div_sizes[j + 1], "yellow")
            if (div_sizes[j] > div_sizes[j + 1]) {

                div_update(divs[j], div_sizes[j], "crimson")                 //Color update
                div_update(divs[j + 1], div_sizes[j + 1], "crimson")         //Color update

                var temp = div_sizes[j]                                      // perform swap
                div_sizes[j] = div_sizes[j + 1]
                div_sizes[j + 1] = temp

                div_update(divs[j], div_sizes[j], "crimson")                //Height update
                div_update(divs[j + 1], div_sizes[j + 1], "crimson")        //Height update
            }

            div_update(divs[j], div_sizes[j], "darkorchid")                 //Color update
        }
        div_update(divs[j], div_sizes[j], "darkcyan")                       //Color update
    }
    div_update(divs[0], div_sizes[0], "darkcyan")                           //Color update
    let complexity = 'Bubble Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(N^2)\nAverage Case: Θ(N^2)\nWorst Case: O(N^2)\n\n\n'
    enable_buttons(complexity)
}