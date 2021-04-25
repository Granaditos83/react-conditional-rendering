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
            nota: 3.8,

          }}  />
          <FilaDeProductos producto ={{
          estudiante :"Luisa F Salamanca",
          genero :"Femenino",
          nota :5,
           
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Diego Rojas",
              genero :"Masculino",
              nota :3.5,

            }}  />
              <FilaDeProductos producto ={{
              estudiante :"carlos Martinez",
              genero :"Masculino",
              nota :3,

              
            


          }}  />
              <FilaDeProductos producto ={{
              estudiante :"Andres Agudelo",
              genero :"Masculino",
              nota :2.8,
            


          }}  />
          <FilaDeElementosCategoricos NombreCategoria="Special math"  />
          Name..  Gender..  Note
          <FilaDeProductos producto ={{
            estudiante :"Osman Perez",
            genero :"Masculino",
            nota :1.5,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Lucia Rojas",
              genero: "Femenino",
              nota :4,
            }}  />

            <FilaDeProductos producto ={{
            estudiante :"Daniela Campos",
            genero :"Femenino",
            nota :2.7,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Karla Jimenez",
              genero: "Femenino",
              nota :4,
            }}  />

            <FilaDeProductos producto ={{
            estudiante :"Leonardo Granados",
            genero :"Masculino",
            nota :2.4,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Jennifer Lopez",
              genero: "Femenino",
              nota :4.7,
            }}  />
            
            


         
            
          <FilaDeElementosCategoricos NombreCategoria="Software Engineering"  />
          Name..  Gender .. Note
          <FilaDeProductos producto ={{
            estudiante :"Fernanda Cortez",
            genero: "Femenino",
            nota :3,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Jhonatan Ocampo", 
              genero :"Masculino",
              nota :4,
            }}  />
              <FilaDeProductos producto ={{
              estudiante :"Brayan Salgadoo", 
              genero :"Masculino",
              nota :4,
            }}  />
              <FilaDeProductos producto ={{
              estudiante :"Liliana Martinez", 
              genero :"Femenino",
              nota :0,
            }}  />
              <FilaDeProductos producto ={{
              estudiante :"Cristian Camilo Perez", 
              genero :"Masculino",
              nota :5,
            }}  />
            


          

<FilaDeElementosCategoricos NombreCategoria="Operating systems"  />
          Name..  Gender .. Note
          <FilaDeProductos producto ={{
            estudiante :"Fernanda Aristizabal",
            genero: "Femenino",
            nota :0,
          }}  />

            <FilaDeProductos producto ={{
              estudiante :"Jaime Martinez",
              genero :"Masculino",
              nota :3,
            }}  />
             <FilaDeProductos producto ={{
              estudiante :"Petra Gomez",
              genero :"Femenino",
              nota :0,
            }}  />
             <FilaDeProductos producto ={{
              estudiante :"jose Andres Gil",
              genero :"Masculino",
              nota :0,
            }}  />
             <FilaDeProductos producto ={{
              estudiante :"Ximena Perez Gomez",
              genero :"Femenino",
              nota :0,
            }}  />
            


       
          
          

           
        </div>
        
    )



};
export default TablaDeProductos;