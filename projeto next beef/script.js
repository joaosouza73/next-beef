// ================= ELEMENTOS =================

// Botão hamburguer
const toggle = document.getElementById('menu-toggle');

// Menu navegação
const nav = document.getElementById('nav');

// Header
const header = document.querySelector('.header');

// Links do menu
const navLinks = document.querySelectorAll('.nav a');


// ================= MENU MOBILE =================

// Abre / fecha menu mobile
toggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});


// ================= HEADER AO ROLAR =================

window.addEventListener('scroll', () => {

  // Adiciona classe quando rolar
  header.classList.toggle('scrolled', window.scrollY > 50);

});


// ================= FECHAR MENU AO CLICAR =================

navLinks.forEach(link => {

  link.addEventListener('click', () => {
    nav.classList.remove('active');
  });

});


// ================= SCROLL SUAVE =================

function scrollSuave(target, duration = 1800) {

  const targetPosition = target.offsetTop - 100;
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  let startTime = null;

  function animation(currentTime) {

    if (!startTime) startTime = currentTime;

    const timeElapsed = currentTime - startTime;

    // movimento contínuo
    const run = linear(timeElapsed, startPosition, distance, duration);

    window.scrollTo(0, run);

    if (timeElapsed < duration) {
      requestAnimationFrame(animation);
    }

  }

  // velocidade constante
  function linear(t, b, c, d) {
    return c * (t / d) + b;
  }

  requestAnimationFrame(animation);
}


  // Fórmula linear
  function ease(t, b, c, d) {

  t /= d / 2;

  if (t < 1) {
    return c / 2 * t * t + b;
  }

  t--;

  return -c / 2 * (t * (t - 2) - 1) + b;
}

  requestAnimationFrame(animation);



// ================= LINKS COM SCROLL =================

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      scrollSuave(target, 100);
    }

  });

});