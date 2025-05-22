// // ------------------------------------------
// EXERCICE 1 : Créer et manipuler un tableau
// // ------------------------------------------

// let couleurs = ["rouge", "vert", "bleu"];
// //Ajoute "jaune" au tableau.
// couleurs.push("jaune");
// console.log(couleurs);
// //Supprime la première couleur du tableau.
// couleurs.shift();
// console.log(couleurs);
// //Affiche toutes les couleurs avec une boucle.


// // ------------------------------------------
// EXERCICE 2 : Trouver un élément dans un tableau
// // ------------------------------------------

// const nombres = [2, 7, 10, 23, 42];
// //vérifier si le nombre 10 est dans le tableau
// for (let chiffre of nombres) {
//     if (chiffre === 10) {
//         console.log(`10 est présent dans le tableau`);

//     } else {
//         console.log(`10 n'est pas présent`);
//     }
// }


// // ------------------------------------------
// EXERCICE 3 : Filtrer un tableau
// // ------------------------------------------

// const ages = [12, 17, 22, 10, 34, 16];

// for (let age of ages) {
//     if (age >= 18) {
//         console.log(age);
//     }
// }

// // ------------------------------------------
// EXERCICE 4 : Inverser un tableau
// // ------------------------------------------

// const jours = ["lundi", "mardi", "mercredi"];

// jours.splice(0, 1, "mercredi");
// jours.splice(2, 1, "lundi");
// console.log(jours);

// // ------------------------------------------
// EXERCICE 5 : Calculer la somme des éléments
// // ------------------------------------------

// const notes = [15, 12, 17, 10, 8];
// let result = 0;

// for (let note of notes) {
//     console.log(note);
//     result = note + result
// }

// console.log(result);

// // ------------------------------------------
// EXERCICE 6 : Créer et manipuler un objet
// // ------------------------------------------
// const livre = {
//     titre: "Le Petit Prince",
//     auteur: "Antoine de Saint-Exupéry",
//     pages: 96
// };
// //Affiche le titre et l’auteur dans la console.
// console.log(livre.titre + " de " + livre.auteur);
// //Modifie le nombre de pages à 100.
// livre.pages = 100;
// console.log(livre.pages);
// //Ajoute une propriété langue avec la valeur "français".
// livre.langue = "français"
// console.log(livre);


// // ------------------------------------------
// EXERCICE 7 : Parcourir un objet
// // ------------------------------------------

// const personne = {
//     nom: "Alice",
//     age: 25,
//     ville: "Paris"
// };

// for (cle in personne) {
//     console.log(cle + ": " + personne[cle]);
// }

// // ------------------------------------------
// EXERCICE 8 : Combiner tableau et objet
// // ------------------------------------------

// const etudiants = [
//     { nom: "Bart", age: 10, note: 7 },
//     { nom: "Marge", age: 36, note: 15 },
//     { nom: "Homer", age: 40, note: 5 }
// ];

// for (etudiant of etudiants) {
//     console.log(`${etudiant.nom} a eu ${etudiant.note}/20.`);
// }

// // ------------------------------------------
// EXERCICE 9 : Écrire une fonction simple
// // ------------------------------------------

// function bonjour(prenom) {
//     console.log("Bonjour " + prenom);
// }

// bonjour("Pierre");

// // ------------------------------------------
// EXERCICE 10 : Carré d’un nombre
// // ------------------------------------------

// function carre(nombre) {
//     console.log(nombre * nombre);

// }

// carre(5)

// // ------------------------------------------
// EXERCICE 11 : Somme des nombres d’un tableau
// // ------------------------------------------
// const tabNombres = [1, 2, 3, 4];

// function sommeTableau(tabNombres) {
//     let somme = 0
//     for (let i = 0; i <= tabNombres.length; i++) {
//         somme += i;
//     }
//     return somme
// }

// console.log(sommeTableau(tabNombres));

// // ------------------------------------------
// EXERCICE 12 : Fonction avec condition
// // ------------------------------------------

// function estAdulte(age){
//     if (age >= 18){
//         console.log("Adulte");

//     }else{
//         console.log("Mineur");

//     }
// }

// estAdulte(22);

// // ------------------------------------------
// EXERCICE 13 : Filtrer les adultes avec une fonction
// // ------------------------------------------

// let adult = [];

// function filtrerAdultes(tabAge) {
//     for (age of tabAge) {
//         if (age >= 18) {
//             adult.push(age);
//         }
//     }
// }

// filtrerAdultes([12, 17, 22, 10, 34, 16]);
// console.log(adult);

// // ------------------------------------------
// EXERCICE 15 : Analyser des étudiants
// // ------------------------------------------

const etudiants = [
    { nom: "Bart", note: 7 },
    { nom: "Marge", note: 15 },
    { nom: "Homer", note: 5 }
];

function trouverMeilleurEtudiant(bestEtudiants) {
    let meilleurEtudiant = bestEtudiants[0];
    for (i = 0; i < bestEtudiants.length; i++) {
        let etudiantActuel = bestEtudiants[i];
        if (etudiantActuel.note > meilleurEtudiant.note) {
            meilleurEtudiant = etudiantActuel;
        }
    }return meilleurEtudiant;
}

trouverMeilleurEtudiant(etudiants)
console.log(trouverMeilleurEtudiant(etudiants))


// // ------------------------------------------
// EXERCICE 16 : Mot le plus long
// // ------------------------------------------
// const tableauMots = ["bonjour", "salut", "coucou"];
// let max = tableauMots[0];

// function motPlusLong(tableauMots) {
//     for (let i = 1; i < tableauMots.length; i++) {
//         if (tableauMots[i].length > max.length) {
//             max = tableauMots[i];
//         }
//     }
//     return max;
// }

// console.log(motPlusLong(tableauMots));