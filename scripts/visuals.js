var speed = 150
inp_aspeed.addEventListener("input", vis_speed)

function vis_speed() {
        var simulation_speed = inp_aspeed.value
        switch (parseInt(simulation_speed)) {
                case 1: speed = 10
                        break;
                case 2: speed = 30
                        break;
                case 3: speed = 50
                        break;
                case 4: speed = 80
                        break;
                case 5: speed = 150
                        break;
                case 6: speed = 350
                        break;
                case 7: speed = 500
                        break;
                case 8: speed = 1000
                        break;
                case 9: speed = 3000
                        break;
                case 10: speed = 5000
        }

        delay_time = 10000 / (Math.floor(array_size / 10) * speed)       //Decrease numerator to increase speed.
}

var delay_time = 10000 / (Math.floor(array_size / 10) * speed)        //Decrease numerator to increase speed.
console.info('delay time: ' + delay_time)
var increment_delay = 0                                               //This is updated over every div change so that visualization is visible.

function div_update(cont, height, color) {
        let margin_size = 0.1
        let width_size = 100 / array_size - 2 * margin_size

        window.setTimeout(() => {
                cont.style = `margin: ${margin_size}%; width: ${width_size}%; height: ${height}%; background-color: ${color}`
        }, increment_delay += delay_time)
}

function show(message) {
        var alertBox = document.getElementById('msg-container')
        document.getElementById("msg").innerText = message
        alertBox.style.display = "block"
}

function hide() {
        var alertBox = document.getElementById('msg-container')
        alertBox.style.display = "none"
}

function enable_buttons(complexity) {
        window.setTimeout(function () {
                show(complexity)
                inp_as.disabled = false
                inp_as.style = "background-color: blue"
                inp_aspeed.disabled = false
                inp_aspeed.style = "background-color: blue"
                start_exec.disabled = false
                start_exec.style = "background-color: springgreen"
                start_exec.style.cursor = "pointer"
                inp_as.style.cursor = "pointer"
                inp_aspeed.style.cursor = "pointer"
        }, increment_delay += delay_time)
}

