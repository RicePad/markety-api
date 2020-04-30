import React, { useState, useEffect, Fragment } from 'react';
import { Container, Grid, Card, CardMedia, Button, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    
  }));


const restaurant = () => {
    const [restaurants, setResstaurantList] = useState([])
    
    useEffect(() => {
        fetch(
            'http://localhost:3000/api/v1/restaurants/',
          {
            method: "GET",
          }
        )   
          .then(response => response.json())
          .then(restaurants => setResstaurantList(restaurants))
          .catch(error => console.log(error));
      }, [restaurants]);
    


    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles()
    return (
        <div>
           {restaurants.map(restaurant => 
                <p>{restaurant.name}</p>)
           }
        </div>
      );
}


export default restaurant;