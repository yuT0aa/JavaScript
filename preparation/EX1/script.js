  $(document).ready(function () {
   if(localStorage.getItem("equipes")){
    afficherEquipes(JSON.parse(localStorage.getItem("equipes")));
   }else{
    $.ajax({
        url: "equipes.json",
        type: "GET",
        dataType: "json",
        success: function (equipes) {
            localStorage.setItem("equipes",JSON.stringify(equipes));
            afficherEquipes(equipes);
        }

    });
   }
});

function afficherEquipes(equipes) {

    let html = "";
    equipes.forEach((equipe,pos) => {
        console.log(equipe.joueurs);
       /* let joueurs = equipe.joueurs
            .map(j => j.nom)
            .join(", ");*/ 

        let joueurs='';
        equipe.joueurs.forEach((j,pos)=>{
         let sep=(pos<equipe.joueurs.length-1)?", ":"";
          joueurs+=j.nom+sep;
        });
         //transformer joueur en tr
        html += `
            <tr>
                <td>${equipe.id}</td>
                <td>${equipe.nom}</td>
                <td>
                    <img src="${equipe.logo}"
                        width="60">
                </td>
                <td>${equipe.date}</td>
                <td>${joueurs}</td>
                <td>
                    <a href="show.html?id=${equipe.id}"
                    class="btn btn-info btn-sm">
                        Show
                    </a>
                    <a href="edit.html?id=${equipe.id}"
                    class="btn btn-warning btn-sm">
                        Edit
                    </a>
                    <button class="btn btn-danger btn-sm"
                            onclick="supprimer(${pos})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    });
    $("#teamTableBody").html(html);
}

function supprimer(pos) {
    if(confirm("Supprimer cette équipe ?")) {
    let equipes= JSON.parse(localStorage.getItem("equipes"));
    equipes.splice(pos,1);
    localStorage.setItem("equipes",JSON.stringify(equipes));
    afficherEquipes(equipes);
    }
}

function openModal() {
    $("#modal").show();
}

function closeModal() {
    $("#modal").hide();
}

function saveTeam() {
    let nom = $("#teamName").val();
    let logo = $("#teamLogo").val();
    let date = $("#teamDate").val();
    let joueurs = $("#teamPlayers").val().split("\n").map(j => ({nom: j.trim()})).filter(j => j.nom);
    
    if(nom && logo && date) {
        let equipes = JSON.parse(localStorage.getItem("equipes")) || [];
        let newTeam = {
            id: Date.now(),
            nom,
            logo,
            date,
            joueurs
        };
        equipes.push(newTeam);
        localStorage.setItem("equipes", JSON.stringify(equipes));
        afficherEquipes(equipes);
        closeModal();
    } else {
        alert("Veuillez remplir tous les champs.");
    }
}