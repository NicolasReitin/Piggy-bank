const form = document.querySelector('form'); //Select the form
const inputName = document.getElementById('input_name'); //Select input name
const inputDescription = document.getElementById('input_desc'); //Select input description
const inputPrice = document.getElementById('input_price'); //Select input price

total(); //appelle la fonction total dés le début pour calculer le total de la tirelire en cours
supprimerTransaction(); // afin de pouvoir supprimer les opérations initiales de la tirelire

form.addEventListener('submit', function(e){ //event au click du submit
    e.preventDefault();  //évite l'update de la page au click natif du submit   
    let name = inputName.value; // valeur du name dans le formulaire
    let price = inputPrice.value;
    const divAlert = document.getElementsByClassName('alert-danger'); // récupère la class alert danger créée si message d'alert (nom ou prix manquant) 
    let regexName = /^[a-zA-Z]+$/; // vérifie via regex que les caractère dans le formulaire de nom sont uniquement des lettres
    let regexNameTest = regexName.test(name);
    let regexPrice = /^[0-9,.-]+$/; // pareil pour le formulaire price mais avec des chiffres + , . et -
    let regexPriceTest = regexPrice.test(price);

    if(!name || !price){ //si pas de nom ou pas de price
        if(divAlert.length === 0){ // si pas déjà une div alert pour éviter d'en créer plusieurs a chaque click
            let alert = document.createElement('div'); //on créée un div alert et on la fait apparaitre
            alert.classList.add('alert-danger');
            alert.classList.add('alert');
            form.appendChild(alert);
            //changer position de la div créée pour la mettre avant le form
            let parentDiv = document.querySelector('form').parentNode; // obtient une référence au noeud parent
            let sp2 = document.querySelector('form');
            parentDiv.insertBefore(alert, sp2); //transfert dynalique vers le type Node
            
            alert.innerHTML = "Information manquante : merci d'indiquer un nom et un prix pour l'ajout.";
        }
    }else{
        for (let i = divAlert.length-1; i >= 0;  i--){ // si formulaire bien rempli, supprimer alert en cours.
            divAlert[i].remove();
        }
        if (regexNameTest && regexPriceTest) {//si pas d'erreur, ajout de la majuscule au nom et le reste en minuscule
            name = name.charAt(0).toUpperCase() + name.substring(1).toLowerCase();
            ajouterTransaction();
        }else{ // sinon message d'alerte
            if(divAlert.length === 0){
                let alert = document.createElement('div'); //on créée un div alert et on la fait apparaitre
                alert.classList.add('alert-danger');
                alert.classList.add('alert');
                form.appendChild(alert);
                //changer position de la div créée pour la mettre avant le form
                let parentDiv = document.querySelector('form').parentNode;
                let sp2 = document.querySelector('form');
                parentDiv.insertBefore(alert, sp2);
                
                alert.innerHTML = "Erreur : votre nom ne doit contenir que des lettres et le prix que des chiffres";
            }
        }
    }
    supprimerTransaction();
    total();
})



function ajouterTransaction() {
    let name = inputName.value;
    let description = inputDescription.value;
    let price = inputPrice.value;

    if(name && price){ //ajouter la nouvelle ligne du formualaire dans le tableau de la tirelire
        const tableAdd = document.querySelector('tbody');
        let tr = document.createElement('tr');
        tableAdd.appendChild(tr);
        let tdName = document.createElement('td');
        tdName.textContent = name;
        tr.appendChild(tdName);
        let tdDesc = document.createElement('td');
        tdDesc.textContent = description;
        tr.appendChild(tdDesc);
        let tdPrice = document.createElement('td');

        price <= 0 ? tdPrice.textContent = price : tdPrice.textContent = "+"+price;

        tdPrice.setAttribute("data-price", "");
        tr.appendChild(tdPrice);
        let tdX = document.createElement('td');
        tr.appendChild(tdX);
        let textX = document.createElement('a');
        textX.href="#";
        textX.classList.add("text-danger");
        textX.setAttribute("data-delete", "");
        textX.textContent = "X";
        tdX.appendChild(textX);
        form.reset();
    }
}

function supprimerTransaction() {  //supprimer la ligne du tableau de la tirelire via le X
    const deleteElement = document.querySelectorAll('a[data-delete]');
    deleteElement.forEach(element => {//pour chaque élément ayant une X
        element.addEventListener('click', function(e){ //évènement au click sur le X
            e.preventDefault(); //on enlève le comportement par défaut de rafraichissement de la page
            let parentTr = element.closest('tr'); //on remonte à la balise parent
            parentTr.remove();//et on la supprime
            total(); //on met a jour le total
        });        
    });
}

function total() { //calcul le total de la tirelire selon les data price présents
    const tdElement = document.querySelectorAll('td[data-price]');
    let sum = 0;
    for(let i = 0; i < tdElement.length; i++){
        let tdNb = parseFloat(tdElement[i].innerHTML.replace("+", "").replace(",", ".")); //on enlève les + et remplace les "," par un "." et on transform les string en number
        sum += tdNb; //on incrémente
    }
    sum = Math.round(sum*100)/100;
    const total = document.querySelector('table > caption');
    total.textContent = `Total : ${sum}€`;
}