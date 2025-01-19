import React, { useState } from 'react';

export const Permutation = () => {
//   const [randomNumber, setRandomNumber] = useState(null);
  const [input, setInput] = useState('');
  const [permutations, setPermutations] = useState([]);

  // Helper function to generate pairs (permutations of size 2)
    let arr = ['H', 'K', 'Y', 'D', 'L'];
    let result = [];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        result.push([arr[i], arr[j]]);
      }
    }

  // Function to handle input and calculate permutations
//   const handleInputChange = (e) => {
//     const value = e.target.value;
//     setInput(value);

//     const elements = value.split(',').map(item => item.trim()).filter(Boolean);
//     const allPermutations = getPermutations(elements);
//     setPermutations(allPermutations);
//   };

    const randomInt = Math.floor(Math.random() * permutations.length); // Random integer between 0 and length of permutations
    
  return result[randomInt];
}
