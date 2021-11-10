import PropTypes from 'prop-types';

import {useDispatch, useSelector} from 'react-redux'; 

import { changeDirection } from '../../actions';


const DirectionButton = ({label, direction}) => {

  const dispatch = useDispatch();
  const currentDirection = useSelector((state)=> state.direction); 
  const isActiveButton = (currentDirection === direction); 

  const className = isActiveButton ? 'button button--active' : 'button'; 

return (
  <button 
    type="button" 
    className={className}
    id="toLeft"
    onClick={
      () => {
      // on ne modifie pas directement le state !! on passe par le hook useDispatch pour que le reducer puisse avoir l'ordre
      console.log(`je veux aller à ${direction}`);
      dispatch(changeDirection(direction));
      }
      }
  >{label}
  </button>
);
};

DirectionButton.propTypes = {
  label: PropTypes.string.isRequired, 
  direction: PropTypes.string.isRequired, 
}
export default DirectionButton; 
