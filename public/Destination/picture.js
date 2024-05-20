const images = document.querySelectorAll('.carousel-inner img');
let currentIndex = 0;

function showImage(index, direction) {
  images[currentIndex].classList.remove('active');
  images[currentIndex].classList.remove('slide-left', 'slide-right');

  if (direction === 'left') {
    images[index].classList.add('slide-left');
  } else if (direction === 'right') {
    images[index].classList.add('slide-right');
  }

  setTimeout(() => {
    images[index].classList.add('active');
  }, 0);

  currentIndex = index;
}

function nextImage() {
  const nextIndex = (currentIndex + 1) % images.length;
  showImage(nextIndex, 'left');
}

function previousImage() {
  const prevIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(prevIndex, 'right');
}
