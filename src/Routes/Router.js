import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Paginas
import Home from "../Home/Home"
import Lista from '../Pages/ListPokemon'
import DetailPokemon from '../Pages/DetailPokemon'
import FavoritePokemon from '../Pages/FavoritePokemon'


const Routes = () => {

    return (
            <Switch>
                <Route exact path="/" render={(props) => <Home {...props} />} />
                <Route exact path="/lista" render={(props) => <Lista {...props} />}/>
                <Route exact path="/pokedex" render={(props) => <FavoritePokemon {...props} />}/>
                <Route exact path="/detail/:pokeId" render={(props) => <DetailPokemon {...props} />}/>
                {/* <Route >
                        <Error />
                </Route> */}
            </Switch>
    )
}

export default Routes; 

