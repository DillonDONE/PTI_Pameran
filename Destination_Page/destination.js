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

setInterval(nextSlide, 2850);

//API List
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
fetch(
  "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyCQu3hOsmx94omGUHSdWMGr6-DtjYNKDA0"
)
  .then((response) => response.json())
  .then((fontsData) => {
    const fonts = fontsData.items.map((item) => item.family);
    const selectedFont = fonts[0];
    document.getElementById("judul").style.fontFamily = selectedFont;
  })
  .catch((error) => {
    console.error("Error fetching fonts:", error);
  });

//End of API List
