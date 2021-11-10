// Si on a besoin de lire de l'information dans le state,
// On utilise le hook useSelector
// Ce hook est fourni par react-redux
import {useSelector} from 'react-redux'; 
import './styles.scss';

const NbColors = () => {

  // équivalent à faire un store.getState + suscribe 
  // si le state évolue, le composant sera re rendu automatiquement !
  // On passe à useSelector une fonction qui permet de
  // décrire l'information à extraire du state.
  // Derrière le rideau, useSelector appelera cette fonction en
  // lui donnant en argument le state courant
  // et nous renverra le résultat.
  // Le fait d'utiliser le hook useSelector abonne le composant aux
  //  mises à jour du state (équivalent à subscribe)
  const nbColors =  useSelector(
    (state) => state.nbColors, 
  )

  return (
    <div id="nbColors">{nbColors} couleur(s) générée(s)</div>
  );
};

export default NbColors;
