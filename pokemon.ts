import pokemon from "pokemon";


const allPokemon: readonly string[] = pokemon.all();

for(let i=0, p = 1, j = 1; i<100;  i = p, p = j) {
    j = i + p;
    console.log("Pokemon #" + (j), allPokemon[j]);
}
