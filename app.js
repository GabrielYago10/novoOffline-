function sortear() {
    let nipes = ['♥', '♦', '♣', '♠'];
    let faces = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    
    // Sorteio do índice do vetor
    let nipeSorteado = nipes[Math.floor(Math.random() * 4)];
    let faceSorteada = faces[Math.floor(Math.random() * 13)];

    // Determinar a cor com base no nipe sorteado
    let cor = (nipeSorteado === '♥' || nipeSorteado === '♦') ? '#ff0000' : '#000';

    // Renderizar o canto superior esquerdo da carta
    let supEsq = document.getElementById('supEsq');
    supEsq.innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;
    supEsq.style.color = cor;

    // Renderizar o centro da carta
    let cc = document.getElementById('centroCarta');
    if (faceSorteada === 'J') {
        cc.innerHTML = `<img src="./img/valete.png" alt="Valete">`;
    } else if (faceSorteada === 'Q') {
        cc.innerHTML = `<img src="./img/dama.png" alt="Dama">`;
    } else if (faceSorteada === 'K') {
        cc.innerHTML = `<img src="./img/rei.png" alt="Rei">`;
    } else {
        cc.innerHTML = `${nipeSorteado}`;
        cc.style.color = cor;
    }

    // Renderizar o canto inferior direito da carta
    let infDir = document.getElementById('infDir');
    infDir.innerHTML = `<div>${faceSorteada}</div> <div>${nipeSorteado}</div>`;
    infDir.style.color = cor;
}

// Registra o Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then((registration) => {
        console.log('Service Worker registrado com sucesso:', registration);
      })
      .catch((error) => {
        console.log('Falha ao registrar o Service Worker:', error);
      });
  });
}
