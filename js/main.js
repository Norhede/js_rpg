// Load all data into the game
function populateData() {
    document.getElementById("playerNameId").innerHTML = player.name;
    document.getElementById("characterLevelId").innerHTML = player.level;
    document.getElementById("characterAttackPowerId").innerHTML = player.attack_power;
    document.getElementById("characterDefencePowerId").innerHTML = player.defence_power;
    document.getElementById("characterAttackSpeedId").innerHTML = player.attack_speed;
    document.getElementById("characterHealthPointsId").innerHTML = player.health_points;
    document.getElementById("characterExperienceId").innerHTML = player.exp;
    document.getElementById("combatExperienceTotalId").innerHTML = player.exp;
    document.getElementById("combatMaterial1Id").innerHTML = player.material1;
    document.getElementById("combatMaterial2Id").innerHTML = player.material2;
    document.getElementById("combatMaterial3Id").innerHTML = player.material3;
    document.getElementById("combatMaterial4Id").innerHTML = player.material4;
}

// Get the modal
var modal = document.getElementById("myModal");
document.getElementById("defaultOpen").click();
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
modal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
} 
