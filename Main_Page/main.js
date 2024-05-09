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
const ibuKota = 'Pangkalpinang'
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/city?name=' + ibuKota,
    headers: { 'X-Api-Key': 'RiItGqqcVzAEEqp3DXE0dg==qROxANZdhJzXDNjj'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
        document.getElementById('ibu').innerHTML = `${result[0].name}`;
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

//API Youtube Video
let API_KEY = "AIzaSyDKqZym98vyfQ_2tvmUtQV5xJAoTpDDUn0";

let VIDEO_ID = "uXxUCRvRe14";

let tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
let firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

//API Youtube Video
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
const city = "jakarta";
$.ajax({
  method: "GET",
  url: "https://api.api-ninjas.com/v1/worldtime?city=" + city,
  headers: { "X-Api-Key": "RiItGqqcVzAEEqp3DXE0dg==qROxANZdhJzXDNjj" },
  contentType: "application/json",
  success: function (result) {
        console.log(result);
    $("#date").text(result.date);
    },
    error: function ajaxError(jqXHR) {
    console.error("Error: ", jqXHR.responseText);
  },
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

//Toggle Theme
const themeSwitch = document.querySelector(
  '.theme-switch input[type="checkbox"]'
);
themeSwitch.addEventListener("change", function (event) {
  if (event.target.checked) {
    document.body.classList.replace("light-mode", "dark-mode");
    let kontenElements = document.querySelectorAll(".konten");
    kontenElements.forEach(function (element) {
      element.classList.replace("konten-putih", "konten-hitam");
    });
  } else {
    document.body.classList.replace("dark-mode", "light-mode");
    let kontenElements = document.querySelectorAll(".konten");
    kontenElements.forEach(function (element) {
      element.classList.replace("konten-hitam", "konten-putih");
    });
  }
});

