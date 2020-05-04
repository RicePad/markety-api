import React, { Fragment, useState, useEffect } from 'react';
import { TextField, Button, Card, CardContent, Typography, Input } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import styles from './RestaurantForm.module.css';
import RestaurantMenuSharpIcon from '@material-ui/icons/RestaurantMenuSharp';
import BackspaceSharpIcon from '@material-ui/icons/BackspaceSharp';
import axios from 'axios'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";

// add authentication with correct id 
// change database attributes to correct type
// add ui design to attributes

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
    const [restaurantData, setRestaurantData] = useState(
        {name: '', phone_number: '', address: '', 
        city: '', state: '', about: '', food_minimum: '',
        delivery_fee: '', is_delivery: '' }
        )
    
    const classes = useStyles();

    const handleChange = (event) => {
        // console.log('event:', event)
        setRestaurantData({...restaurantData, [event.target.name]: event.target.value})
    }

    const submitHandler = (event) => {
            console.log("submitting restaurant info to API")
            console.log('restaurantdata:', restaurantData)

            event.preventDefault()
            //POST REQUEST ACTION TO CREATE A RESTAURANT AFTER SUBMITTING FORM
            
            const URL_ENDPOINT = 'http://localhost:3000/api/v1/restaurants/';
            
            const username = 'jona@example.com'
            const password = 'testing123'

            const token = Buffer.from(`${username}:${password}`, 'utf8').toString('base64')
              
            axios.post(URL_ENDPOINT, restaurantData, {
                headers: {
                    'Authorization': `Basic ${token}`,
                    "content-type": "application/json"
                  }})
            .then((response) => {
                console.log(response)
            })
            .catch((error) => {
                console.log(error)
            }) 
           

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
                                    onChange={handleChange}
                                    name="name"
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="phone_number"
                                  


                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="address"

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="city"
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="state"
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="about"
                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="food_minimum"

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="delivery_fee"

                                    />
                            </div>
                            <div>
                                <TextField 
                                    fullWidth
                                    id="outlined-basic" 
                                    label="Name" 
                                    variant="outlined"
                                    onChange={handleChange}
                                    name="is_delivery"
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