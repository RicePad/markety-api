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
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('jona@example.com:testing123').toString('base64'),
            })
          }
        )   
          .then(response => response.json())
          .then(restaurants => setResstaurantList(restaurants))
          .catch(error => console.log(error));
      },[]);
    

    
    const classes = useStyles()
   
    if(restaurants <= 0) {
        return <Fragment><h1>Fetching....</h1></Fragment>
    } else {
        return (
            <div>
            <Grid container spacing={4}>
                    {restaurants && restaurants.map((restaurant) => {
                        return <Grid item key={restaurant.id} xs={12} sm={6} md={4}>
                                    <Card className={classes.card}> 
                                        <CardMedia
                                            className={classes.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"

                                        />
                                        <CardContent className={classes.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {restaurant.name}
                                            </Typography>
                                            <Typography>
                                                {restaurant.address}
                                            </Typography>
                                            <Typography>
                                                {restaurant.city}
                                            </Typography>
                                            <Typography>
                                                {restaurant.state}
                                            </Typography>
                                            <Typography>
                                                {restaurant.phone_number}
                                            </Typography>
                                        </CardContent>
                                    </Card>
                            </Grid>
                    } )}
                </Grid>
            </div>
        )};
    }


export default restaurant;