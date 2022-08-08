import React from 'react'
import '../../Assests/css/style.css'
const Meal = (props) => {

    return (


        <div>
            <div className="container">
            <div className='flex-row d-flex'>
                <div className='col-md-4   meal_content'  >

                    <img className='img-fluid' src={props.coffee_img} />
                    <p className='m-0'>    Item Name  {props.item_name_1} </p>
                    <p className='m-0'>    Price {props.price_1}</p>

                </div>
                <div className='col-md-4 meal_content' >
                    <img className='img-fluid' src={props.coffee_img} />
                    <p className='m-0'>   Item Name  {props.item_name_2}   </p>
                    <p className='m-0'>   Price {props.price_2}</p>
                </div>
                <div className='col-md-4  meal_content' >
                    <img className='img-fluid' src={props.coffee_img} />
                    <p className='m-0'>    Item Name {props.item_name}  </p>
                    <p className='m-0'>   Price {props.price}</p>
                </div>

            </div>
        </div>

        </div>

    )
}
export default Meal;