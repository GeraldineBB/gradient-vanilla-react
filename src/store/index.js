import {createStore} from 'redux'; 
import reducer from '../reducers'; 

// fonction qui permet de créer un store (gestionnaire du state)
// store est générique
// il a besoin d'un employé = technicien qui connait les rouages de la machine,
// le technicien va savoir quelles opérations il faut mener pour gérer les modifs du state = le reducer
// la biblio redux nous fournit une méthode createStore 
// qui permet de créer un store
// le store sera le gardien du state
// le store sera le seul interlocuteur de la couche UI en ce qui concerne l'accès au state

// createStore permet de créer un store générique 
// toute la logique d'évolution sera définir par son employé : le reducer 
// c'est le reducer qui connait les rouages de la machine 
// store = objet qui protège le state ! 
// si on veut le modifier : on doit passer par le store > getSTate pour découvire la valeur courante du state et dispatch pour dire une intention au store de ce qu'on veut modifier (le reducer va le faire)
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default store; 
