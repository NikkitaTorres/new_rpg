const characterClasses = {
  warrior: {
    name: 'Warrior',
    health: 100,
    attack: 10,
    defense: 5,
  },
  mage: {
    name: 'Mage',
    health: 80,
    attack: 15,
    defense: 3,
    magicPower: 20,
  },
  // Add more classes as needed
};

//UI Logic
function createCharacter() {
  const selectedClass = document.getElementById('characterClass').value;
  
  if (!characterClasses[selectedClass]) {
    alert(`Invalid character class: ${selectedClass}`);
    return;
  }

  const newCharacter = {
    class: characterClasses[selectedClass].name,
    ...characterClasses[selectedClass],
  };

  console.log('New Character:', newCharacter);
}