import './styles.scss';

import { useSelector } from 'react-redux';

const Gradient = () => {

  // on peut nommer (state) autrement si on veut ! 
  // on pourrait faire  (endive) => endive.firstColor 
  const direction = useSelector (
    (state) => state.direction, 
  ); 

  const firstColor = useSelector (
    (state) => state.firstColor, 
  );

  const lastColor = useSelector (
    (state) => state.lastColor, 
  );

  return (
  <div
    id="gradient"
    style={{ background: `linear-gradient(${direction},${firstColor},${lastColor})` }}
  />
  )
};

export default Gradient;
