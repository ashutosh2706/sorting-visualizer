const toggle_btn = document.getElementById('toggle-theme')
const body = document.querySelector('body')

toggle_btn.addEventListener('click', ()=>{
    toggle_btn.classList.toggle('bi-moon-fill')
    if(toggle_btn.classList.toggle('bi-brightness-high-fill')) {
        body.style.background = 'white'
        body.style.color = 'black'
        body.style.transition = '2s'
    } else {
        body.style.background = 'black'
        body.style.color = 'white'
        body.style.transition = '2s'
    }
    
})