import React, { useEffect, useState } from 'react'
import Header from '../layouts/header'
import Footer from '../layouts/footer'
import axios from 'axios'
import Card from '../Body/card'
import Restro_intro from '../Restrurant-Intro/restro-intro'
import Coffee1 from '../../Assests/images/coffee1.png'
import Meals from '../../Assests/images/meals.png'
import Restro_photo from '../../Assests/images/restro_logo.png'
import Background_img from '../../Assests/images/background_img.png'
import { useParams } from 'react-router-dom'



const Home = () => {

    const{id}=useParams();
    const[restaurant,setRestaurant]=useState([]);
    useEffect(()=>{
        axios.get("restaurant/"+id)
        .then(resp=>{
         console.log(resp.data);
         setRestaurant(resp.data);
    //      }).catch(err=>{
    //     console.log(err);
     });
    },[]);

    return (
        <div>

            <div><Header restro_title={restaurant.restaurant_name} /></div>
            <div className='container-fluid'>
         <Restro_intro restro_intro={restaurant.slogan}  restro_intro_imgurl={restaurant.restaurant_photo} />
         <Card body_imgurl={Background_img}  meals_img={Meals} meals_name='Brownie' meals_price='200' />  
            </div>

            <div><Footer footer_name={restaurant.restaurant_name} footer_follow='Follow us on' footer_all_rights='Copyright © 2022CoffeeAroma team. All rights reserved.' /></div>
        </div>
    )
}
export default Home;