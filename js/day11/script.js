const url = 'https://pokeapi.co/api/v2/pokemon/';
let pokemonDetails = [];
async function getData(){

    //fetch data from the url
    const response = await fetch(url);
    console.log(response);

    const data = await response.json();
    console.log(data);
    pokemonDetails = data.results;
    for (const pokemon of pokemonDetails){
        document.querySelector('div').innerText += pokemon.name + '\n';
    }
}

getData();
console.log(pokemonDetails);





//convert response into object

// GET, POST, PUT, DELETE

// CRUD - Create Read Update delete
// CORS - Cross Origin Resource Sharing


// Q. Show the list of all pokemons on the webpage using the pokeapi




