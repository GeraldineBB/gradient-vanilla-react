// Si on a besoin depuis un composant d'emettre des intentions (actions)
// en direction du store, on utilse
// le hook useDispatch proposé par react-redux
// l'appel à ce hook nous permet de récupérer une référence 
// à la méthode dispatch du store sur laquelle notre app est branchée 
import {useDispatch} from 'react-redux'; 
import { CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR, changeFirstColor, changeLastColor } from '../../actions';
import { randomHexColor } from '../../utils';
import './styles.scss';

const ColorButtons = () => {

  const dispatch = useDispatch();

  return (
  <div className="buttons group">
    <button 
      type="button" 
      className="button" 
      id="randFirst"
      onClick={
        () => {
        // avec Action Creator
        // ici, on demande à la fonction changeFirstColor
        // de créer l'action pour nous.
        // changeFirstColor est un Action Creator,
        // une fonction dont le but est de créer une action
        // on crée une Action Creator par type !! 

          dispatch (changeFirstColor(randomHexColor()));
        }
      }
      >Random First
    </button>
    <button 
      type="button" 
      className="button" 
      id="randAll"
      onClick={
        () => {
          // avec Action Creator
          dispatch (changeFirstColor(randomHexColor()));
          dispatch (changeLastColor(randomHexColor()))
        }
      }
      >Random All
    </button>
    <button 
      type="button" 
      className="button" 
      id="randLast"
      onClick={
        () => {
          // avec Action Creator
          dispatch (changeLastColor(randomHexColor()))
        }
      }
      >Random Last
      </button>
  </div>
  ); 
};

export default ColorButtons;
