import React, { Fragment, useState, useEffect } from 'react';
import { FormControl, Input, InputLabel, FormHelperText  } from '@material-ui/core';


const restaurantForm = (props) => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredPhoneNumber, setEnteredPhoneNumber] = useState('');
    
    return(
        <Fragment>
            <FormControl>
                <InputLabel htmlFor="my-input">Email address</InputLabel>
                <Input id="my-input" aria-describedby="my-helper-text" />
                <FormHelperText id="my-helper-text">We'll never share your email.</FormHelperText>
            </FormControl>
        </Fragment>
    )
}

export default restaurantForm;