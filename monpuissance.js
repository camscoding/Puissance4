/**
 * * Première étape.
 * Réussir a afficher la grille du puissance 4 dans un prompt. La grille doit avoir 7 colonnes et 6 lignes. 
 * 
 * Pour faire ça il nous faut un tableau en 2 dimensions (tableau de tableau [['a'],['x'], ['  ']] ). Ce tableau en 2 dimensions contiendra les valeurs 
 * de chaque case pour la grille. 'a' pour le pion du joueur A, 'x' pour le pion du joueur X et '  ' si rien n'est joué comme ça on prend quand même de
 *  l'espace pour que la grille s'affiche bien (la largeur de 2 espaces == la largeur de la lettre a).
 * 
 * Une fois qu'on a nos valeurs il faut les afficher dans le prompt. pour ça je propose la méthode visuelle avec les 
 * templates string es6 :
 *  `|  ${grid[0][0]}  |  ${grid[0][1]}  | ...
*|  ${grid[1][0]}  | ...`
 */


let grid = [
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['  ','  ','  ','  ','  ','  ','  '],
    ['1','2','3','4','5','6','7']
    ];

let grill = prompt(`|   ${grid[0][0]}   |   ${grid[0][1]}   |   ${grid[0][2]}   |   ${grid[0][3]}   |   ${grid[0][4]}   |   ${grid[0][5]}   |   ${grid[0][6]}   |
|   ${grid[1][0]}   |   ${grid[1][1]}   |   ${grid[1][2]}   |   ${grid[1][3]}   |   ${grid[1][4]}   |   ${grid[1][5]}   |   ${grid[1][6]}   |
|   ${grid[2][0]}   |   ${grid[2][1]}   |   ${grid[2][2]}   |   ${grid[2][3]}   |   ${grid[2][4]}   |   ${grid[2][5]}   |   ${grid[2][6]}   |
|   ${grid[3][0]}   |   ${grid[3][1]}   |   ${grid[3][2]}   |   ${grid[3][3]}   |   ${grid[3][4]}   |   ${grid[3][5]}   |   ${grid[3][6]}   |
|   ${grid[4][0]}   |   ${grid[4][1]}   |   ${grid[4][2]}   |   ${grid[4][3]}   |   ${grid[4][4]}   |   ${grid[4][5]}   |   ${grid[4][6]}   |
|   ${grid[5][0]}   |   ${grid[5][1]}   |   ${grid[5][2]}   |   ${grid[5][3]}   |   ${grid[5][4]}   |   ${grid[5][5]}   |   ${grid[5][6]}   |
|   ${grid[6][0]}   |   ${grid[6][1]}   |   ${grid[6][2]}   |   ${grid[6][3]}   |   ${grid[6][4]}   |   ${grid[6][5]}   |   ${grid[6][6]}   |
    ${grid[7][0]}       ${grid[7][1]}       ${grid[7][2]}      ${grid[7][3]}       ${grid[7][4]}      ${grid[7][5]}       ${grid[7][6]}`);

