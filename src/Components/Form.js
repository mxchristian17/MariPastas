import React, { useState } from 'react'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function Form() {

    const [errors, setErrors] = useState({name : null, email : null})

    const [contact,  setContact] = useState({
        name:'',
        phone:'',
        select:'distribuidores',
        email:'',
        status: false
    })
    
    const validateName = (value, err) => {
        
        const spaceIndexOf = value.indexOf(' ')

        err = ({...err, name : undefined})
        if(value.length > 100) err = ({...err, name : "El nombre es demasiado largo"})
        if((value.length < 7) || (spaceIndexOf === -1) || (spaceIndexOf === value.length-1)) err = ({...err, name : "Por favor, ingresá un nombre y apellido válidos"})
        if (typeof value !== "undefined") {
            if (!value.match(/^[a-zA-Z ]+$/)) {
                err = ({...err, name : "El nombre debe contener solo letras y espacios"})
            }
        }
        if(value.length === 0) err = ({...err, name : "Por favor ingresá tu nombre y apellido"})
        return err
    }
    
    const validateEmail = (value, err) => {
        err = ({...err, email : undefined})
        if(value.length > 100) err = ({...err, email : "El email es demasiado largo"})
        if(value.length < 7) err = ({...err, email : "Por favor ingresá una dirección de email válida"})
        if (typeof value !== "undefined") {
            if (!value.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
                err = ({...err, email : "El email debe tener un formato válido"})
            }
        }
        if(value.length === 0) err = ({...err, email : "Por favor ingresá tu dirección de email"})
        return err
    }
    
    const handleChange = (e) => {
        const field = e.target.id
        const value = e.target.value
        let err = {...errors}

        if(field === "name") err = validateName(value, err)
        if(field === "email") err = validateEmail(value, err)

        setErrors(err)
        
        setContact({...contact, [field] : value })
    }
    
    const submit = (e) => {
        e.preventDefault()
        let err = {...errors}
        err = validateName(e.target.elements.name.value, err)
        err = validateEmail(e.target.elements.email.value, err)
        
        if(!(typeof(err.name) !== "undefined" ||
        typeof(err.email) !== "undefined" ||
        typeof(err.phone) !== "undefined")) message(e)
        setErrors(err)
    }
    
    const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
    const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
    const USER_ID = process.env.REACT_APP_USER_ID;

    const message = (e) => {
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
        .then((result) => {
            console.log(result.text);
            Swal.fire({
            icon: 'success',
            title: 'Message Sent Successfully'
            })
        }, (error) => {
            console.log(error.text);
            Swal.fire({
            icon: 'error',
            title: 'Ooops, something went wrong',
            text: error.text,
            })
        });
        e.target.reset()
    }

    return (
        <div className="container mx-auto mt-1 text-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
                <form onSubmit={submit} className="place-self-center w-full mt-0">
                    <div className="overflow-hidden md:m-10">
                        <div className="px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6 text-left">
                                <div className="col-span-12">
                                    <label
                                        htmlFor="from_name"
                                        className="block text-md font-medium text-[rgba(160,120,56,1)] pl-4"
                                    >
                                        Nombre y Apellido
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        id="name"
                                        autoComplete="off"
                                        className="mt-1 focus:outline-0 focus:drop-shadow-[0_0_7px_rgba(214,179,106,1)] block w-full drop-shadow-[0_0_7px_rgba(0,0,0,0.35)] md:text-md sm:text-sm border-gray-300 rounded-full py-1 px-4"
                                        onChange={handleChange}
                                    />
                                    { errors.name && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{ errors.name }</div> }
                                </div>

                                <div className="col-span-12">
                                    <label
                                        htmlFor="from_email"
                                        className="block text-md font-medium text-[rgba(160,120,56,1)] pl-4"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="from_email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 focus:outline-0 focus:drop-shadow-[0_0_7px_rgba(214,179,106,1)] block w-full drop-shadow-[0_0_7px_rgba(0,0,0,0.35)] md:text-md sm:text-sm border-gray-300 rounded-full py-1 px-4"
                                        onChange={handleChange}
                                    />
                                    { errors.email && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{ errors.email }</div> }
                                </div>

                                <div className="col-span-12">
                                    <label
                                        htmlFor="from_contact_type"
                                        className="block text-md font-medium text-[rgba(160,120,56,1)] pl-4"
                                    >
                                        Tipo de contacto
                                    </label>
                                    <select
                                        value={contact.select}
                                        type="text"
                                        name="from_contact_type"
                                        id="select"
                                        className="mt-1 focus:outline-0 focus:drop-shadow-[0_0_7px_rgba(214,179,106,1)] block w-full drop-shadow-[0_0_7px_rgba(0,0,0,0.35)] md:text-md sm:text-sm border-gray-300 rounded-full py-1 px-4"
                                        onChange={handleChange}
                                    >
                                        <option value="distribuidores">Distribuidores, revendedores, mayoristas</option>
                                        <option value="cooperadoras">Cooperadoras Escolares e Instituciones sociales</option>
                                        <option value="minoristas">Comercios minoristas</option>
                                        <option value="consumidores">Consumidores</option>
                                        <option value="otros">Otros</option>
                                    </select>
                                </div>

                                <div className="col-span-12">
                                    <label
                                        htmlFor="message"
                                        className="block text-md font-medium text-[rgba(160,120,56,1)] pl-4"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        autoComplete="message"
                                        className="mt-1 focus:outline-0 focus:drop-shadow-[0_0_7px_rgba(214,179,106,1)] block w-full drop-shadow-[0_0_7px_rgba(0,0,0,0.35)] md:text-md sm:text-sm border-gray-300 rounded-2xl py-1 px-4"
                                    ></textarea>
                                </div>
                                
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-center sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-1 px-6 border border-transparent shadow-sm text-sm font-medium rounded-full text-white bg-[rgba(214,179,106,1)] hover:bg-[rgba(214,179,106,0.8)] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[rgba(214,179,106,1)]"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
                <div className="w-full h-full max-w-md max-h-80 place-self-center">
                <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13371.129341238697!2d-61.7909933!3d-33.0885106!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa67dd172b06e2c8b!2sPiatti%20Pastas!5e0!3m2!1ses-419!2sar!4v1654123111428!5m2!1ses-419!2sar"
                title="map"
                style={{border: 0}}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full h-full drop-shadow-[0_0_7px_rgba(0,0,0,0.35)]"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Form;