let currentIndex = 0;
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
const carouselImages = document.querySelector('.carousel-images');

// Função para atualizar a posição do carrossel
function moveCarousel() {
  const translateXValue = -(currentIndex * 300); // Desloca 300px por imagem
  carouselImages.style.transform = `translateX(${translateXValue}px)`;
}

// Função para mover para a próxima imagem
function nextImage() {
  currentIndex++;
  if (currentIndex === totalImages - 1) {
    setTimeout(() => {
      currentIndex = 0; // Retorna ao início quando chegar ao final
      moveCarousel();
    }, 1500); // Aguarda o tempo da transição para redefinir o índice
  } else {
    moveCarousel();
  }
}

// Função para mover para a imagem anterior
function prevImage() {
  currentIndex--;
  if (currentIndex < 0) {
    setTimeout(() => {
      currentIndex = totalImages - 2; // Vai para a penúltima imagem
      moveCarousel();
    }, 1500); // Aguarda o tempo da transição para redefinir o índice
  } else {
    moveCarousel();
  }
}

// Evento para o botão da direita
document.querySelector('.carousel-btn.right').addEventListener('click', nextImage);

// Evento para o botão da esquerda
document.querySelector('.carousel-btn.left').addEventListener('click', prevImage);
