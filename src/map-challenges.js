// Challenge #1

const nums = [1, 2, 3, 4, 5];

console.log(nums.map(item => item * item))

// Challenge #2

const names = ['alice', 'jose', 'pedro', 'diego'];

console.log(names.map(name => name.charAt(0).toUpperCase() + name.slice(1)))

// Challenge #3

const pokemon = ['Bulbasaur', 'Charmander', 'Squirtle'];

console.log(pokemon.map(pokemon => `<p>${pokemon}</p>`));