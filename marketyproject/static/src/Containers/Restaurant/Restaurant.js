import React, { Component, useState, useEffect, Fragment } from 'react';
import RestaurantList from '../../components/Restaurants/RestaurantList';
import RestaurantForm from '../../components/Restaurants/RestaurantForm';
import { withCookies } from 'react-cookie';


class Restaurant extends Component{

    state = {
        restaurantData: [],
        editedRestaurantData: null,        
        token: this.props.cookies.get('mr-token')

    }
        
    
    componentDidMount(){
        const URL_ENDPOINT = 'http://localhost:3000/api/v1/restaurants/';
        if(this.state.token){
            fetch(URL_ENDPOINT, {
                method: 'GET',
                headers: {
                'Authorization': `Token ${this.state.token}`
                }
            }).then( resp => resp.json())
            .then( res => this.setState({restaurantData: res}))
            .catch( error => console.log(error))
            } else {
            window.location.href = '/react-register';
            }
        
    }
    

    render(){
        
        if(this.state.restaurantData <= 0) {
            return <Fragment><h1>Fetching....</h1></Fragment>

        } else {
        return(
            <Fragment>
                <div>
                    <section>
                        <RestaurantForm 
                            token={this.state.token}
                            newRestaurant={this.addRestaurantInfo}
                            restaurant={this.state.editedRestaurantData}
                        
                        />
                    </section>
                    <br/>
                    <section>
                        <RestaurantList restaurants={this.state.restaurantData} />
                    </section>
             </div>
            </Fragment>
        
        )}
    }
}

export default withCookies(Restaurant);