import React from 'react'
import '../../Assests/css/style.css'
import '../../Assests/script/custom.js'



const Coffee_item = (props) => {

    // $("#coffee-button").click(function(){


   
    //     alert( " Ok " );
    
    // });
       
    

    return (


        <div className='row coffee-card-detail'  >

            <div className='col-md-6 '>
                <img className='coffee-img' src={props.coffee_img} />
            </div>

            <div className='col-md-6  coffee-details'>

                <p className='m-0'>Coffee Name:&nbsp; {props.coffee_name}</p>
                <p className='m-0'>Size:
               
                    <button type="button"  className="btn edit-btn coffee_price" id='small' >Small</button>
               
                    <button type="button" className="btn edit-btn coffee_price" id='medium' >Medium</button>
        
                    <button type="button" className="btn edit-btn coffee_price"  id='large' >Large</button>
              
                </p>
                <p className='m-0'>  Specification:&nbsp;{props.coffee_specification}<br /></p>
                <p className='m-0'>price:&nbsp;{props.coffee_price}</p>
            </div>
        </div>
       

    )
}
export default Coffee_item;


