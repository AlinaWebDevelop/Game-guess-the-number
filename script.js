//Moving letters

let text = "Hello! Lets play a game :)";
let i =0;
let speed = 100;

function type() {
    if (i< text.length) {
    document.querySelector('.hello').textContent +=
    text.charAt(i);
    i++;
    setTimeout(type, speed);
    
    }
}

type();

// Audio button

const audioBtn = document.querySelector('.xmasSong');
    audioBtn.addEventListener('click', function() {
    document.querySelector('#myAudio').play();
})

//Game

const button = document.querySelector('#btn');
const input = document.querySelector('#inputField');
const answer =Math.floor (Math.random()*20)+1;

// Добавляем клик Enter

input.addEventListener ('keypress', (e) => {
    if (e.keyCode === 13)
    play();
})


button.addEventListener("click", play);

function play () {
    const user = document.querySelector ('#inputField').value;

    if (user < 1 || user > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Упс!',
            text: 'Введи число от 1 до 20',
        })
    }

    else if (isNaN (user)) {
        Swal.fire({
            icon: 'error',
            title: 'Упс!',
            text: 'Введи число',
        })
    }

    else {
        if (user < answer) {
            Swal.fire({
                title: 'Не угадал!',
                text: 'Введи число больше',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
        }

        else if (user > answer) {
        Swal.fire({
            title: 'Не угадал!',
            text: 'Введи число меньше',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
    }

    else {
        Swal.fire({
            title: 'ПОБЕДА!!!',
            imageUrl: 'https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=971&q=80',
            imageWidth: 350,
            imageHeight: 400,
            imageAlt: 'Custom image',
        })
    }

    }

}








