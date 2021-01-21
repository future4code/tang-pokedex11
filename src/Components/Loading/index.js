import React from 'react'
import loading from "../../image/pokemons.gif";
import styled from 'styled-components'

const LoadingContainer = styled.div `
    display: flex;
    height: 85vh;
    background-color: #eeecee;
    justify-content: center;
    align-items: center;
`

export default function Loading() {
    return (
        <LoadingContainer>
            <img src={loading} alt="Loading..." />
        </LoadingContainer>
    )
}

