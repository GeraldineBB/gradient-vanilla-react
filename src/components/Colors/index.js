import './styles.scss';

import { useSelector } from 'react-redux';

const Colors = () => {

  // on pourrait utiliser qu'une seule fois le useSelector :
  // const {firstColor, lastColor} = useSelector(
  //   (state) => ({firstColor: state.firstColor, lastColor: state.lastColor}),
  // );
  // ... mais pas une bonne idée !! 
  // pour voir si le state évolue il va comparer en surface donc si l'un des deux change, 
  // ...on va retourner un nouvel objet donc tout est nouveau ... rendu supp alors que pas besoin 
  // donc c'est bien de faire un useSelector par propriété du state

  const firstColor = useSelector(
    (state) => state.firstColor,
  );

  const lastColor = useSelector(
    (state) => state.lastColor,
  );

  return (
    <div id="colors">
      <span style={{ color: { firstColor } }}>{firstColor}</span>
      -
      <span style={{ color: { lastColor } }}>{lastColor}</span>
    </div>
  );
};

export default Colors;
