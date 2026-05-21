//Un vehicule est caracterise par:marque,modele et prix de location.
//1-Commencez par creer une classe vehicule avec un constructeur et une methode qui affiche les informations d'un objet vehicule.
//2-Creer une sous-classe Voiture qui doit heriter de la classe vehicule,ajouter le costructeur et surcharger la methode d'affichage sachant qu'une voiture possede comme attribut supplementaire le nombre de portes.

class vehicule{
    constructor(marque,modele,prix_de_location){
        this.ma=marque;
        this.mo=modele;
        this.prix=prix_de_location;
    }
    afficher(){
        console.log("marque:"+this.ma+" modele:"+this.mo+" prix de location:"+this.prix);
    }
}

class voiture extends vehicule{
    constructor(marque,modele,prix_de_location,nombre_de_portes){
        super(marque,modele,prix_de_location);
        this.np=nombre_de_portes;
    }
    afficher(){
        console.log("marque:"+this.ma+" modele:"+this.mo+" prix de location:"+this.prix+" nombre de portes:"+this.np);
    }
}

let v1=new vehicule("peugeot","206",100);
v1.afficher();
let v2=new voiture("renault","clio",150,5);
v2.afficher();