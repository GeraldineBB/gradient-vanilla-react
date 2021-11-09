// fonction qui va permttre de déterminer une nouvelle valeur du state (va retourner le state en réponse à une demande de modification)
// on va se servir du reducer pour la valeur initiale du state

// on peut définir l'état initial de notre application
// dans le fichier définissant le reducer
// en effet le reducer est appelé une première fois par le store sans argument
// lors de la création de celui ci (création du store)

// le store va fournir l’état actuel et l’action à accomplir au reducer
// le reducer va ensuite produire une modification du state
// on faire des conditions en fonction du type (propriété de l’objet action) 

const initialState = {
  firstColor: '#e367a4',
  lastColor: '#48b1f3',
  direction: '90deg',
  nbColors: 0,
};

// le rôle du reducer est de :
// - produire une nouvelle version du state
// à partir de : 
// - l'état actuel du state (initialState)
// - l'action à accomplir 
const reducer = (state = initialState, action) => {
  console.log(`je dois :  ${action.type}`);

  // if (action.type === 'CHANGE_DIRECTION_TO_LEFT') {
  //   console.log('je dois changer la direction pour aller à gauche');
  // }
  // else if (action.type === 'CHANGE_DIRECTION_TO_RIGHT') {
  //   console.log('je dois changer la direction pour aller à droite');
  // }

  // trop de else if = galère
  // là on va utiliser une structure de controle qui va vérifier le type d'action > switch !

  switch(action.type) {
    case 'CHANGE_DIRECTION_TO_LEFT':
      console.log('je dois changer la direction pour aller à gacuhe')
      // je vais ici construire une nouvelle version du state et la retourner
      // on peut reprendre les prop du state déjà existant 
      // je modifie la proppriété à changer 
      const newState = {
        firstColor: state.firstColor,
        lastColor: state.lastColor,
        direction: '270deg',
        nbColors: state.nbColors,
      }; 

      return newState; 

    case 'CHANGE_DIRECTION_TO_RIGHT':
      console.log('je dois changer la direction pour aller à droite');

      // const newState = {...state
      // , direction: '90deg'}
      // équivalent à :
      // const newState = { ...state };
      // newState.direction = '90deg';
      // return newState; 

      return {...state, 
        direction: '90deg'};

    case 'CHANGE_FIRST_COLOR':
      console.log(action);
      return {
        ...state, 
        firstColor: action.color,
        nbColors: state.nbColors + 1
      }

    case 'CHANGE_LAST_COLOR':
      return {
      ...state,
      lastColor: action.color, 
      nbColors: state.nbColors +1
      }
  

    default:
      // quand on sait pas faire il vaut mieux rien faire
      return state; 
  } 

};

export default reducer;
