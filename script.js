// script.js

// Mostrar el contenido y ocultar el sobre
function openInvitation() {
  document.getElementById('intro').style.display = 'none';
  const main = document.getElementById('mainContent');
  const footer = document.getElementById('footer');

  main.classList.remove('hidden');
  main.classList.add('fade-in'); // esta línea agrega el efecto

  footer.classList.remove('hidden'); // ← mostrás el footer solo al abrir
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Animación al hacer scroll (íconos del camino)
const steps = document.querySelectorAll('.step');
window.addEventListener('scroll', () => {
  steps.forEach(step => {
    const rect = step.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      step.style.animationDelay = '0s';
      step.style.animationPlayState = 'running';
    }
  });
});

// Cuenta regresiva
const eventDate = new Date("June 27, 2026 10:00:00").getTime();

const daysEl = document.getElementById("days");
const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");

setInterval(() => {
  const now = new Date().getTime();
  const distance = eventDate - now;

  if (distance < 0) {
    document.querySelector(".contador").innerHTML = "¡Ya llegó el día del Bautizo!";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  daysEl.textContent = days;
  hoursEl.textContent = hours;
  minutesEl.textContent = minutes;
  secondsEl.textContent = seconds;
}, 1000);


// Confirmación de asistencia (sin backend)



// Mostrar secciones con animación al hacer scroll
document.addEventListener("DOMContentLoaded", function () {
  const faders = document.querySelectorAll('.fade-in-section');

  const appearOptions = {
    threshold: 0.1
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});



// Mostrar animación de los íconos al hacer scroll
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    } else {
      entry.target.classList.remove('visible'); // 🔁 Quita al salir
    }
  });
}, {
  threshold: 0.5
});

timelineItems.forEach(item => observer.observe(item));

// Control de música
let isPlaying = false; // empieza silenciada

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  const btn = document.getElementById("musicToggle");

  if (isPlaying) {
    music.pause();
    btn.textContent = "🔇";
    btn.style.transform = "rotate(-20deg)";
  } else {
    music.play();
    btn.textContent = "🔊";
    btn.style.transform = "rotate(0deg)";
  }

  isPlaying = !isPlaying;
}
