import React from 'react';
import './barra-de-busqueda.style.css'


const BarraDeBusqueda =  () => {

    return(

        <div className ="barra-de-busqueda-container " >

<div className="search-input">
  <input type="text" placeholder="search.."/>
</div>

<div>
   <input type ="checkbox"/> Only show products in stock
</div>
           
        </div>
        
    )



};
export default BarraDeBusqueda;