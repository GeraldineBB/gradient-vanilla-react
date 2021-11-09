// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import store from './store';

console.log(store); 

// le store est un objet qui expose 3 fonctions principales:
// 1. getState va permttre d'accéder en lecture à l'état courant du state
const stateFromStore = store.getState();
console.log(stateFromStore); 

// 2. dispatch : permet d'emettre une intention en direction du store
// à charge pour le store (plus particulièrement pour reducer de traduire cette intention en modification du state))


// == State
// const state = {
//   firstColor: '#e367a4',
//   lastColor: '#48b1f3',
//   direction: '90deg',
//   nbColors: 0,
// };

// == Rendu dans le DOM
function renderNbColors() {
  // const { nbColors } = state;
  // à chaque fois que je veux accéder au state > je fais getState
  // dès qu'on a besoin de connaitre la version courante du state, on la demande au store grâce 
  // à cette méthode getState
  const { nbColors } = store.getState();


  document.getElementById('nbColors').innerHTML = `
    ${nbColors} couleur(s) générée(s)
  `;
}
function renderGradient() {
  const { direction, firstColor, lastColor } = store.getState();

  document.getElementById('gradient').style.background = `
    linear-gradient(${direction},${firstColor},${lastColor})
  `;
}
function renderColors() {
  const { firstColor, lastColor } = store.getState();

  const firstSpan = generateSpanColor(firstColor);
  const lastSpan = generateSpanColor(lastColor);

  const result = `${firstSpan} - ${lastSpan}`;

  document.getElementById('colors').innerHTML = result;
}

// == Initialisation
// je m'appuyer sur les données initiales pour afficher le rendu initial
renderNbColors();
renderGradient();
renderColors();

// == Controls
// bouton Random All : on ajoute un écouteur d'event
document.getElementById('randAll')
  .addEventListener('click', () => {
    // debug
    console.log('Random all colors');
    // data
    state.nbColors += 2;
    state.firstColor = randomHexColor();
    state.lastColor = randomHexColor();
    // ui
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    state.nbColors += 1;
    state.firstColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    state.nbColors += 1;
    state.lastColor = randomHexColor();
    renderNbColors();
    renderGradient();
    renderColors();
  });

document.getElementById('toLeft')
  .addEventListener('click', () => {
    // un des 3 principes de Redux : on ne modifie jamais directement le state 
    // state.direction = '270deg'; NON
    // on va emettre une intention en direction du store :
    // "store, j'aimerai changer la direction pour aller à gauche"
    // on va utiliser la fonction dispatch : on envoie un objet au store
    // la demande doit être dans un objet 
    // une intention = un objet action qui doit contenir une propriété type
    store.dispatch({ type : 'CHANGE_DIRECTION_TO_LEFT' });

    renderGradient();
    // renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch({type : 'CHANGE_DIRECTION_TO_RIGHT'}); 
    renderGradient();
    // renderColors();
  });
