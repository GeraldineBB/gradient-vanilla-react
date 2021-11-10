// Si on a besoin depuis un composant d'emettre des intentions (actions)
// en direction du store, on utilse
// le hook useDispatch proposé par react-redux
// l'appel à ce hook nous permet de récupérer une référence 
// à la méthode dispatch du store sur laquelle notre app est branchée 
import {useDispatch} from 'react-redux'; 
import { CHANGE_FIRST_COLOR, CHANGE_LAST_COLOR, changeColor } from '../../actions';
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
          dispatch ({type : CHANGE_FIRST_COLOR, color : randomHexColor()})
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
          dispatch ({type: CHANGE_FIRST_COLOR, color: randomHexColor()});
          dispatch ({type: CHANGE_LAST_COLOR, color: randomHexColor()})
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
          dispatch (changeColor(CHANGE_LAST_COLOR, randomHexColor()))
        }
      }
      >Random Last
      </button>
  </div>
  ); 
};

export default ColorButtons;
