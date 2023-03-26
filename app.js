const circles = document.querySelectorAll(".circle");
const colors = ["red", "green", "blue", "yellow", "purple"];
let currentIndex = 0;

setInterval(() => {
  circles.forEach(circle => {
    circle.classList.remove(colors[currentIndex]);
  });
  
  currentIndex = (currentIndex + 1) % colors.length;
  
  circles.forEach(circle => {
    circle.classList.add(colors[currentIndex]);
  });
}, 1000);


function changeBackground(){
    let r= Math.floor(Math.random() * 256);
    let g=Math.floor(Math.random() * 256);
    let b=Math.floor(Math.random() * 256);
  
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
  };
