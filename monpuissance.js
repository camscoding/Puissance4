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

const startGame = () => {
    let grid = [
        ['  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  '],
        ['  ','  ','  ','  ','  ','  ','  '],
    ];
    
    let playedValue;
for ( i = 0 ; i <= 42 ; i++) {
    playedValue = jeu(grid);
    position(playedValue,grid);

}

}
    
const jeu = (tab) => {
    let grille = Number(prompt(`|   ${tab[0][0]}   |   ${tab[0][1]}   |   ${tab[0][2]}   |   ${tab[0][3]}   |   ${tab[0][4]}   |   ${tab[0][5]}   |   ${tab[0][6]}   |
|   ${tab[1][0]}   |   ${tab[1][1]}   |   ${tab[1][2]}   |   ${tab[1][3]}   |   ${tab[1][4]}   |   ${tab[1][5]}   |   ${tab[1][6]}   |
|   ${tab[2][0]}   |   ${tab[2][1]}   |   ${tab[2][2]}   |   ${tab[2][3]}   |   ${tab[2][4]}   |   ${tab[2][5]}   |   ${tab[2][6]}   |
|   ${tab[3][0]}   |   ${tab[3][1]}   |   ${tab[3][2]}   |   ${tab[3][3]}   |   ${tab[3][4]}   |   ${tab[3][5]}   |   ${tab[3][6]}   |
|   ${tab[4][0]}   |   ${tab[4][1]}   |   ${tab[4][2]}   |   ${tab[4][3]}   |   ${tab[4][4]}   |   ${tab[4][5]}   |   ${tab[4][6]}   |
|   ${tab[5][0]}   |   ${tab[5][1]}   |   ${tab[5][2]}   |   ${tab[5][3]}   |   ${tab[5][4]}   |   ${tab[5][5]}   |   ${tab[5][6]}   |
        `));

    return grille
}



const position = (play, tab) => {
    let lastInd = getLastInd(tab, play);
    if (play === 1) {
        tab[lastInd][0] = 'a';
    } else if (play === 2) {
        tab[lastInd][1] = 'a';
    } else if (play === 3) {
        tab[lastInd][2] = 'a';
    } else if (play === 4) {
        tab[lastInd][3] = 'a';
    } else if (play === 5) {
        tab[lastInd][4] = 'a';
    } else if (play === 6 ) {
        tab[lastInd][5] = 'a';
    } else  if (play === 7 ){
        tab[lastInd][6] = 'a';
    } else {
        console.error('Mauvaise valeur de colone entrée !');
    }
}


const getLastInd = (tab, play) => {
    for (i = 5; i >= 0; i--) {  
        if (tab[i][play - 1] === '  ') {
            return i
        }
    }
}


























// const getLastInd = (tab, play) => {
//     for (let i = 5; i >= 0; i--) {
//         if (tab[i][play - 1] === '  ') {
//             return i;
//         }
//     }
// }
