import React from 'react';
import FilaDeElementosCategoricos from '../fila-de-elementos-categoricos/fila-de-elementos-categoricos.comp';
import FilaDeProductos from '../fila-de-productos/fila-de-productos.comp';
import './tabla-de-productos.style.css'


const TablaDeProductos =  () => {

    return(

        <div className ="tabla-de-productos-container " >

          
          <FilaDeElementosCategoricos NombreCategoria="Programming 1 "  />

          Name..  Gender..  Note
          <FilaDeProductos producto ={{
            estudiante :"Cristian Granados",
            genero :"Masculino",
            nota: 5,
           
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Diego Rojas",
              genero :"Masculino",
              nota :4,
            


          }}  />
              <FilaDeProductos producto ={{
              estudiante :"Pedro Perez",
              genero :"Masculino",
              nota :0,
            


          }}  />
              <FilaDeProductos producto ={{
              estudiante :"carlos Martinez",
              genero :"Masculino",
              nota :4,

              
            


          }}  />
              <FilaDeProductos producto ={{
              estudiante :"Andres Agudelo",
              genero :"Masculino",
              nota :0,
            


          }}  />
          <FilaDeElementosCategoricos NombreCategoria="Special math"  />
          Name..  Gender..  Note
          <FilaDeProductos producto ={{
            estudiante :"Osman Perez",
            genero :"Masculino",
            nota :0,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Lucia Rojas",
              genero: "Femenino",
              nota :4,
            }}  />
            


         
            
          <FilaDeElementosCategoricos NombreCategoria="Software Engineering"  />
          {'Nombre '}  {'Genero'}  {' Nota'}
          <FilaDeProductos producto ={{
            estudiante :"Maria Fernanda Cortez",
            genero: "Femenino",
            nota :3,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Jhonatan Ocampo",
              genero :"Masculino",
              nota :4,
            


          }}  />

<FilaDeElementosCategoricos NombreCategoria="Operating systems"  />
          Name..  Gender .. Note
          <FilaDeProductos producto ={{
            estudiante :"Fernanda Aristizabal",
            genero: "Femenino",
            nota :0,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Jaime Valencia",
              genero :"Masculino",
              nota :0,
            


          }}  />
          
          

           
        </div>
        
    )



};
export default TablaDeProductos;