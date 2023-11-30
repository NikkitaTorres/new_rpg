const characterInventory = {
  warrior: {
    name: 'Warrior',
    inventory: ['sword', 'shield']
  },
  mage: {
    name: 'Mage',
    inventory: ['wand', 'spells']
  },
  // Add more classes as needed
};

const addItemToInventory = (character, item) => {
  /*if (!character || !character.inventory) {
    throw new Error('Invalid character object');
  }*/
  return {
    ...character,
    inventory: [...character.inventory, item],
    
  };
};

const warriorCharacter = characterInventory.warrior;
const updatedWarrior = addItemToInventory(warriorCharacter, 'armor');
console.log('Original Warrior:', warriorCharacter);
console.log('Updated Warrior:', updatedWarrior);

const mageCharacter = characterInventory.mage;
const updatedMage = addItemToInventory(mageCharacter, 'robes');

console.log('Original Mage:', mageCharacter);
console.log('Updated Mage:', updatedMage);
export  { characterInventory, addItemToInventory }