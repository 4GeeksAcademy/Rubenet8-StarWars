import React from "react";


export const Contacts = () => {
    // 1. Desestructuro el store desde el Context que está en el appContext.js, utilizando useContext()


    return (
        <div className="con">
            Contacts
            {/* 
            3. Tengo que hacer un boton que me envie al componente AddContact para agregar un contacto
            3.1 Para esto tengo que crear el componente 
            3.2 Definirle un path en Layout.jsx 

            2. Ejecuto un .map() del array store.contacts y dentro de el muestro una card con los datos de cada contacto
            2.1 Ademas de mostrar los datos del contacto tengo que agregar dos iconos: 
            2.1.1 Icono para editar que me debe enviar a un componente EditContact
            2.1.2 Icono para borrar que debe ejecutar el actions deleteContact()
            */}
        </div>
    )
}
