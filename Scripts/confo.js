const container = document.querySelector('.container-fluid');
const starsDiv = document.querySelector('#stars');
const canvas = document.createElement('canvas');
canvas.width = container.offsetWidth;
canvas.height = container.offsetHeight;
container.appendChild(canvas);
const ctx = canvas.getContext('2d');
let stars = [];
class Star {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.radius = 2;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }
    update() {
        this.y--;
        this.draw();
    }
}
function generateStar(x) {
    let color;
    let random = Math.random();
    if (random < 0.5) {
        color = '#ff0';
    } else {
        color = '#000';
    }
    let star = new Star(x, canvas.height, color);
    stars.push(star);
}
function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    stars.forEach((star, index) => {
        star.update();
        if (star.y <= 0) {
            stars.splice(index, 1);
        }
    });
    let x = Math.floor(Math.random() * (canvas.width + 1));
    generateStar(x);
    requestAnimationFrame(animate);
}
animate();


// 


let re_time = document.querySelector("#re-time");

let i = 15;



let set = setInterval(() => {
    i--;
    re_time.innerText = i;
    if (i == 0) {
        window.location.href = "./index.html";
        clearInterval(set);
    }
}, 1000);
