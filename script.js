const App = (() => {

const initCursor = () => {
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', e => {
cursor.style.left = e.clientX + 'px';
cursor.style.top = e.clientY + 'px';
});
};

const initNavbar = () => {
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
navbar.classList.toggle('scrolled', window.scrollY > 50);
}, {passive:true});
};

const initReveal = () => {
const observer = new IntersectionObserver(entries=>{
entries.forEach(entry=>{
if(entry.isIntersecting){
entry.target.classList.add('active');
}
});
},{threshold:0.2});

document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
};

const initHamburger = () => {
const burger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav-links');
burger.addEventListener('click',()=>{
nav.classList.toggle('active');
});
};

const initTyping = () => {
const text = "Técnico en Administración de Sistemas y Ciberseguridad.";
const el = document.getElementById('typing');
let i=0;
const type = () => {
if(i<text.length){
el.innerHTML += text.charAt(i);
i++;
setTimeout(type,40);
}
};
type();
};

const initParticles = () => {
const canvas = document.getElementById('particles');
const ctx = canvas.getContext('2d');

let particlesArray;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize',()=>{
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
init();
});

class Particle{
constructor(){
this.x=Math.random()*canvas.width;
this.y=Math.random()*canvas.height;
this.size=Math.random()*2;
this.speedX=Math.random()*0.5-0.25;
this.speedY=Math.random()*0.5-0.25;
}
update(){
this.x+=this.speedX;
this.y+=this.speedY;
if(this.x<0||this.x>canvas.width)this.speedX*=-1;
if(this.y<0||this.y>canvas.height)this.speedY*=-1;
}
draw(){
ctx.fillStyle='#00f0ff';
ctx.fillRect(this.x,this.y,this.size,this.size);
}
}

function init(){
particlesArray=[];
for(let i=0;i<120;i++){
particlesArray.push(new Particle());
}
}

function animate(){
ctx.clearRect(0,0,canvas.width,canvas.height);
particlesArray.forEach(p=>{
p.update();
p.draw();
});
requestAnimationFrame(animate);
}

init();
animate();
};

const initTilt = () => {
document.querySelectorAll('.tilt').forEach(card=>{
card.addEventListener('mousemove',e=>{
const rect = card.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const centerX = rect.width/2;
const centerY = rect.height/2;
const rotateX = ((y-centerY)/20);
const rotateY = ((centerX-x)/20);
card.style.transform=`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
card.addEventListener('mouseleave',()=>{
card.style.transform="rotateX(0) rotateY(0)";
});
});
};

const init = () => {
initCursor();
initNavbar();
initReveal();
initHamburger();
initTyping();
initParticles();
initTilt();
};

return {init};

})();

document.addEventListener('DOMContentLoaded', App.init);
