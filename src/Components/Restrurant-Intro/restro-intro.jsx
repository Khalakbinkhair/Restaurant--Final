import React from 'react'
import { Link } from "react-router-dom";



const Restro_intro = (props) => {


    return (
            <div className='row' style={{'margin':'2rem'}} >
                <div className='col-md-6 order-1 order-sm-0'>
                    <div className='logo-text'>
                        {props.restro_intro}
                    </div>
                        <div className='restro-btn'>
                        <Link to="/visit_shop">
                            <button type="button" className="btn visit-btn">Visit Shop</button>
                        </Link>
                        </div>
                </div>
                <div className='col-md-6 order-0 order-sm-1'>
                    <img className='img-component' src={props.restro_intro_imgurl} />
                </div>
            </div>
    )
}
export default Restro_intro;