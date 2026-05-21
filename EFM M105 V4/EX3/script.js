records=[];
editIndex=-1;

const validateForm=()=>{
    let nom=$("#nom").val().trim();
    let prenom=$("#prenom").val().trim();
    let age=$("#age").val().trim();
    let pays=$("#pays").val();

    let regNom=/^[A-Za-z\s]+$/;
    if(!nom||!prenom||!age||!pays){
        alert("Tous les champs sont obligatoires !");
        return false;
    }
    if(!regNom.test(nom)||!regNom.test(prenom)){
        alert("Nom et prénom doivent contenir uniquement des lettres !");
        return false;
    }
    
    let sexe=$("input[name='sexe']:checked");
    if(!sexe){
        alert("Veuillez sélectionner le sexe !");
        return false;
    }

    let disciplines=$("input[name='disciplines']:checked");
    if(disciplines.length===0){
        alert("Veuillez choisir au moins une discipline !");
        return false;
    }
    alert("Formulaire valide !");
    return true;
}

const display=()=>{
    let tBody=$("#tBody");
    tBody.html("");
    records.forEach((element,index)=>{
        tBody.append(`
            <tr>
                <th>${element.nom}</th>
                <th>${element.prenom}</th>
                <th>${element.age}</th>
                <th>${element.sexe}</th>
                <th>${element.disciplines}</th>
                <th>${element.pays}</th>
                <th>
                    <button class="btn-btn-success" onclick="edit(${index})">Edit</button>
                    <button class="btn-btn-danger" onclick="del(${index})">Delete</button>
                </th>
            </tr>
        `)})
}

const save=()=>{
    if (editIndex==null){
        if(validateForm()){
            let nom=$("#nom").val().trim();
            let prenom=$("#prenom").val().trim();
            let age=$("#age").val().trim();
            let pays=$("#pays").val();
            let sexe=$("input[name='sexe']:checked").val();
            let disciplines=[];
            $("input[name='disciplines']:checked").each(function(){
                disciplines.push($(this).val());
            });
            records.push({nom,prenom,age,sexe,disciplines,pays});
            display();
        }
    }
}

const edit=(index)=>{
    editIndex=index;
    let record=records[index];
    $("#nom").val(record.nom);
    $("#prenom").val(record.prenom);
    $("#age").val(record.age);
    $("#pays").val(record.pays);
    $(`input[name='sexe'][value='${record.sexe}']`).prop("checked",true);
    record.disciplines.forEach(discipline=>{
        $(`input[name='disciplines'][value='${discipline}']`).prop("checked",true);
    });
}

const del=(index)=>{
    records.splice(index,1);
    display();
}   
