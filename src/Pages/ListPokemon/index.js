import React from 'react';
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from 'react-router-dom';
import { CardsContainer } from '../../Components/CardsContainer/styles';
import { GlobalContext } from '../../providers/GlobalContext';
import { goToDetailPage } from '../../Routes/CoordinatorRouter';
import CardPokemon from '../../Components/CardPokemon';
import Loading from "../../Components/Loading";
import './index.css';


export default function HomePage() {
    const history = useHistory()
    const classes = useStyles();

    const data = React.useContext(GlobalContext)
    data.pokeList.sort(function(a,b){return a.id - b.id})

    
    const addToPokedex = (newItem) => {
        const position = data.pokeList.findIndex((item) => item.id === newItem.id)       
        let newPokeList = [...data.pokeList]
        if (position !== -1) {
            data.setPokedex( array => [...array, newItem])
            newPokeList.splice(position,1)
        }  
        data.setPokeList(newPokeList)
        data.setPopUp(!data.popUp)
    }
    
    const renderPokeList = data.pokeList.map( (item) => {
        return (
            <CardPokemon
                key={item.id}
                name={item.name.toUpperCase()}
                img={item.sprites.front_default}
                goToDetail={() => goToDetailPage(history, item.id)}
                btnFunction={() => addToPokedex(item)}
                btnName="Adicionar">

           </CardPokemon>
        )
    })

    return (
        <div>
            <AppBar position="sticky">
                <Toolbar>
                    <Button
                    variant="contained"
                    color="secondary"
                    style={{margin: "10px"}}
                    onClick={() => history.push("/")}>
                    HOME
                    </Button>
                
                    <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => history.push("/pokedex")}>
                    Favoritos
                    </Button>
                
                    <a href="#top">
                        <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="logo-pokemon" className={classes.logo} />
                    </a>
                </Toolbar>
            </AppBar>

            <CardsContainer>
                {data.pokeList[0] ? renderPokeList : <Loading/>}
            </CardsContainer>
        </div>
    )
}


const useStyles = makeStyles(() => ({

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