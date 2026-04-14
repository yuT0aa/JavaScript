document.querySelector('#bc').addEventListener('click',function(){
    //récuperer les valeurs des inputs
    let poids=parseFloat(document.querySelector('#poids').value);
    let taille=parseFloat(document.querySelector('#taille').value);
    let isMale=true;
    if(document.querySelector('#femme').checked){
        isMale=false;
    }
    /*formule de calcul de imc
        homme = poids/taile**2

        femme =(poids/taille**2)  + 1.02


    */
  
    /*let imc=0;
    if(isMale){
        imc=poids/taille**2
    }

    else{
        imc=(poids/taille**2)+1.02
    }*/
   let imc=isMale?poids/taille**2:(poids/taille**2)+1.02
   let description="";
   if(imc<18){
    description="insuffisance...!";
   }
   else if(imc<25){

    description="copulence normal ....!!!";
   }
   else if(imc<35){

    description="surpoids....!!!"
   }
   else{
    description="Obésité"
   }

   document.querySelector('#res').innerHTML=`<span style="font-weight:bold;">votre imc est ${imc.toFixed(2)}</span><br><h2>${description}</h2>`;

})