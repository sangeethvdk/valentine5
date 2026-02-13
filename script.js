let musicPlayed = false;
let currentImageIndex = 0;

const images = [
"img1.jpg","img2.jpg","img3.jpg","img4.jpg","img5.jpg",
"img6.jpg","img7.jpg","img8.jpg","img9.jpg","img10.jpg"
];

const captions = [
"The day everything started ❤️",
"Your smile changed my world 💕",
"Every moment feels magical ✨",
"Holding your hand feels like home 🤍",
"Three years of beautiful memories 💖",
"Your laugh is my favorite sound 🎶",
"You are my safe place 🌸",
"Every journey with you is special 🚗",
"Forever starts with you 💍",
"Still choosing you every single day ❤️"
];

function goToPage(num){
document.querySelectorAll(".page").forEach(p=>p.classList.remove("active"));
document.getElementById("page"+num).classList.add("active");

if(num===2 && !musicPlayed){
let music=document.getElementById("bgMusic");
music.volume=0;
music.play();
let fade=setInterval(()=>{
if(music.volume<1) music.volume+=0.05;
else clearInterval(fade);
},200);
musicPlayed=true;
}

if(num===3){
setTimeout(()=>{
document.getElementById("finalReveal").classList.add("show");
},10000);
}
}

function openImage(index){
currentImageIndex=index;
document.getElementById("imageModal").style.display="block";
document.getElementById("modalImage").src=images[index];
document.getElementById("modalCaption").innerText=captions[index];
}

function changeImage(direction){
currentImageIndex+=direction;
if(currentImageIndex<0) currentImageIndex=images.length-1;
if(currentImageIndex>=images.length) currentImageIndex=0;
openImage(currentImageIndex);
}

function closeImage(){
document.getElementById("imageModal").style.display="none";
}
