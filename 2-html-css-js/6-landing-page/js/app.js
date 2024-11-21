document.addEventListener("DOMContentLoaded", function () {
  const swiper = new Swiper(".swiper", {
    direction: "horizontal",
    loop: false,

    pagination: {
      el: ".swiper-pagination",
    },

    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowLeft") {
      swiper.slidePrev();
    } else if (event.key === "ArrowRight") {
      swiper.slideNext();
    }
  });

  const gameInput = document.getElementById("gameInput");

  gameInput.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      let searchGame = gameInput.value.trim().toUpperCase();

      switch (searchGame) {
        case "MARIO":
          swiper.slideTo(0);
          break;
        case "POKEMON":
          swiper.slideTo(1);
          break;
        case "ZELDA":
          swiper.slideTo(2);
          break;
        default:
          alert("Jogo não foi encontrado");
          break;
      }
    }
  });

  // Seleciona todos os botões que abrem o modal
  const buttons = document.querySelectorAll(".btn-modal");

  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      const modalId = button.getAttribute("data-target");
      const modal = document.querySelector(modalId);
      modal.style.display = "block";
    });
  });

  // Função para fechar os modais
  const closeButtons = document.querySelectorAll(".close");

  closeButtons.forEach((button) => {
    button.addEventListener("click", function () {
      const modal = button.closest(".modal");
      modal.style.display = "none";
    });
  });

  // Fecha o modal se o usuário clicar fora da área do modal
  window.addEventListener("click", function (event) {
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modal) => {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    });
  });
});
