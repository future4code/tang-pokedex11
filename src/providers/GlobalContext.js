import React, { useState, useEffect } from 'react'
import { BASE_URL } from "../api/apiPokemon";
import axios from "axios"

export const GlobalContext = React.createContext();

 export const GlobalProvider = (props) => {

  const [pokeList, setPokeList] = useState([])
  const [pokedex, setPokedex] = useState([])
  const [popUp, setPopUp] = useState(false)
  const [pokemon, setPokemon] = useState({})
  const data = { pokeList , setPokeList , pokedex , setPokedex , popUp , setPopUp , pokemon , setPokemon }
  
  useEffect(() =>{
    let i = 1;
    do {
      axios.get(BASE_URL+i).then((response) => {
        setPokeList( array => [...array, response.data])
      }).catch((error) => {
        console.log(error)
      })
      i++
    } while (i<21);
  }, [setPokeList])


  return (
    <GlobalContext.Provider value={data}>
      {props.children}
    </GlobalContext.Provider>
  );
}