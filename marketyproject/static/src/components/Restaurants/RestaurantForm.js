import React, { Fragment, useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './RestaurantForm.module.css';
import RestaurantMenuSharpIcon from '@material-ui/icons/RestaurantMenuSharp';
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';



const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(3),
        width: '25ch',
      },
      button: {
        margin: theme.spacing(10),
      },
      cardRoot: {
        minWidth: 100,
    },


    },
  }));

const restaurantForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    const [enteredAddress, setEnteredAddress] = useState('');
    const [enteredCity, setEnteredCity] = useState('');
    const [enteredState, setEnteredState] = useState('');
    const [enteredAbout, setEnteredAbout] = useState('');
    const [enteredFoodMinimum, setEnteredFoodMinimum] = useState('');
    const [enteredDeliveryFee, setEnteredDeliveryFee] = useState('');
    const [enteredIsDelivery, setEnteredIsDelivery] = useState('');

    
    
    const classes = useStyles();


    const submitHandler = (event) => {
            console.log("submitting restaurant info to API")
            event.preventDefault()
            //POST REQUEST ACTION TO CREATE A RESTAURANT AFTER SUBMITTING FORM
            alert("submitting restaurant info to API")
        }

    return(
        <Fragment>
            <section className={styles.restaurantform}>
                <Card className={classes.cardRoot} variant="outlined" >
                    <CardContent>
                        <Typography gutterBottom variant="h3" component="h2" align="center">
                            Create Restaurant Profile
                        </Typography>
                        <form onSubmit={submitHandler} className={classes.root} >
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredName}
                                    onChange={(event) => {
                                        setEnteredName(event.target.value)
                                    }}
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredPhoneNumber}
                                    onChange={(event) => {
                                        setEnteredPhoneNumber(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredAddress}
                                    onChange={(event) => {
                                        setEnteredAddress(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredCity}
                                    onChange={(event) => {
                                        setEnteredCity(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredState}
                                    onChange={(event) => {
                                        setEnteredState(event.target.value)
                                    }}
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredAbout}
                                    onChange={(event) => {
                                        setEnteredAbout(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredFoodMinimum}
                                    onChange={(event) => {
                                        setEnteredFoodMinimum(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredDeliveryFee}
                                    onChange={(event) => {
                                        setEnteredDeliveryFee(event.target.value)
                                    }}

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    value={enteredIsDelivery}
                                    onChange={(event) => {
                                        setEnteredIsDelivery(event.target.value)
                                    }}
                                    />
                            </div>
                            <div className={styles.restaurant_form_actions}>
                                <Button
                                    endIcon={<RestaurantMenuSharpIcon />}
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    type="submit"

                                > Send
                                </Button>
                                <Button
                                    endIcon={<BackspaceSharpIcon />}
                                    className={classes.button}
                                    variant="contained"
                                    color="secondary"
                                    href="http://localhost:3000/react-view"
                                    
                                >
                                    Close
                                </Button>
                            </div>
                        </form>
                    </CardContent>
                    </Card>
            </section>
        </Fragment>
    )
}

export default restaurantForm;