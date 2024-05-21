console.log("peticiones")

const obterPokemon = async () => {
 const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
const data = await respuesta.json()
console.log(data)
}
obterPokemon()