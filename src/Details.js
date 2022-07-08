import React from "react"; 
import './App.css'
import LOGO from  './logo.png' 
import SOLID from './Solid.png'

const Details = () => {

    return( 
        <section className="login"> 
       
        <img src={LOGO} className="logo" />
        
     <div className="loginContainer"> 

     <div className="icon">
<img src={SOLID} className = "icon_class"/>
<div className="text"> It's a delight to have you onboard </div> 
            <p>Help us know you better. </p>
 <p> (This is how we optimize wobot as per your business need)</p>
</div>
         <label>Company name</label> 
         <input 
         type="text"
         autoFocus
         required 
         placeholder="e.g Example Inc"
         /> 
      
         <label>Industry</label> 
         <input 
         type="text"
         required 
         placeholder="Select" 
         />  
   
         <label>Company Size</label> 

         <div id="outer"> 
         <div class="inner"><btn>1-20</btn></div>
         <div class="inner"><btn>21-50</btn></div>
          <div class="inner"><btn >51-200</btn></div> 
          <div class="inner"><btn >201-500</btn></div> 
          <div class="inner"><btn >500+</btn></div>
         
         </div>
                <div className="btnContainer">
              <button >Get Started</button> 
               </div>
          </div> 

            <h5>Terms of use | Privacy Policy</h5>
          
          
       
    </section>  
  
 
  ) 
  }


export default Details;