const main = document.getElementById('contenedor');
let card='';

function fetchPokemon(id){
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then(response => response.json())
    .then(data => {
        crearCard(data);
    })
};

function cargarPokemons(number){
    for(let i = 1; i <= number; i++){
        fetchPokemon(i);
    }
}

function crearCard(pokemon){
    card=
    `
        <div class="card">
            <div class="card-img">
                <img src='${pokemon.sprites.front_default}'/>
            </div>
            <div class="card-info">
                <span class="card-info-id">
                    #${pokemon.id.toString().padStart(3,0)}
                </span>
                <span class="card-info-name">
                    ${pokemon.name[0].toUpperCase()+pokemon.name.substring(1)}
                </span>
            </div>
        </div>
    `;
    main.innerHTML+=card
}

cargarPokemons(151)