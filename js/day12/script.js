// const url = 'https://pokeapi.co/api/v2/pokemon?limit=1500';
// let pokemonDetails = [];
// async function getData(){

//     //fetch data from the url
//     const response = await fetch(url);
//     console.log(response);

//     const data = await response.json();
//     console.log(data);
//     pokemonDetails = data.results;
//     let count = 1;
//     for (const pokemon of pokemonDetails){
//         document.querySelector('div').innerText +=  count + pokemon.name + '\n';
//         count++;
//     }
// }

// getData();
// console.log(pokemonDetails);

const button = document.createElement('button');
const h3 = document.createElement('h3');
document.querySelector('span').appendChild(button);
button.innerText = "Hello";

// Get 100 pokemon name and their detail from the API and show the name and detail in the webpage.




//convert response into object

// GET, POST, PUT, DELETE

// CRUD - Create Read Update delete
// CORS - Cross Origin Resource Sharing


// Q. Show the list of all pokemons on the webpage using the pokeapi




