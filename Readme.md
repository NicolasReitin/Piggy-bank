### Consigne : 

Le formulaire ci dessous permet d'enregistrer des transactions.
Lorsque vous cliquez sur le bouton "Ajouter la transaction", deux types de traitements doivent s'effectuer.

Premièrement, une série de tests doit être effectuée :

    Vérifier que tous les champs sont renseignés
    Le champ de description sera facultatif, mais les champs nom et prix seront obligatoires et devront donc être vérifié.
    Vérifier la validité du format du nom, il ne peux contenir que des lettres, la première lettre doit être en majuscule et les autres lettre en minuscule.
    Vérifier la validité du format du prix, il ne peut contenir que des nombres soit à 2 virgules soit sans virgule ainsi qu'un + ou un - juste avant le nombre seuelemnt (voir exemple dans le tableau tirelire)


Faites en sorte que lorsqu’un élément de formulaire n’est pas valide, un avertissement rouge s'affiche.

Dans un second temps, et si les vérifications précédentes sont valides, vous devez récupérer la valeur de chacun des champs renseignés une fois le formulaire envoyé, pour les afficher dans votre tirelire.

Ensuite, vous devrez :

    Faire en sorte que lorsque l'utilisateur clique sur une croix, l’entrée correspondante dans le tableau est supprimée.
    Faire en sorte que lorsqu’une entrée est supprimée du tableau, la somme totale est automatiquement mise à jour.

Assurez-vous que : le formulaire est effacé pour la saisie suivante, la somme totale est mise à jour, la croix est fonctionnelle dans l’entrée que vous venez d’ajouter.

Remarques :

    Votre code Javascript doit être inséré de manière non intrusive (pas de code directement dans les balises HTML)
    Ne vous fiez pas aux validations effectuées par le navigateur sur les types de champs HTML5. Vous devez coder les validations vous-même, en JavaScript.
    Vous n'avez le droit à aucun framework, ni librairie en dehors de Bootstrap !
    Vous n'avez pas le droit de modifier le code HTML du formulaire (pas d'ajout de class ou d'id sur des élements)

