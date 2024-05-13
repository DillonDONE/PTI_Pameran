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

setInterval(nextSlide, 2000); 

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

let time;

fetch("http://worldtimeapi.org/api/ip")
  .then((response) => response.json())
  .then((waktu) => {
  time = waktu;
  console.log(time);
  let tgl = "";
  for(let x = 0; x < 10; x++){
    tgl += time.datetime[x];
  }
  document.getElementById('date').innerHTML = tgl;
});
