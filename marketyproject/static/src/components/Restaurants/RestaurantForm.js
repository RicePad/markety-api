import React, { Fragment, useState, useEffect } from 'react';
import { FormControl, TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Card from '../UI2/Card';


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

const restaurantForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    
    const classes = useStyles();


   const onSubmitHandler = () => {
        //POST REQUEST ACTION TO CREATE A RESTAURANT AFTER SUBMITTING FORM
        console.log("submitting restaurant info")
    }

    return(
        <Fragment>
           <Card> 
            <form className={classes.root}Submit={onSubmitHandler}>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>
                <div>
                    <TextField 
                        fullWidth
                        id="outlined-basic" 
                        label="Name" 
                        variant="outlined"
                        defaultValue="Hello World"
                        />
                </div>

                </form>
            </Card>
        </Fragment>
    )
}

export default restaurantForm;