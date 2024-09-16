const carrossel1 = document.querySelector('.primeiro');
const carrossel2 = document.querySelector('.segundo');
const carrossel3 = document.querySelector('.terceiro');

setInterval(nextImage1, 5000);
setInterval(nextImage2, 8000);
setInterval(nextImage3, 13000);

let contadorCarrosel1 = 0;
let contadorCarrosel2 = 0;
let contadorCarrosel3 = 0;

function nextImage1() {
  contadorCarrosel1++;
  if (contadorCarrosel1 > 4) {
    contadorCarrosel1 = 0;
    carrossel1.style.marginLeft = "1.5%";
    return;
  }
  let vezes2 = contadorCarrosel1 * 20;
  carrossel1.style.marginLeft = '-' + vezes2 + '%';
}

function nextImage2() {
  contadorCarrosel2++;
  if (contadorCarrosel2 > 4) {
    contadorCarrosel2 = 0;
    carrossel2.style.marginLeft = "1.5%";
    return;
  }
  let vezes2 = contadorCarrosel2 * 20;
  carrossel2.style.marginLeft = '-' + vezes2 + '%';
}

function nextImage3() {
  contadorCarrosel3++;
  if (contadorCarrosel3 > 4) {
    contadorCarrosel3 = 0;
    carrossel3.style.marginLeft = "1.5%";
    return;
  }
  let vezes2 = contadorCarrosel3 * 20;
  carrossel3.style.marginLeft = '-' + vezes2 + '%';
}


window.addEventListener('scroll', function () {
  const navbar = document.querySelector('.fundo');
  if (window.scrollY > 15) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});
