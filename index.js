// index.js
const teamATable = document.getElementById("team-a-table");
const teamBTable = document.getElementById("team-b-table");
const teamTitle = document.getElementById("team-title");
const toggleTeamButton = document.getElementById("toggle-team");

let currentTeam = "Brexit FC";

function showCurrentTeam() {
    if (currentTeam === "Brexit FC") {
        teamATable.style.display = "table";
        teamBTable.style.display = "none";
        teamTitle.textContent = "Brexit FC";
        toggleTeamButton.textContent = "Switch to Gui Academy";
    } else {
        teamATable.style.display = "none";
        teamBTable.style.display = "table";
        teamTitle.textContent = "Gui Academy";
        toggleTeamButton.textContent = "Switch to Brexit FC";
    }
}

toggleTeamButton.addEventListener("click", () => {
    currentTeam = currentTeam === "Brexit FC" ? "Gui Academy" : "Brexit FC";
    showCurrentTeam();
});

// Initial setup
showCurrentTeam();