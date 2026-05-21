//Créer la classe Ecole caractérisée par : notes[] privé et nom privé
//Ajouter un constructeur d'initialisation
//Ajouter la méthode ajouterNote(note) permettant d'ajouter une note valide au tableau notes
//NB. une note est valide si elle est comprise 0 et 20
//La méthode calculer moyenne ; calcule est retourne la moyenne en utilisant reduce 
//retourne 0 si le tableau est vide ou lance une exception (throw new Error(''))
//la méthode afficher qui les info de l'étudiant (ou bien toString) 
class Ecole{
    constructor(nom,note){
        this.nom=nom;
        this.note=note;
    }
    ajouterNote(note){
        if(note>=0 && note<=20){
            this.note.push(note);
        }
    }
    calculerMoyenne(){
        if(this.note.length===0){
            return 0;
        }else{
            const sum=this.note.reduce((acc,cur)=>acc+cur,0);
            return sum/this.note.length;
        }
    }
    afficher(){
        console.log("Nom de l'etudiant:"+this.nom);
        console.log("Notes de l'etudiant:"+this.note);
    }
}