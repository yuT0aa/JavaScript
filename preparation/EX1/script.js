const validateform = () => {
    const teamName = document.getElementById('teamName').value.trim();
    const teamLogo = document.getElementById('teamLogo').value.trim();
    const teamDate = document.getElementById('teamDate').value;
    const teamPlayers = document.getElementById('teamPlayers').value.trim();

    if (!teamName) {
        alert("Le nom de l'équipe est requis.");
        return false;
    }
    if (!teamLogo) {
        alert("L'URL du logo est requise.");
        return false;
    }
    if (!teamDate) {
        alert("La date de création est requise.");
        return false;
    }
    if (!teamPlayers) {
        alert("La liste des joueurs est requise.");
        return false;
    }
    return true;
}

document.querySelector('.btn-add').addEventListener('click', () => {
    const modal = new bootstrap.Modal(document.getElementById('modal'));
    modal.show();
});

document.querySelector('.modal-actions button[type="button"]').addEventListener('click', () => {
    const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
    modal.hide();
});

document.querySelector('.modal-actions button[type="button"]:last-child').addEventListener('click', () => {
    if (validateform()) {
        // Code pour sauvegarder l'équipe
        alert("Équipe sauvegardée !");
        const modal = bootstrap.Modal.getInstance(document.getElementById('modal'));
        modal.hide();
    }
});

const loadTeams = () => {
    fetch('teams.json')
        .then(response => response.json())
        .then(data => {
            const app = document.getElementById('app');
            data.forEach(team => {
                const teamCard = document.createElement('div');
                teamCard.className = 'team-card';
                teamCard.innerHTML = `
                    <img src="${team.logo}" alt="${team.name} Logo" class="team-logo">
                    <h3>${team.name}</h3>
                    <p>Créé le: ${new Date(team.creationDate).toLocaleDateString()}</p>
                    <ul>${team.players.map(player => `<li>${player}</li>`).join('')}</ul>
                `;
                app.appendChild(teamCard);
            });
        })
        .catch(error => console.error('Error loading teams:', error));
};

const saveTeam = () => {
    if (validateform()) {
        const teamName = document.getElementById('teamName').value.trim();
        const teamLogo = document.getElementById('teamLogo').value.trim();
        const teamDate = document.getElementById('teamDate').value;
        const teamPlayers = document.getElementById('teamPlayers').value.trim().split('\n');

        const newTeam = {
            name: teamName,
            logo: teamLogo,
            creationDate: teamDate,
            players: teamPlayers
        };

        // Code pour sauvegarder l'équipe (ex: envoyer au serveur ou stocker localement)
        console.log("Nouvelle équipe à sauvegarder:", newTeam);
        alert("Équipe sauvegardée !");
    }
};

$(document).ready(function () {
   if(localStorage.getItem("teams")){
    afficherEquipes(JSON.parse(localStorage.getItem("teams")));
   }else{
    $.ajax({
        url: "equipes.json",
        type: "GET",
        dataType: "json",
        success: function (equipes) {
            localStorage.setItem("teams",JSON.stringify(equipes));
            afficherEquipes(equipes);   
        },
        error: function (error) {
            console.error("Erreur lors du chargement des équipes:", error);
        }
    });
   }
});

window.onload = loadTeams;