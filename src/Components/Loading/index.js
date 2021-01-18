import React from 'react'
import loading from "../../image/pokemons.gif";
import { LoadingContainer } from './styles';


export default function Loading() {
    return (
        <LoadingContainer>
            <img src={loading} alt="Loading..." />
        </LoadingContainer>
    )
}
