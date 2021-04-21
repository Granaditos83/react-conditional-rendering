import React from 'react';
import FilaDeElementosCategoricos from '../fila-de-elementos-categoricos/fila-de-elementos-categoricos.comp';
import FilaDeProductos from '../fila-de-productos/fila-de-productos.comp';
import './tabla-de-productos.style.css'


const TablaDeProductos =  () => {

    return(

        <div className ="tabla-de-productos-container " >
          <FilaDeElementosCategoricos NombreCategoria="Estudents"  />
          <FilaDeProductos producto ={{
            estudiante :"cristian",
            curso :"Programacion 4",
            nota :3,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"carlos",
              curso :" Matematica",
              nota :4,
            


          }}  />
          <FilaDeElementosCategoricos NombreCategoria="Courses"  />
          <FilaDeElementosCategoricos NombreCategoria="notes"  />
          
          

           
        </div>
        
    )



};
export default TablaDeProductos;