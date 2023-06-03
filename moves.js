// Selecionar a imagem com a classe "clickMe"
const clickImg = document.querySelector(".clickMe");
const logo = document.querySelector(".logotipo")

// Selecionar a imagem com a classe "nome"
const nomeImg = document.querySelector(".nome");

// Selecionar o id do audio
const myAudio = document.querySelector('#myAudio');
const myPop = document.querySelector('#myPop');

clickImg.addEventListener("click", () => {

    myPop.play();
    clickImg.classList.add('slide-right');
    setTimeout(() => {
        clickImg.style.opacity = "0";
          }, 2000);
    setTimeout(() => {
    nomeImg.style.display = "flex";
    clickImg.style.display = "none";
      }, 3000);
    setTimeout(() => {
    myAudio.play();
    nomeImg.style.opacity = "1"; 

    setTimeout(() => {
      window.location.href = "/Users/joaoartursantos/Desktop/myWebPage/front.html";
  }, 4100);
}, 4100);
});

