import React from 'react';
import BarraDeBusqueda from '../barra-de-búsqueda/barra-de-busqueda.comp';
import TablaDeProductos from '../tabla-de-productos/tabla-de.productos.comp';
import './tabla-de-productos-filtrables.style.css'



const TablaDeProductosFiltrables =  () => {

    return(
        

        <div className ="Tabla-de-productos-filtrables-container " >

            <BarraDeBusqueda/>
            <TablaDeProductos/>
            
           
        </div>
        
        
    )



};
export default TablaDeProductosFiltrables;