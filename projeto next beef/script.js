// ================= SELEÇÃO DE ELEMENTOS =================

// Seleciona o botão do menu (hambúrguer)
const toggle = document.getElementById('menu-toggle');

// Seleciona o menu de navegação
const nav = document.getElementById('nav');

// Seleciona o header (para efeito de scroll)
const header = document.querySelector('.header');


// ================= MENU MOBILE =================

// Adiciona evento de clique no botão hamburguer
toggle.addEventListener('click', () => {

  // Alterna a classe 'active' no menu
  // Se tiver -> remove
  // Se não tiver -> adiciona
  nav.classList.toggle('active');

});


// ================= EFEITO AO ROLAR A PÁGINA =================

// Escuta o evento de scroll da janela
window.addEventListener('scroll', () => {

  // Verifica se o usuário rolou mais de 50px
  if (window.scrollY > 50) {

    // Adiciona a classe que altera o estilo do header
    header.classList.add('scrolled');

  } else {

    // Remove a classe quando volta ao topo
    header.classList.remove('scrolled');

  }

});


// ================= (EXTRA PROFISSIONAL) FECHAR MENU AO CLICAR =================

// Seleciona todos os links do menu
const navLinks = document.querySelectorAll('.nav a');

// Para cada link...
navLinks.forEach(link => {

  // Adiciona evento de clique
  link.addEventListener('click', () => {

    // Fecha o menu (remove a classe active)
    nav.classList.remove('active');

  });

});
// ================= SCROLL SUAVE PERSONALIZADO =================

function scrollSuave(target, duration) {
  const targetPosition = target.offsetTop - 100; // ajuste do header
  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;

  let startTime = null;

  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;

    const run = ease(timeElapsed, startPosition, distance, duration);
    window.scrollTo(0, run);

    if (timeElapsed < duration) requestAnimationFrame(animation);
  }

 function ease(t, b, c, d) {
  return c * (t / d) + b; // movimento linear (sem delay)
}

  requestAnimationFrame(animation);
}


// Aplica nos links do menu
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener('click', function(e) {

    e.preventDefault();

    const target = document.querySelector(this.getAttribute('href'));

    if (target) {
      scrollSuave(target, 1170); // controla velocidade aqui
    }

  });
});