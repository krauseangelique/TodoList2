/**
 * To do list that explain how using localstorage and injecting JS
 * 
 */
//01.mes Variables
//a) .addTasks récupère le form V
const addTasks = document.querySelector(".addTasks");
console.log(addTasks);

//b) .taskList récupère l'ul
const taskList = document.querySelector(".taskList");
console.log(taskList);

// LocalStorage.getItem() permet d'accéder et de reprendre les valeurs précédemment enregistrées dans l'onglet Application de votre inspecteur.(I)
const items = JSON.parse(localStorage.getItem("items")) || [];


//c) On va mettre les tâches dans un tableau (le ul) puis le premier enfant [0].value va vérifier qu'on reçoit bien le premier item (la première tâche) 
// ajouter au form un addEventlistener

// 1. function handleAddItem() {} 
 // début de ma fonction

    function handleAddItem(e) {
        e.preventDefault(); // empêche les reloads intempestifs
        const taskItems = addTasks[0].value;
        //(2) Vérifier si on récupère la bonne valeur, c'est à dire la valeur tapée dans l'input
        console.log(taskItems);

        items.push(taskItems); // On envoi dans notre tableau [] les valeurs enregistrées par l'utilisateur(3)

        // la fonction addItemList EST la fonction où la magie opère càd INJECTER le code JS dans l'HTML
        addItemList(items, taskList);

        // les clefs "items"

        // le localStorage retourne 0 : premier item écrit par l'utilisateur
        // localStorage.setItem() permet d'initialiser les items. Elle prend deux paramètres : la clé ('items') et la valeur (JSON.stringify(items)) (II)
        localStorage.setItem("items", JSON.stringify(items));

        console.log(taskItems);

    } // Fin de ma fonction

    addTasks.addEventListener('submit', handleAddItem);

// 2. function addItemList() {} 
// début de ma fonction
    // obliger que le premier paramètre soit un tableau
    function addItemList(items = [], itemList ) {

        //return `<li> ${itemList}</li>`;
        itemList.innerHTML = items.map((taskItems, index) => {
            // (4) les items renvoyés le sont dans un tableau donc séparés par une virgule pour les séparer de façon différente on passera par join

            return `<li>${index + 1}. ${taskItems} </li>`;
            // (5) pour renvoyer les infos  et +1 pour avoir le chiffre. avant l'item 

        })
        .join(""); // jointure entre les différents 'objets' item
    }

  
 

/* METHODOLOGIE
//1. Form

//2.output list ul : point d'encrage de l'injection

//3.On départ on crée un TABLEAU VIDE
// et on vérifie SI je récupère bien les valeurs

//4.addItems récupère TOUT et addItems[0] est le premier input, celui dans lequel on introduit la valeur (coppa)

//5.Appel de la fonction
// avec les paramètres

//6.On injecte les items

//7.innerHTML

//8.map et .join

//9.set get fonction localstorage

//10.item est le tableau des valeurs

//11.Transformation objet en JSON via stringify

//12.Appel de mes fonctions

*/




