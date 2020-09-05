const statUpgradeCosts = [5, 15, 30, 50, 75, 105, 140, 180, 225];

const equipUpgradeCosts = [2, 6, 12, 20, 30, 42, 56, 72, 90];

function calculateStatCost() {
    let statToUpgrade = document.getElementById("statUpgradeSelect").value;
    document.getElementById("chosenStat").innerHTML = statToUpgrade;
    document.getElementById("upgradeStat").innerHTML = "Upgrade " + statToUpgrade;
    switch(statToUpgrade) {
        case 'Attack Power':
            let currentAttackPowerLevel = player.attack_power_level;
            let nextAttackCost = statUpgradeCosts[currentAttackPowerLevel-1];
            document.getElementById("upgradeCost").innerHTML = nextAttackCost;
            break;
        case 'Defence Power':
            let currentDefencePowerLevel = player.defence_power_level;
            let nextDefenceCost = statUpgradeCosts[currentDefencePowerLevel-1];
            document.getElementById("upgradeCost").innerHTML = nextDefenceCost;
            break;
        case 'Attack Speed':
            let currentAttackSpeedLevel = player.attack_speed_level;
            let nextSpeedCost = statUpgradeCosts[currentAttackSpeedLevel-1];
            document.getElementById("upgradeCost").innerHTML = nextSpeedCost;
            break;
        case 'Health Points':
            let currentHealthPointsLevel = player.health_points_level;
            let nextHealthCost = statUpgradeCosts[currentHealthPointsLevel-1];
            document.getElementById("upgradeCost").innerHTML = nextHealthCost;
            break;
        default:
            document.getElementById("upgradeCost").innerHTML = 'Something wrong';
    }
}