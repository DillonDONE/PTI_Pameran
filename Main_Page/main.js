const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');

let currentIndex = 0;
let slideWidth = slides[currentIndex].clientWidth;

function updateSlideWidth() {
  slideWidth = slides[currentIndex].clientWidth;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  updateSlideWidth(); 
  updateSlider();
}

function updateSlider() {
  const offset = -currentIndex * slideWidth;
  slider.style.transform = `translateX(${offset}px)`;
}

setInterval(nextSlide, 5000); 

//API List
let provinsi;

fetch('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
.then(response => response.json())
.then(provinces => {
    provinsi = provinces;
    console.log(provinsi);
    
    let ganti = document.getElementById('judul');
    let nama = provinsi[8].name;
    ganti.innerHTML = `${nama}`;
});


//End of API List