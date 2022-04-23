import React, { useState } from 'react'
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';

function Form() {

    const [errors, setErrors] = useState({name : null, email : null})

    const [contact,  setContact] = useState({
        name:'',
        phone:'',
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
        <>
            <div className="grid mt-5 md:mt-0 md:col-span-2 w-full">
                <form onSubmit={submit} className="place-self-center w-full md:w-1/2">
                    <div className="shadow overflow-hidden sm:rounded-md md:m-10">
                        <div className="bg-slate-400 px-4 py-5 sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-12">
                                    <label
                                        htmlFor="from_name"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Nombre y Apellido
                                    </label>
                                    <input
                                        type="text"
                                        name="from_name"
                                        id="name"
                                        autoComplete="off"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-xl sm:text-sm border-gray-300 rounded-md p-1"
                                        onChange={handleChange}
                                    />
                                    { errors.name && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{ errors.name }</div> }
                                </div>

                                <div className="col-span-12">
                                    <label
                                        htmlFor="from_email"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Email
                                    </label>
                                    <input
                                        type="text"
                                        name="from_email"
                                        id="email"
                                        autoComplete="email"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full md:text-xl shadow-sm sm:text-sm border-gray-300 rounded-md p-1"
                                        onChange={handleChange}
                                    />
                                    { errors.email && <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">{ errors.email }</div> }
                                </div>

                                <div className="col-span-12">
                                    <label
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700"
                                    >
                                        Mensaje
                                    </label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        autoComplete="message"
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm md:text-xl sm:text-sm border-gray-300 rounded-md"
                                    ></textarea>
                                </div>
                                
                            </div>
                        </div>
                        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                            <button
                                type="submit"
                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Enviar
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </>
    );
}

export default Form;