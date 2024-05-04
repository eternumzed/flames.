// FOR INDEX BACKGROUND ANIMATION
const elements = {
    f: document.getElementById("friends"),
    l: document.getElementById("lovers"),
    a: document.getElementById("affectionate"),
    m: document.getElementById("marriage"),
    e: document.getElementById("enemies"),
    s: document.getElementById("siblings")
};

function changePos() {
    Object.values(elements).forEach(element => {
        element.style.top = Math.floor(Math.random() * 90) + "%";
        element.style.left = Math.floor(Math.random() * 90) + "%";
    });
}

function close() {
    Object.values(elements).forEach(element => {
        element.classList.toggle('close');
    });
}

function rotate() {
    Object.values(elements).forEach(element => {
        element.style.transform = `rotate(${Math.floor(Math.random() * 360)}deg) translate(0px, 0px)`;
    });
}

setInterval(function () {
    changePos()
    rotate();
    close();
}, 2000);
