// Capturamos todas las imágenes con clase .product-img
document.querySelectorAll('.product-img').forEach(img => {
  img.addEventListener('click', () => {
    const modalImg = document.getElementById('modalImg');
    modalImg.src = img.src;
    // Iniciamos y mostramos el modal de Bootstrap
    const imageModal = new bootstrap.Modal(document.getElementById('imageModal'));
    imageModal.show();
  });
});



const slides = document.querySelectorAll('.hero-slide');
let idx = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  slides[i].classList.add('active');
}

document.getElementById('heroNext').addEventListener('click', () => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
});

document.getElementById('heroPrev').addEventListener('click', () => {
  idx = (idx - 1 + slides.length) % slides.length;
  showSlide(idx);
});

// Autoplay cada 5 segundos
setInterval(() => {
  idx = (idx + 1) % slides.length;
  showSlide(idx);
}, 5000);

const nav = document.getElementById('mainNav');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) nav.classList.add('scrolled');
  else nav.classList.remove('scrolled');
});

