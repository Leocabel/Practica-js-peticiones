console.log("peticiones")

const Obtener = () => {
    console.log("0btener")
}
const buttonObtener = document.getElementById("button-obtener")

//buttonObtener.addEventListener("click", obtener)
buttonObtener.addEventListener("click", async () => {
    console.log('obtener')
    const pokemonData = await obterPokemon()

    const pokemonArticle = document.getElementById("Pokemon")
    const h3 = document.createElement("h3")
    h3.innerText = pokemonData.name

    pokemonArticle.appendChild(h3)

    // crear elemento img
    const img = document.createElement("img")
    img.src = pokemonData.sprites.front_default
    pokemonArticle.appendChild(img)
})

const obterPokemon = async () => {
    let nombrePokemon = "pikachu"
    const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombrePokemon}`)
    const data = await respuesta.json()
    console.log(data)

    return data
}
