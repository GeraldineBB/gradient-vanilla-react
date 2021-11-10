// export nommé car on va exporter un type pour chacun des types qu'on va utiliser 
// on crée un Action Type pour chacune des actions que l'on sait traiter
// à chaque fois que l'on veut dispatcher une action de ce type, on utilsera 
// cette constante.
// Dans le reducer, on comparera le type de l'action à effectuer à ces constantes
export const CHANGE_DIRECTION_DEGREES = 'CHANGE_DIRECTION_DEGREES'

