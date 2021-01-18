import React from 'react'
import { Grid, Card, CardMedia, Typography, CardContent, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
 

export default function CardPokemon(props) {
  const classes = useStyles();
 

    return (
     <Grid className={classes.pokedexContainer} item xs={6} sm={3} key={props.id}>
        <Card style={{backgroundColor: "rgb(247, 247, 247)"}} variant="outlined">
            <CardMedia
            className={classes.cardMedia}
            variant="outlined"
            image={props.img}
            alt={props.name}
            style={{ width: "200px", height: "200px", backgroundColor: "rgb(247, 247, 247)" }}
                />

            <CardContent className={classes.cardContent}
                style={{ backgroundColor: "rgb(247, 247, 247)" }}>

                <Typography component="div">
                    <Box fontWeight="fontWeightBold" m={1}>
                        {props.id}{props.name.toUpperCase()}
                    </Box>
                </Typography>

                <Button variant="contained"
                    color="secondary"
                    style={{ margin: 17 }}
                    onClick={() => { props.goToDetail(); }}
            >
                    Detalhes
                </Button>
                
                <Button variant="contained"
                    color="secondary"
                    onClick={() => { props.btnFunction();}}>
                    {props.btnName}
            </Button>
            
            </CardContent>
        </Card>

     </Grid>
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