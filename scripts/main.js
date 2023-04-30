/* ----- for handling dropdown menu of algorithm selection -------*/

var ALGORITHM = 'Bubble Sort'

const dropdowns = document.querySelectorAll('.dropdown')

var options, selected, select

dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select')
    const caret = dropdown.querySelector('.caret')
    const menu = dropdown.querySelector('.menu')
    const options = dropdown.querySelectorAll('.menu li')
    const selected = dropdown.querySelector('.selected')


    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked')
        caret.classList.toggle('caret-rotate')
        menu.classList.toggle('menu-open')
    })

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText
            select.classList.remove('select-clicked')
            caret.classList.remove('caret-rotate')
            menu.classList.remove('menu-open')

            options.forEach(option => {
                option.classList.remove('active')
            })

            option.classList.add('active')

            ALGORITHM = selected.innerText;
            console.log('Algorithm: ' + ALGORITHM)
        })
    })

})

/*-----------------------------------------------------*/

var algo_btns = document.querySelectorAll('.dropdown menu li')
var algo_box = document.querySelector('.dropdown .select')
var inp_as = document.getElementById('a_size')
var array_size = inp_as.value
var inp_aspeed = document.getElementById("a_speed")
var start_exec = document.getElementById('a_generate')
start_exec.addEventListener('click', run_algo)

inp_as.style.cursor = "pointer"
inp_aspeed.style.cursor = "pointer"

var div_sizes = []
var divs = []
var cont = document.getElementById('array_container')


inp_as.addEventListener('click', () => {
    array_size = inp_as.value
    generate_array()
});

function generate_array() {

    cont.innerHTML = ""
    for (var i = 0; i < array_size; i++) {
        div_sizes[i] = Math.floor(Math.random() * 0.7 * (inp_as.max - inp_as.min)) + 10       // generate random values for array sizes
        divs[i] = document.createElement("div")
        cont.appendChild(divs[i])      // add divs to to array container
        margin_size = 0.1                // set margin
        var width_of_cont = 100 / array_size - 2 * margin_size
        divs[i].style = `margin: ${margin_size}%; background-color: darkorchid; width: ${width_of_cont}%; height: ${div_sizes[i]}%;`
    }
}

window.onload = generate_array()


function disable_buttons() {
    inp_as.disabled = true
    inp_as.style = "background-color: gray"
    inp_aspeed.disabled = true
    inp_aspeed.style = "background-color: gray"
    start_exec.disabled = true
    start_exec.style = "background-color: gray"
    start_exec.style.cursor = "not-allowed"
    inp_as.style.cursor = "not-allowed"
    inp_aspeed.style.cursor = "not-allowed"
}


function run_algo() {

    disable_buttons()
    switch (ALGORITHM) {
        case 'Bubble Sort':
            bubble_sort()
            break;
        case 'Selection Sort':
            selection_sort()
            break;
        case 'Insertion Sort':
            insertion_sort()
            break;
        case 'Quick Sort':
            quick_sort()
            break;
        case 'Heap Sort':
            heap_sort()
            break;
        case 'Merge Sort':
            merge_sort()
            break;
        default:
    }
}
