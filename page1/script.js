const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev-button')
const btnNext = document.getElementById('next-button')
const images = document.querySelector('.box-images')

let currentSlide = 0

function hideSlider(){
    slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
    slider[currentSlide].classList.add('on')
}

function nextSlider(){
    hideSlider()

    if(currentSlide == slider.length - 1){
        currentSlide = 0
    }
    else{
        currentSlide++
    }
    showSlider()
}

function prevSlider(){
    hideSlider()

    if(currentSlide == 0){
        currentSlide = slider.length - 1
    }
    else{
        currentSlide--
    }
    showSlider()
}
btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


let btns = [btnNext, btnPrev]
btns.forEach(btn => {
    btn.addEventListener('click', () => {
        images.style.transform = 'scale(1.05)'
        setTimeout(() => {
            images.style.transform = 'scale(1)' 
        }, 300)
    })
})






let reservaFeita = false
let reservaInfo = ''
document.getElementById('reservar-btn').addEventListener('click', function() {
    if (!reservaFeita) {
        const nome = prompt(`Você gostaria de fazer uma reserva em qual nome?`)
        const data = prompt(`Ótimo, ${nome}! Que dia você gostaria reservar? (DD/MM/YYYY)`)
        const hora = prompt(`Horário de Funcionamento: Segunda a Domingo, das 12h às 23h. Qual o melhor horário para sua reserva? (HH:MM)`)
        const numeroPessoas = prompt(`Gostaria de uma mesa para quantas pessoas?`)

        reservaInfo = `Reserva confirmada!\nNome: ${nome}\nData: ${data}\nHora: ${hora}\nNúmero de pessoas: ${numeroPessoas}`
        reservaFeita = true
        alert(reservaInfo)
    } 
    else {
        alert("Você já fez uma reserva:\n" + reservaInfo)
    }
})



window.addEventListener('beforeunload', function() {
    window.scrollTo(0, 0)
})