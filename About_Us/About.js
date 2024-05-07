var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  gragCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slid');

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

setInterval(nextSlide, 3000); 


//API List
//Data Provinsi Wilayah
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

//Youtube
let API_KEY = 'AIzaSyDKqZym98vyfQ_2tvmUtQV5xJAoTpDDUn0';

let VIDEO_ID = 'iEwqEuyKLHs';

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '300',
        width: '500',
        videoId: VIDEO_ID,
        playerlets: {
            'autoplay': 1,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'loop': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    event.target.playVideo();
}

//End of API List