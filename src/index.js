import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

import  characterClasses  from './character-creation.js';

document.getElementById('characterForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the default form submission
  
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
});