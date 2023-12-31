/* This example requires Tailwind CSS v2.0+ */
import React from 'react'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Nuestros Productos', href: '/products', current: true },
    { name: 'Sobre Nosotros', href: '/about', current: true },
    { name: 'Contacto', href: '/contact', current: true }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="fondoDorado textoDorado h-24">
            {({ open }) => (
                <>
                    <div className="header h-20 w-full mx-auto px-2 sm:px-6">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 right-40 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-amber-200 hover:text-amber-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-amber-200">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <Link to='/'>
                                <h1 className='logoPiatti text-5xl hover:text-white focus:outline-none xl:text-6xl'>Piatti</h1>
                            </Link>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
                                <div className="flex-shrink-0 flex items-center">
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Disclosure.Button
                                                as={Link}
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    'px-3 py-2 rounded-md text-lg font-medium hover:text-white focus:outline-none xl:text-m'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Disclosure.Button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="inset-y-0  flex items-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex p-1">
                                    <a href='mailto:piattipastas@gmail.com'><FiMail className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></a>
                                    <a href='https://api.whatsapp.com/send?phone=5493467499337' target="_blank" rel="noreferrer"><FaWhatsapp className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></a>
                                    <a href='https://www.instagram.com/piattipastas/' target="_blank" rel="noreferrer"><FaInstagram className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></a>
                                    <a href='https://www.facebook.com/piattipastas/' target="_blank" rel="noreferrer"><FaFacebook className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></a>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden relative">
                        <div className="relative z-10 flex flex-col bg-stone-500 opacity-90 px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                        as={Link}
                                        key={item.name}
                                        to={item.href}
                                        className={classNames('hover:bg-gray-600 hover:text-white font-sans')}
                                    >
                                        {item.name}
                                </Disclosure.Button>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    )
}
