import React from 'react'
import { Toolbar, AppBar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { detailPage } from '../../Routes/CoordinatorRouter';
import { StyleContainer } from '../../style';
import {GlobalContext} from '../../providers/GlobalContext'
import CardPokemon from '../../Components/CardPokemon'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './index.css'

export default function PokedexPage(props) {
    const { history } = props;
    const classes = useStyles();
    toast.configure();
    const data = React.useContext(GlobalContext)

    data.pokedex.sort(function(a,b){return a.id - b.id})

    const removeFromPokedex = (removedItem) => {
        const position = data.pokedex.findIndex((item) => item.id === removedItem.id)       
        let newPokedex = [...data.pokedex]
        if (position !== -1) {
          data.setPokeList(array => [...array, removedItem])
          newPokedex.splice(position, 1)
        } 
        data.setPokedex(newPokedex)
    }
  
    const notifyWarn = () => {
      toast.warn("Pokémon removido com sucesso!", {
        autoClose: 2000,
        position: toast.POSITION.TOP_CENTER,
        
      })
    }
    
  const renderPokedex = data.pokedex.map((item) => {
    return (
      <React.Fragment>
        <CardPokemon
            key={item.id}
            name={item.name.toUpperCase()}
            img={item.sprites.front_default}
            goToDetail={() => detailPage(history, item.id)}
            btnFunction={() => { notifyWarn(); removeFromPokedex(item)}}
            btnName="Remove"

        />
      </React.Fragment>
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
            
            <a href="#top">
              <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="logo-pokedex" className={classes.logo} />
            </a>

            </Toolbar>
      </AppBar>

      <StyleContainer>
          {renderPokedex}
      </StyleContainer>
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
