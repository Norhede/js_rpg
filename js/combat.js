function startCombat() {
    let level = document.getElementById("monsterLevel").value;
    let boss = document.getElementById("monsterBoss").checked;
    if (boss) {
        document.getElementById("newCombat").innerHTML = BOSS_MONSTERS[level-1].name + " (BOSS)";
    }
    else {
        let whichMonster = Math.floor(Math.random() * 3);
        switch(level) {
            case '1':
                document.getElementById("newCombat").innerHTML = LEVEL_1_MONSTERS[whichMonster].name;
                break;
            case '2':
                document.getElementById("newCombat").innerHTML = LEVEL_2_MONSTERS[whichMonster].name;
                break;
            case '3':
                document.getElementById("newCombat").innerHTML = LEVEL_3_MONSTERS[whichMonster].name;
                break;
            case '4':
                document.getElementById("newCombat").innerHTML = LEVEL_4_MONSTERS[whichMonster].name;
                break;
            case '5':
                document.getElementById("newCombat").innerHTML = LEVEL_5_MONSTERS[whichMonster].name;
                break;
            default:
                document.getElementById("newCombat").innerHTML = "Something wrong";
        }
    }
} 