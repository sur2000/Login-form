import React from "react"; 
 

const Hero = (props) => { 
  
return (
        <div className="hero">
            <nav>
                <h2>HomePage</h2> 
                <button onClick={()=> {props.edit()}}>Edit your Profile</button>
                <button onClick={props.handleLogout}>Logout</button> 
        
            </nav> 
        </div> 
         )
    }

export default Hero;