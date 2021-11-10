// export nommé car on va exporter un type pour chacun des types qu'on va utiliser 
// on crée un Action Type pour chacune des actions que l'on sait traiter
// à chaque fois que l'on veut dispatcher une action de ce type, on utilsera 
// cette constante.
// Dans le reducer, on comparera le type de l'action à effectuer à ces constantes
export const CHANGE_DIRECTION_DEGREES = 'CHANGE_DIRECTION_DEGREES'

// une fonction qui renvoie un objet qui correspond à notre action type
// le payload devient paramétrable 
// pour chaque Action Type, on va créer un Action creator, 
// une fonction dont le but est de retourner une Action du type de l'Action Type associé

// avec retour implicite (ce qu'on voit le plus)
export const changeDirection = (direction) => (
  {type : CHANGE_DIRECTION_DEGREES, direction : direction}
)

// avec retour explicite
// export const changeDirection = (direction) => {
//   return {type : CHANGE_DIRECTION_DEGREES, direction : direction}
// }
