function toggleMode() {
  const html = document.documentElement; /* Dentro do document (tela) eu acesso o meu html através do documentElement  */

  /* mesma coisa que o código que está em cima */
  /* explicando: dentro da função toggle, faz algo semelhante ao código a cima */
  html.classList.toggle('light');
  
  // pegar a tag img
  const img = document.querySelector("#profile img");
  
  //substituir a imagem
  if(html.classList.contains('light')) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/avatar-light.png');
  } else {
    //se tiver light mode, manter a imagem normal
    img.setAttribute('src', './assets/Avatar.png');
  }




}