import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { AppBar, Toolbar, Button, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Loading from '../../Components/Loading'
import { BASE_URL } from '../../api/apiPokemon'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';


export default function DetailsPage() {
    const history = useHistory()
    const classes = useStyles();
    const [pokemon, setPokemon] = useState({})
    const params = useParams()

    useEffect(() => {
        axios.get(`${BASE_URL}${params.pokeId}`).then((res) =>{
            setPokemon(res.data)
            console.log(res.data)
        }).catch((error) => {
            alert(`${error}: Try again`)
        })
    }, [])
    

    
const renderPage = () => {
  return (
    <React.Fragment>
        <AppBar position="sticky">
            <Toolbar>
                <Button
                variant="contained"
                color="secondary"
                onClick={() => history.push("/lista")}>
                Voltar para Lista de Pokemons
                </Button>
                
                <a href="#/">
                    <img src="https://cdn.bulbagarden.net/upload/4/4b/Pok%C3%A9dex_logo.png" alt="logo-pokedex" className={classes.logo} />
                </a>
            </Toolbar>
        </AppBar>


        <CssBaseline />
            <Container fixed>
                <Typography component="div" style={{ backgroundColor: 'rgb(247, 247, 247)', marginTop: '20px', height: '100%' }} >
                    <Typography variant="h3" style={{ textAlign: 'center'}}>{pokemon.name}</Typography>
                    <CardMedia
                        className={classes.cardMedia}
                        variant="outlined"
                        image={pokemon.sprites.front_default}
                        alt={pokemon.name}
                        style={{ width: "260px", height: "260px", backgroundColor: "rgb(247, 247, 247)" }}
                            />

                    <Typography variant="h4" style={{ textAlign: 'center'}}>Skills do Pokémon</Typography>
                    <div style={{ textAlign: 'center'}}>
                        {pokemon.stats.map((item) => {
                        return (
                        <p>{item.stat.name} : {item.base_stat}</p>
                        )
                        })}
                    </div>
                    <br/>
                    <Typography variant="h4" style={{ textAlign: 'center'}}> Tipo:</Typography>
                
                    <div style={{ textAlign: 'center'}}>
                    {pokemon.types.map((item) => {
                        return (
                        <p>{item.type.name}</p>
                        )
                    })}
                    </div>
                    <br/>
                </Typography>
            </Container>
    </React.Fragment>
        
    )
}

    return (
        <div>
            {pokemon.id? renderPage() : <Loading/> }          
        </div>
    )
}


const useStyles = makeStyles(() => ({
  root: {
      height: 15,
      width: '100%',
    },
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