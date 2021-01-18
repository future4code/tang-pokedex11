import React from 'react'
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { goToDetailPage } from '../../Routes/CoordinatorRouter';
import { CardsContainer } from '../../Components/CardsContainer/styles'
import {GlobalContext} from '../../providers/GlobalContext'
import CardPokemon from '../../Components/CardPokemon'
import './index.css'

export default function PokedexPage(props) {
    const { history } = props;
    const classes = useStyles();
    const data = React.useContext(GlobalContext)

    data.pokeList.sort(function(a,b){return a.id - b.id})
    data.pokedex.sort(function(a,b){return a.id - b.id})


    const removeFromPokedex = (removedItem) => {
        const position = data.pokedex.findIndex((item) => item.id === removedItem.id)       
        let newPokedex = [...data.pokedex]
        if (position !== -1) {
            newPokedex.splice(position, 1)
            data.setPokeList( array => [...array, removedItem])            
        } 
        data.setPokedex(newPokedex)
    }
    
    const renderPokedex = data.pokedex.map((item) => {
        return (
            <CardPokemon
                key={item.id}
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history, item.id)}
                btnFunction={() => removeFromPokedex(item)}
                btnName="Remove"
            />
        )
    })


    return (
        <div>
            
       <AppBar position="sticky">
            <Toolbar>
            
            <Button
                variant="contained"
                color="secondary"
                onClick={() => history.push("/lista")}>
                Voltar para Lista de Pokemons
                </Button>
            
            <a href="#top"><img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="logo-pokedex" className={classes.logo} /></a>

            </Toolbar>
      </AppBar>

    <CardsContainer>
        {renderPokedex}
    </CardsContainer>
        </div>
    )
}

const useStyles = makeStyles((theme) => ({
  pokedexContainer: {
    paddingTop: "20px",
    paddingLeft: "35px",
    paddingRight: "35px",
  },
  cardMedia: {
    margin: "auto",
  },
  cardContent: {
    textAlign: "center",
  },
  logo: {
    position: "absolute",
    right: 25,
    width: 100,
    top: 15
  }
}));
