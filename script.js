const crosshair = document.querySelector('.cursor')
const target1 = document.querySelector('.target1')
const target2 = document.querySelector('.target2')
const target3 = document.querySelector('.target3')
const scoreText = document.querySelector('.score')
const timerText = document.querySelector('.timer')
const highscoreText = document.querySelector('.highscore')
const playbutton = document.querySelector('.menupage .playbtn')
const damage = document.querySelector('.damage')
const shoot = document.querySelector('.hammer-sound')


// variables
var score = 0;
var timeLeft = 60;
var highscore = 0;

//
document.querySelector('.menupage').addEventListener('click', (e) => e.stopPropagation())

playbutton.addEventListener('click', () => {
    document.querySelector('.menupage').style.opacity = "0";
    setTimeout(() => {
        document.querySelector('.menupage').style.display = "none";
    }, 100)
    play()
})

// set time
/*
setInterval(() => {
    timer()
}, 1000)
*/
const play = () => {
    setInterval(() => {
        timer()
    }, 1000)
}

setInterval(() => {
    respawn1()
}, 3000)

setInterval(() => {
    respawn2()
}, 5000)

setInterval(() => {
    respawn3()
}, 7000)

// window loading
window.onload = () => {
    if (localStorage.getItem('highscore')) {
        highscore = localStorage.getItem('highscore')
        highscoreText.innerHTML = `Highscore ${highscore}`
    }

    scoreText.innerHTML = score;
    timerText.innerHTML = timeLeft;
    respawn()
}


// mouse movement
document.addEventListener('mousemove', (e) => {
    crosshair.style.left = `${e.clientX}px`
    crosshair.style.top = `${e.clientY}px`
})


// respawns
const respawn1 = () => {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)
    target1.style.top = `${top}px`
    target1.style.left = `${left}px`

}

const respawn2 = () => {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)
    target2.style.top = `${top}px`
    target2.style.left = `${left}px`

}

const respawn3 = () => {
    const top = Math.floor(Math.random() * window.innerHeight)
    const left = Math.floor(Math.random() * window.innerWidth)
    target3.style.top = `${top}px`
    target3.style.left = `${left}px`

}


// targets
target1.addEventListener('click', (e) => {
    e.stopPropagation();
    damage.currentTime = 0;
    damage.play()
    score += 1;
    scoreText.innerHTML = score;
    respawn1();
})
target2.addEventListener('click', (e) => {
    e.stopPropagation();
    damage.currentTime = 0;
    damage.play()
    score += 1;
    scoreText.innerHTML = score;
    respawn2();
})
target3.addEventListener('click', (e) => {
    e.stopPropagation();
    damage.currentTime = 0;
    damage.play()
    score += 1;
    scoreText.innerHTML = score;
    respawn3();
})

//time
const timer = () => {
    if (timeLeft === 0) {
        gameOver()
    }
    timeLeft -= 1;
    timerText.innerHTML = timeLeft;
}

//gameover
const gameOver = () => {
    alert(`GameOver \n You Score = ${score}`)
    location.reload();
    if (localStorage.getItem('highscore') < score) {
        localStorage.setItem('highscore', score)
        highscore = score;
        highscoreText.innerHTML = `Highscore ${highscore}`
    }

    score = 0;
    timeLeft = 60;
    scoreText.innerHTML = score;
    timerText.innerHTML = timeLeft;
}
// audio
document.addEventListener('click', () => {
    shoot.currentTime = 0;
    shoot.play()
})
