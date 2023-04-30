
function quick_sort() {
    increment_delay = 0
    quick_sortt(0, array_size - 1)
    let complexity = 'Quick Sort Time Complexity: ' + '\n\n' + 'Best Case: Ω(NlogN)\nAverage Case: Θ(NlogN)\nWorst Case: O(N^2)\n\n\n'
    enable_buttons(complexity)
}

function partition(start, end) {
    var i = start + 1
    var piv = div_sizes[start]                             
    div_update(divs[start], div_sizes[start], "yellow") 

    for (var j = start + 1; j <= end; j++) {
        if (div_sizes[j] < piv) {
            div_update(divs[j], div_sizes[j], "yellow")             //Color update

            div_update(divs[i], div_sizes[i], "crimson")            //Color update
            div_update(divs[j], div_sizes[j], "crimson")            //Color update

            var temp = div_sizes[i]
            div_sizes[i] = div_sizes[j]
            div_sizes[j] = temp

            div_update(divs[i], div_sizes[i], "crimson")            //Height update
            div_update(divs[j], div_sizes[j], "crimson")            //Height update

            div_update(divs[i], div_sizes[i], "darkorchid")         //Height update
            div_update(divs[j], div_sizes[j], "darkorchid")         //Height update
            i += 1
        }
    }
    div_update(divs[start], div_sizes[start], "crimson")            //Color update
    div_update(divs[i - 1], div_sizes[i - 1], "crimson")            //Color update

    var temp = div_sizes[start]                                     //put the pivot element in its proper place.
    div_sizes[start] = div_sizes[i - 1]
    div_sizes[i - 1] = temp

    div_update(divs[start], div_sizes[start], "crimson")            //Height update
    div_update(divs[i - 1], div_sizes[i - 1], "crimson")            //Height update


    for (var t = start; t <= i; t++) {
        div_update(divs[t], div_sizes[t], "darkcyan")               //Color update
    }

    return i - 1                                                    //return the position of the pivot
}


function quick_sortt(start, end) {
    if (start < end) {
        var piv_pos = partition(start, end)
        quick_sortt(start, piv_pos - 1)    //sorts the left side of pivot.
        quick_sortt(piv_pos + 1, end)     //sorts the right side of pivot.
    }
}
