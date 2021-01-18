export const Home = (history) => {
    history.push('/')
}


export const HomePage = (history) => {
    history.push('/lista')
}


export const pokedexPage = (history) => {
    history.push('/pokedex')
}

export const detailPage = (history, pokeId) => {
    history.push(`/detail/${pokeId}`)
}
