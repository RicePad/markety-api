import React from 'react';
import { Grid, Card, CardMedia, CardContent, Typography } from '@material-ui/core';
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

const restaurantList = (props) => {
    
    const classes = useStyles()

    return(
        <Grid container spacing={4}>
                    {props.restaurants && props.restaurants.map((restaurant) => {
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
    )
}


export default restaurantList;