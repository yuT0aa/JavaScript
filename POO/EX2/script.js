//Ecrire la classe Forme caractérisée par l'attribut color la méthode CalculSurface qui retourne 0 ou bien abstraite
//Ecrire la classe carrée qui hérite de forme et qui a comment attribut supplémentaire #cote (float)
//redéfinir la méthode CalculSurface héritée de la classe Forme
//redéfinir le constructeur 
//Ecrire la classe Cercle qui hérite de Forme et qui a comme attribut supplémentaire rayon
//redéfinir le constructeur et la méthode calculerSurface
//Ecrire la classe Triangle qui hérite de la classe Forme et qui a comme attributs supp : base et hauteur 
//redéfinir le constructeur et la méthode calculerSurface

class Forme{
    constructor(color){
        this.color=color;
    }
    calculerSurface(){
        return 0;
    }
}

class Carre extends Forme{
    #cote;
    constructor(color){
        super(color,c);
        this.#cote=Carre;
    }
    calculerSurface(){
        return Math.pow(this.#cote,2);
    }
    toString(){
        return`color:${this.getColor()}-surface:${this.calculerSurface()}`;
    }
}
let c=new Carre("green",12);

class Cercle extends Forme{
    #rayon;
    constructor(color,r){
        super(color);
        this.#rayon=r;
    }
     CalculerSurface(){
            return (Math.PI*Math.pow(this.#rayon,2)).toFixed(2);
        }
        toString(){
            return `color : ${this.getColor()} - surface : ${this.CalculerSurface()}`;
        }

    }

    c=new Cercle("blue",12.5);
   // console.log(c.toString());
 /*Q4: Ecrire la classe Triangle qui hérite de la classe Forme et qui a comme attributs supp : base et hauteur 
redéfinir le constructeur et la méthode calculerSurface*/
 class Triangle extends Forme{
        
        constructor(couleur,b,h){
            super(couleur);
            this.base=b;
            this.hauteur=h;
        }
        //redéfinir la méthode calculerSurface
        CalculerSurface(){
            return ((this.base*this.hauteur)/2).toFixed(2);
        }
        toString(){
            return `color : ${this.getColor()} - surface : ${this.CalculerSurface()}`;
        }

    }
  let t=new Triangle("yellow",12.5,18.5);
  console.log(t.toString());

