//      TODO list for javascript_rpg

//      UI    
// DONE! (04-09-2020) Build up a design skeleton
// DONE! (04-09-2020) Create 4 tabs (Character, Combat, Item & Stat Upgrades, About)
// DONE! (04-09-2020) Create a pop-up card for when the page loads, with the description of the game and basic functionality
// DONE! (04-09-2020) Create a preliminary overall style for the project
// DONE! (04-09-2020) Write up a preliminary description for the pop-up card
// DONE! (04-09-2020) Design a preliminary template for the character tab
// DONE! (04-09-2020) Design a preliminary template for the combat tab
// DONE! (04-09-2020) Design a preliminary template for the stat & item upgrades tab
// DONE! (04-09-2020) Write up a preliminary description for the technical description tab

//      CHARACTER
// DONE! (04-09-2020) Create a character.js file
// DONE! (04-09-2020) Create a Character object containing variables for name, level, attack_power, defense_power, attack_speed, health_points, materials

//      MONSTER
// DONE! (04-09-2020) Create a monster.js file
// DONE! (04-09-2020) Create a Monster object containing variables for name, level, attack_power, defense_power, attack_speed, health_points, exp_gain
// DONE! (04-09-2020) Create arrays for each level with all the different monsters
// TODO Create individual values for the monsters

//      COMBAT
// DONE! (04-09-2020) Create a combat.js file
// TODO Create preliminary combat system
// TODO Create implementation for drops

//      UPGRADES
// DONE! (04-09-2020) Create an upgrade.js file
// TODO Create tables for upgrade costs



/*

Notes to convert to TODO
----------------------------------------------------------------------------------------------------
User Interface

Tabs

- Character
    Character overview, stats, equipment, crafting drops
- Combat
    Overview over all levels with max stats, different buttons for normal & special monsters
    Result shows up at the bottom once the button has been clicked and combat has been calculated
- Stat & Item Upgrades
    Split between stat and item upgrades, either split vertically or horizontally
- Technical Description
    Complete description of the tehcnical approach, including descriptions of data structures

Character

- Character Information
    Name, Level
- Stats
    Attack Power, Defence Power, Attack Speed, Health Points
- Equipment
    Weapon, Armor, Boots, Shield 

Monster

3 or 4 different monsters per level, a rare one with drops used for upgrading equipment
All 3 monsters/level have different max stats, special monster maxing all stats for the level
The one with highest Attack Speed has lowest Attack&Defence but highest Health
Start with 5 levels
* Have every level have an array with the different monsters, so the monsters can be called from the array with Math.random

Combat

One of two ideas:

- 1
    Show every round result and end result - requires more space, but shows more raw data through
    individual hits and health left for every round
- 2
    Show all combat stats at once, total combat calculated and pull stats from that, including
    number of rounds, average hit, 

Upgrades

- Stats
    Upgrading stats by using exp gained from combat, formula tbd
- Equipment
    Upgrading equipment by using special drops gained from special monsters, formula tbd



Monsters:
1: Chicken, Rat, Moth, (Bat)
2: Cow, Deer, Goat, (Cave Worm)
3: Mummy, Vampire, Zombie, (Minotaur)
4: Hydra, Basilisk, Iron Golem, (Fire Elemental)
5: Cyclops, Gorgon, Necromancer, (Dragon)

*/ 