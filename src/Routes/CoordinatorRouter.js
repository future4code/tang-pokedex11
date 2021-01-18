export const Home = (history) => {
    history.push('/')
}


export const HomePage = (history) => {
    history.push('/lista')
}


export const goToPokedexPage = (history) => {
    history.push('/pokedex')
}

export const goToDetailPage = (history, pokeId) => {
    history.push(`/detail/${pokeId}`)
}
