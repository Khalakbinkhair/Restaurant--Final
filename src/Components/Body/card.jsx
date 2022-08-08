
import React, { useState, useEffect } from "react";
import '../../Assests/css/style.css'
import { Carousel } from 'react-responsive-carousel';
import Coffee1 from '../../Assests/images/coffee1.png'
import Meals from '../../Assests/images/meals.png'
import Restro_photo from '../../Assests/images/restro_logo.png'


import Coffee_item from './coffee_item';
import Meal from './meal';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { Link } from "react-router-dom";


const Card = (props) => {


  


    return (


        <div className='row'>
            <div className='col-md-12'>
                <div className='align-items-center card background_img '>
                    <div className='card head_card'>
                        <div className='row justify-content-center'>
                            <div className='col-md-12 body_text'>
                                <label>Select Coffee Type  </label>
                                <select className='form-select form-select-sm  coffee-item' >
                                    <option value="" >Select Coffee Type</option>
                                    <option value="hot" >Hot</option>
                                    <option value="Cold">Cold</option>
                                </select>
                            </div>
                        </div>
                       
                        <Coffee_item coffee_img={Coffee1} coffee_name='Hazzle Nut' coffee_specification='Luwak beans ' coffee_price='900' />
                        <Coffee_item coffee_img={Coffee1} coffee_name='Hazzle Nut' coffee_specification='Luwak beans ' coffee_price='900' />
                        <Coffee_item coffee_img={Coffee1} coffee_name='Hazzle Nut' coffee_specification='Luwak beans ' coffee_price='900' />
                        <Coffee_item coffee_img={Coffee1} coffee_name='Hazzle Nut' coffee_specification='Luwak beans ' coffee_price='900' />
                    </div>
                    <div className='card meal_card'>
                        <div className='d-flex flex-row justify-content-center meal-text'>
                            <label>For Hunger : </label>
                        </div>
                        <div className='row justify-content-center'>
                            <Carousel >
                                <Meal coffee_img={Coffee1} item_name_1='Brownie' item_name_2='Chocolate' price_1='240' price_2='210' />
                                <Meal coffee_img={Coffee1} item_name_1='Brownie' item_name_2='Chocolate' price_1='240' price_2='210' />
                                <Meal coffee_img={Coffee1} item_name_1='Brownie' item_name_2='Chocolate' price_1='240' price_2='210' />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}

export default Card;





