import {characterClasses} from "../src/character-creation.js";

const calculateDamage = (attacker, defender) => {
  const damage = Math.max(0, attacker.attack - defender.defense);
  return damage;
};

const attack = (attacker, defender) => {
  const damage = calculateDamage(attacker, defender);
  const updatedDefender = {
    ...defender,
    health: Math.max(0, defender.health - damage),
  };
  return updatedDefender;
};

const battle = (attacker, defender) => {
  const updatedDefender = attack(attacker, defender);

  if (updatedDefender.health === 0) {
    console.log(`${defender.name} has been defeated!`);
  } else {
    console.log (
      `${attacker.name} has attacked ${defender.name} for ${calculateDamage(attacker, defender)} damage. ${defender.name}'s remaining health: ${updatedDefender.health}`
    );
  }
  return updatedDefender;
};

const warrior = characterClasses.warrior;
const mage = characterClasses.mage;

const updatedMage = battle(warrior, mage);
const updatedWarrior = battle(mage, warrior);

export default calculateDamaage;