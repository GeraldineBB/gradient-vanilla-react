// == Imports
import { randomHexColor, generateSpanColor } from './utils';

import store from './store';

// on importe notre variable du type d'actions
import { changeDirection, CHANGE_DIRECTION_DEGREES } from './actions';

console.log(store); 

// le store est un objet qui expose 3 fonctions principales:
// 1. getState va permttre d'accéder en lecture à l'état courant du state
const stateFromStore = store.getState();
console.log(stateFromStore); 

// 2. dispatch : permet d'emettre une intention en direction du store
// à charge pour le store (plus particulièrement pour reducer de traduire cette intention en modification du state))

// 3. suscribe : permet d'aboner des fonctions aux modifications du state 
// permet de rafraichir et appeler toutes les fonctions de rendu 
// avec React pas besoin de ça 


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
  console.log('nouvelle execution renderColor');
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

//=== on va abonner nos fonctions de rendu aux mises à jour du state
// == On abonne nos fonctions de rendu aux mises à jour du state
store.subscribe(renderColors);
store.subscribe(renderGradient);
store.subscribe(renderNbColors);

// == Controls
// bouton Random All : on ajoute un écouteur d'event
document.getElementById('randAll')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_FIRST_COLOR', color: randomHexColor() });
    store.dispatch({ type: 'CHANGE_LAST_COLOR', color: randomHexColor() });
  });

document.getElementById('randFirst')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_FIRST_COLOR', color: randomHexColor() });
  });

document.getElementById('randLast')
  .addEventListener('click', () => {
    store.dispatch({ type: 'CHANGE_LAST_COLOR', color: randomHexColor() });
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

    // plus besoin d'appeler les fonctions de rendu car on s'est abonné aux mises à jour du state
    // renderGradient();
    // renderColors();
  });

document.getElementById('toRight')
  .addEventListener('click', () => {
    store.dispatch({type : 'CHANGE_DIRECTION_TO_RIGHT'}); 
  });

// challenge du soir : on écoute les évents sur le bouton
// on donne un ordre, le reducer va interpreter l'ordre ensuite
// pour éviter les fautes de frappe, on a fait un fichier actions, 
// qui contient les variables de nos actions type

document.getElementById('to45degree')
.addEventListener('click', () => {
  // on peut considérer que la direction où aller est une sorte 
  // de paramètre d'une action plus générique
  // il faut ensuite rajouter une autre prop à notre objet action qui contient la direction
  // Notre action générique n'est pas traitable en l'état, on doit
  // la compléter en induqnt la nouvelle direction.
  // Pour ce faire, on ajoute une propriété à notre objet action
  // pour stocker cette information.
  // On appelle cette information complémentaire le PAYLOAD
  store.dispatch({type : CHANGE_DIRECTION_DEGREES, direction : '45deg'})
}); 

document.getElementById('to135degree')
.addEventListener('click', () => {
  store.dispatch({type : CHANGE_DIRECTION_DEGREES, direction : '135deg'})
}); 

document.getElementById('to225degree')
.addEventListener('click', () => {
  store.dispatch({type : CHANGE_DIRECTION_DEGREES, direction : '225deg'})
});

// on utilise notre fonction qui nous facilite la création d'objet
document.getElementById('to315degree')
.addEventListener('click', () => {
  store.dispatch(changeDirection('315deg')); 
});
