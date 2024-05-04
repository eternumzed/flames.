// DECLARATION
const coverBtnEl = document.getElementById("cover-btn");
const coverPadEl = document.getElementById("cover-pad");
const mainPadEl = document.getElementById("main-pad");
const marriageAudio = "https://eternumzed.github.io/flames./audio/Shane-Filan-Beautiful-In-White-Piano-Cover-with-Strings-with-Lyrics-PIANO-SHEET_sBiSqt8k3U4_00_00_42_00_01_18_part (mp3cut.net).mp3";
const loversAudio = "https://eternumzed.github.io/flames./audio/YOU-I-by-chance-J-R-A_vojI8HafjZE_00_01_07_00_01_40_part (mp3cut.net).mp3";
const enemiesAudio = "https://eternumzed.github.io/flames./audio/Kamikazee-Martyr-Nyebera-Official-Lyric-Video_XHzr2PlVB3k_00_01_40_00_02_13_part (mp3cut.net).mp3";
const admirerAduio = "https://eternumzed.github.io/flames./audio/Paligaw-Ligaw-Tingin_0UjPKQ_9hfA_00_01_05_00_01_45_part (mp3cut.net).mp3";
const friendsAudio = "https://eternumzed.github.io/flames./audio/Bakit-Di-Totohanin-Carol-Banawa-Lyrics_bBfVYxiDx9o_00_01_10_00_01_40_part (mp3cut.net).mp3";
const siblingsAudio = "https://eternumzed.github.io/flames./audio/Autotelic-Laro-Lyric-Video_9uLnj8oRMUU_00_01_35_00_02_00_part (mp3cut.net).mp3"
const result = localStorage.getItem("result");
const playerEl = document.getElementById("player");
const pauseEl = document.getElementById("pause");
const playEl = document.getElementById("play");
const shareEl = document.querySelector(".share-link");
window.onload = () => {
    const link = `https://eternumzed.github.io/flames./`;
    const fb = document.getElementById("share-link");
    fb.href = `https://www.facebook.com/share.php?u=${link}`;
}
let audioName;
let audio = new Audio();
let isPlaying = false;

coverBtnEl.addEventListener("click", uncover);
playEl.addEventListener("click", music);
pauseEl.addEventListener("click", pauseMusic);

// HIDE RESULT COVER
function uncover() {
    coverPadEl.classList.toggle("fall");
    playerEl.classList.toggle("close");
    playEl.classList.toggle("close");
    pauseEl.classList.toggle("close");
    if (!isPlaying) {
        playEl.classList.toggle("close");
        pauseEl.classList.toggle("close");
        music();
        isPlaying = true;
    } else {
        pauseMusic();
        playEl.classList.toggle("close");
        pauseEl.classList.toggle("close");
        isPlaying = false;
    }
}

// PLAY SOUND
function playSound(audioName) {
    playEl.classList.toggle("close");
    pauseEl.classList.toggle("close");
    audio = new Audio(audioName);
    audio.loop = true;
    audio.volume = 0.5;
    audio.play();
}

// PAUSE SOUND
function pauseMusic() {
    playEl.classList.toggle("close");
    pauseEl.classList.toggle("close");
    audio.loop = false;
    audio.pause();
}

// SWITCH STATEMENT FOR MUSIC SELECTION
function music() {
    switch (result) {
        case "F":
            audioName = friendsAudio;
            break;
        case "L":
            audioName = loversAudio;
            break;
        case "A":
            audioName = admirerAduio;
            break;
        case "M":
            audioName = marriageAudio;
            break;
        case "E":
            audioName = enemiesAudio;
            break;
        case "S":
            audioName = siblingsAudio;
            break;
        default:
            audioName = marriageAudio;
            break;
    }
    playSound(audioName);
}

// PLAYER HIDE/SHOW 
window.addEventListener("mousemove", function (e) {
    const nowPlayingEl = this.document.getElementById("nowPlaying");
    let minX = 1200;
    let maxX = 1660;
    let minY = 550;
    let maxY = 1000;
    if ((e.x > minX && e.x < maxX) && (e.y > minY && e.y < maxY)) {
        playerEl.classList.add("player--float");
        nowPlayingEl.textContent = "now playing";
    } else {
        playerEl.classList.remove("player--float");
        nowPlayingEl.textContent = "🎵";
    }
})

// flames. ANIMATION
const fEl = document.getElementById("f");
const lEl = document.getElementById("l");
const aEl = document.getElementById("a");
const mEl = document.getElementById("m");
const eEl = document.getElementById("e");
const sEl = document.getElementById("s");
const pEl = document.getElementById("period");
const splashEl = document.getElementById("splashscreen");

const scaleAnimationA = [

    { transform: "scale(1) translateY(0%)", offset: 0 },
    { transform: "scale(0.9, 1.2) rotate(2deg) translateY(15%)", offset: 0.1 },
    { transform: "scale(1)  translateY(0%) rotate(0deg)", offset: 1 },
];
const scaleAnimationB = [
    { transform: "scale(1) translateY(0%) ", offset: 0 },
    { transform: "scale(0.9, 1.2) rotate(-2deg) translateY(-15%)", offset: 0.1 },
    { transform: "scale(1)  translateY(0%) rotate(0deg)", offset: 1 },
];

const scaleDuration = {
    duration: 3000,
    iterations: 3,
};

const pAnimation = [
    {
        transform: "translateX(0%) translateY(0%)", opacity: 0, offset: 0
    },

    {
        transform: "translateX(-120%) translateY(-50%)", opacity: 1, offset: 0.12
    },

    {
        transform: "translateX(-260%) translateY(20%)", offset: 0.24
    },

    {
        transform: "translateX(-450%) translateY(-50%)", offset: 0.48
    },

    {
        transform: "translateX(-650%) translateY(20%)", opacity: 1, offset: 0.60
    },

    {
        transform: "translateX(-780%) translateY(-70%)", offset: 0.72
    },

    {
        transform: "translateX(-890%) translateY(20%)", offset: 0.84
    },

    {
        transform: "translateX(-1500%) translateY(-50%)", opacity: 0.2, offset: 1
    },
];

const pDuration = {
    duration: 3000,
    iterations: 4,
    fill: "forwards",
}

// TRIGGERS THE ANIMATION ONCE DOM IS LOADED
document.addEventListener("DOMContentLoaded", (event) => {
    splashAnimation()
})

function splashAnimation() {

    setTimeout(() => {
        pEl.animate(pAnimation, pDuration);


        setTimeout(() => {
            sEl.animate(scaleAnimationA, scaleDuration);

            resultColor();
        }, 200);
        setTimeout(() => {
            eEl.animate(scaleAnimationB, scaleDuration);
            resultColor()
        }, 600);
        setTimeout(() => {
            mEl.animate(scaleAnimationA, scaleDuration);
            resultColor()
        }, 1000);
        setTimeout(() => {
            aEl.animate(scaleAnimationB, scaleDuration);
            resultColor()
        }, 1550);
        setTimeout(() => {
            lEl.animate(scaleAnimationA, scaleDuration);
            resultColor()
        }, 2000);
        setTimeout(() => {
            fEl.animate(scaleAnimationB, scaleDuration);
            resultColor()
        }, 2400);

    });
    setTimeout(() => {
        splashEl.classList.add("fade-out");
    }, 10000)
}

// LETTER COLOR TIMING
function resultColor() {
    switch (result) {
        case "F": return setTimeout(() => {
            fEl.style.color = "var(--dark-purple)";
            fEl.classList.toggle("letter-blink");
        }, 5200);
        case "L": return setTimeout(() => {
            lEl.style.color = "var(--pastel)";
            lEl.classList.toggle("letter-blink");
        }, 4900);
        case "A": return setTimeout(() => {
            aEl.style.color = "var(--dark-purple)";
            aEl.classList.toggle("letter-blink");
        }, 4500);
        case "M": return setTimeout(() => {
            mEl.style.color = "var(--pastel)";
            mEl.classList.toggle("letter-blink");
        }, 3850);
        case "E": return setTimeout(() => {
            eEl.style.color = "var(--dark-purple)";
            eEl.classList.toggle("letter-blink");
        }, 3580);
        case "S": return setTimeout(() => {
            sEl.style.color = "var(--pastel)";
            sEl.classList.toggle("letter-blink");
        }, 3000);
        default:
            console.log("Error!");
            break;
    }
}


