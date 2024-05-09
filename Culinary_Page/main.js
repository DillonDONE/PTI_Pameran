
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
//API Provinsi
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

let API_KEY = 'AIzaSyDKqZym98vyfQ_2tvmUtQV5xJAoTpDDUn0';

let VIDEO_ID = 'uXxUCRvRe14';

let tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//API Youtube Video
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

//Toggle Theme
const themeSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
themeSwitch.addEventListener('change', function(event) {
  if (event.target.checked) {
    document.body.classList.replace('light-mode', 'dark-mode');
    document.getElementById('makanan').classList.replace('menu_card_lightmode', 'menu_card_darkmode');
  } else {
    document.body.classList.replace('dark-mode', 'light-mode');
    document.getElementById('makanan').classList.replace('menu_card_darkmode', 'menu_card_lightmode');
  }
});