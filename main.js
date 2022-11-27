const tenColours = ['Red', 'Green', 'Yellow', 'Blue', 'Pink','Orange', 'Black', 'White', 'Brown', 'Purple'];
let randomColours = tenColours[Math.floor(Math.random()*tenColours.length)];
//console.log(randomColours);

const tenAnimals = ['Monkey', 'Giraffe', 'Elephant', 'Lion', 'Tiger', 'Bear', 'Snake', 'Pig', 'Frog', 'Hippo'];
let randomAnimals = tenAnimals[Math.floor(Math.random()*tenAnimals.length)];
//console.log(`This ${randomAnimals} has ${randomColours} spots and lives in England!`);

const tenLanguages = ['English', 'Arabic', 'Dutch', 'Spanish', 'French', 'Italian', 'German', 'Portugese', 'Mandarin', 'Hindi'];
let randomLanguages = tenLanguages[Math.floor(Math.random()*tenLanguages.length)];

const tenPatterns = ['Spots', 'Stripes', 'Fur', 'Scales', 'Eyes', 'Teeth', 'Legs', 'Hair', 'Skin', 'Ears'];
let randomPatterns = tenPatterns[Math.floor(Math.random()*tenPatterns.length)];

const tenVoices = ['Speaks', 'Shouts', 'Screams', 'Sings', 'Bellows', 'Whispers', 'Yells', 'Roars', 'Barks', 'Shrieks'];
let randomVoices = tenVoices[Math.floor(Math.random()*tenVoices.length)];

let generateRandom = `The ${randomAnimals} has ${randomColours} ${randomPatterns} and ${randomVoices} ${randomLanguages}`
console.log(generateRandom);