import {characterClasses} from "../src/character-creation.js";
import {characterInventory, addItemToInventory} from "../src/inventory.js";
import { calculateDamage, calculateDamageTaken } from "../src/battle.js";

describe('Character Classes', () => {
  test('should contain a warrior class with correct properties', () => {
    expect(characterClasses.warrior).toEqual({
      name: 'Warrior',
      health: 100,
      attack: 10,
      defense: 5
    });
  });

  test('should contain a mage class with correct properties', () => {
    expect(characterClasses.mage).toEqual({
      name: 'Mage',
      health: 80,
      attack: 15,
      defense: 3,
      magicPower: 20
    });
  });

});


describe('Character Inventory', () => {
  test('should list items in warrior inventory', () => {
    expect(characterInventory.warrior).toEqual({
      name:'Warrior',
      inventory: ['sword', 'shield']
    });
  });

  describe('Character Inventory', () => {
    test('should list items in mage inventory', () => {
      expect(characterInventory.mage).toEqual({
        name:'Mage',
        inventory: ['wand', 'spells']
      });
    });
  
});
});

describe('Add Item to Inventory', () => {
  test ('should add an item to the warrior inventory', () => {
    addItemToInventory('warrior', 'armor');
    expect(characterInventory.warrior.inventory).toContain('armor');
  });

  test ('should add an item to the mage inventory', () => {
    addItemToInventory('mage', 'robes');
    expect(characterInventory.mage.inventory).toContain('robes');
  });
});

describe('Battle function', () => {
describe('Damage Output', () => {
  test ('should calculate damage dealt in battle for warrior', () => {
    const dealDamage = calculateDamage(characterClasses.warrior);
    expect(damageOutput).toBe(15);
  });
  test ('should calculate damage dealt in battle for mage', () => {
    const dealDamage = calculateDamage(characterClasses.mage);
    expect(damageOutput).toBe(12);
  });
});

  test ('should calculate damage taken in battle', () => {
    addItemToInventory('warrior', 'armor');
    expect(characterInventory.warrior.inventory).toContain('armor');
  });
});

