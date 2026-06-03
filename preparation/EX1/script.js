const validateform = () => {
    let id=$("#id").val().trim();
    let nom=$("#nom").val().trim();
    let prenom=$("#prenom").val().trim();
    let age=$("#age").val().trim();
    let pays=$("#pays").val();
    let sexe=$("input[name='sexe']:checked").val();
    let disciplines=[];
    $("input[name='disciplines']:checked").each(function(){
        disciplines.push($(this).val());
    });
    if (id=="" || nom=="" || prenom=="" || age=="" || pays=="" || !sexe || disciplines.length==0){
        alert("Veuillez remplir tous les champs !");
        return false;   
        }
    if (isNaN(age) || age<0 || age>120){
        alert("Veuillez entrer un âge valide !");
        return false;
    }
    return true;
}

$("#athleteForm").submit(function(e){
    e.preventDefault();
    if (validateform()){
        alert("Formulaire soumis avec succès !");
        // Ici, vous pouvez ajouter le code pour envoyer les données au serveur ou les traiter comme vous le souhaitez
    }
});

