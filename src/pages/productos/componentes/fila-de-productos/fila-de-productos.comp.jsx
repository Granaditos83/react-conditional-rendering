import React from 'react';
import './fila-de-productos.style.css';




const FilaDeProductos =  (props) => {

    return(

        <div className="fila-de-productos-container">

            {props.producto.estudiante} 
            
            {

           props.producto.genero === "Femenino"
           ?
          <span className= "generof" > {props.producto.genero}  </span>
          :
          <span> {props.producto.genero}   </span>
          
        }
          {

            props.producto.nota ===   0 
            ?
            <span className= "leave-a-note" > {props.producto.nota} </span>
            :
            <span> {props.producto.nota}  </span>



          }
          </div>
        
        );
          
          
          
          
       

       
        
          
          





}
export default FilaDeProductos;