import React from 'react';
import './fila-de-productos.style.css';


const FilaDeProductos =  (props) => {

    return(

        <div className="fila-de-productos-container">
          {props.producto.estudiante}      {props.producto.curso}      {props.producto.nota}

            

          


           
        </div>
        
    )



};
export default FilaDeProductos;