import React, { Component, useState, useEffect, Fragment } from 'react';
import RestaurantList from '../../components/Restaurants/RestaurantList';
import RestaurantForm from '../../components/Restaurants/RestaurantForm';
import { withCookies } from 'react-cookie';


class Restaurant extends Component{

    state = {
        restaurantData: [],
        token: this.props.cookies.get('mr-token')

    }

    componentDidMount(){
        fetch(
            'http://localhost:3000/api/v1/restaurants/',
          {
            method: "GET",
            headers: new Headers({
                'Authorization': 'Basic ' + Buffer.from('jona@example.com:testing123').toString('base64'),
            })
          }
        ).then(resp => resp.json())
        .then(res => this.setState({restaurantData: res}))  
        .catch( error => console.log(error))

    }
    render(){
        
        if(this.state.restaurantData <= 0) {
            return <Fragment><h1>Fetching....</h1></Fragment>

        } else {
        return(
            <Fragment>
                <div>
                    <section>
                        {/* <RestaurantForm  /> */}
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


// const restaurant = () => {
//     const [restaurantData, setResstaurantList] = useState([])
    
//     useEffect(() => {
//         fetch(
//             'http://localhost:3000/api/v1/restaurants/',
//           {
//             method: "GET",
//             headers: new Headers({
//                 'Authorization': 'Basic ' + Buffer.from('jona@example.com:testing123').toString('base64'),
//             })
//           }
//         )   
//           .then(response => response.json())
//           .then(restaurantData => setResstaurantList(restaurantData))
//           .catch(error => console.log(error));
//       },[]);
    

    
   
//     if(restaurantData <= 0) {
//         return <Fragment><h1>Fetching....</h1></Fragment>
//     } else {
//         return (
//             <div>
//                 <section>
//                     {/* <RestaurantForm /> */}
//                 </section>
//                 <br/>
//                 <section>
//                     <RestaurantList restaurants={restaurantData}/>
//                 </section>
//             </div>
//         )};
//     }


// export default restaurant;