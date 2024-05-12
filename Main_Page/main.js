//Slide photo
const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");

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

fetch("https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json")
  .then((response) => response.json())
  .then((provinces) => {
    provinsi = provinces;
    console.log(provinces);
    let ganti = document.getElementById("judul");
    let nama = provinsi[8].name;
    ganti.innerHTML = `${nama}`;
  });

//API Ibu Kota
let ibuKota;

fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/19.json`)
  .then((response) => response.json())
  .then((capital) => {
  ibuKota = capital;
  console.log(capital);
  let ganti = document.getElementById("ibu");
  let nama = ibuKota[6].name;
  ganti.innerHTML = `${nama}`;
});


//API Youtube Video
let API_KEY = "AIzaSyDKqZym98vyfQ_2tvmUtQV5xJAoTpDDUn0";

let VIDEO_ID = "uXxUCRvRe14";

let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "300",
    width: "500",
    videoId: VIDEO_ID,
    playerlets: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      loop: 1,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  event.target.playVideo();
}

//Time API
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

//Font API
fetch("https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCQu3hOsmx94omGUHSdWMGr6-DtjYNKDA0")
  .then((response) => response.json())
  .then((fontsData) => {
    const fonts = fontsData.items.map((item) => item.family);
    const selectedFont = fonts[0]; 
    document.getElementById('judul').style.fontFamily = selectedFont;
  })
  .catch((error) => {
    console.error("Error fetching fonts:", error);
});

//End of API List