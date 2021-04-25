import React from 'react';
import './fila-de-productos.style.css';





const FilaDeProductos =  (props) => {

  return(

      <div className="fila-de-productos-container">

            {

         props.producto.estudiante  
         
         ?
        <span className= "estudiantes"  > {props.producto.estudiante}-  </span>
        :
        <span> {props.producto.estudiante}  </span>
        
        
        }
          
        {

         props.producto.genero === "Femenino", "Masculino"
         
         ?
        <span className= "generof"  > {props.producto.genero}-  </span>
        :
        <span> {props.producto.genero}  </span>
        
        
        }

        
         
        {

          props.producto.nota <= 2.9
          ?
          <span className= "leave-a-note" > {props.producto.nota}- Failed subject</span> 
          :
          <span> {props.producto.nota } Approved subject</span> 

        
          
        }
        
       
         

         
          

             </div>
      
      );
    }
    export default FilaDeProductos;

     











          



          
          
       
          


            
             
         



          

          
        