import React, { Component, Fragment } from 'react';
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
    
    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const classes = useStyles()
  
    return(
        <Fragment>
            <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
                {cards.map((card) => {
                    return <Grid item key={card} xs={12} sm={6} md={4}>
                                <Card className={classes.card}> 
                                    <CardMedia
                                        className={classes.cardMedia}
                                        image="https://source.unsplash.com/random"
                                        title="Image title"
                                        title="Image title"

                                    />
                                    <CardContent className={classes.cardContent}>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            Heading
                                        </Typography>
                                        <Typography>
                                            This is a media card. You can use this section to describe the content.
                                        </Typography>
                                    </CardContent>
                                </Card>
                           </Grid>
                } )}
            </Grid>
            </Container>
     </Fragment>

    )
}


export default restaurant;