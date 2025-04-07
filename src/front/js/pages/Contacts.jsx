import React, { useContext, useEffect } from "react";
import { Context } from "../store/appContext.js";
import { Link, useNavigate } from "react-router-dom";

export const Contacts = () => {

    const navigate = useNavigate();
    const { store, actions } = useContext(Context)
    const editContact = (contact) => {
        actions.setCurrentContact(contact);
        navigate("/edit")
    }
    const eliminarContacto = (id) => {
        // Llamar al action que borra el contacto enviando como parametro el id
        actions.deleteContact(id)
    }

    return (
        <div className="w-75 mx-auto">
            <div className="d-flex justify-content-end">
                <Link to="/add">
                    <button className="btn btn-success">Add a new contact</button>
                </Link>
            </div>
            <ul className="list-group mt-3">
                {store.listContacts && store.listContacts.length > 0 && store.listContacts.map((contact, index) => {
                    return (
                        <li key={contact.id} className="list-group-item d-flex justify-content-center bg-dark text-white">
                            <div className="d-flex align-items-center w-75">
                                <div className="col-md-3 d-flex justify-content-center">
                                    <img
                                        className="rounded-circle"
                                        src="https://i.pinimg.com/736x/40/2c/37/402c37ce1edf0c4167d86e05169fe98e.jpg"
                                        alt="Contact"
                                        style={{width:"200px", height:"200px"}}
                                    />
                                </div>
                                <div className="col-md-6">
                                    <h5 className="card-title mb-1">{contact.name}</h5>
                                    <p className="card-text mb-1">{contact.address}</p>
                                    <p className="card-text mb-1">{contact.phone}</p>
                                    <p className="card-text mb-1">{contact.email}</p>
                                </div>
                                <div className="col-md-3 d-flex justify-content-end">
                                    <button type="button"  onClick={() => editContact(contact)}>
                                        <i className="fa fa-eraser"></i>
                                    </button>
                                    <button type="button"  onClick={() => eliminarContacto(contact.id)}>
                                        <i className="fa fa-trash fa-lg"></i>
                                    </button>
                                </div>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
};