/* This example requires Tailwind CSS v2.0+ */
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa"
import { FiMail } from "react-icons/fi"
import { Link } from 'react-router-dom'

const navigation = [
    { name: 'Nuestros Productos', href: '/products'},
    { name: 'Sobre Nosotros', href: '#' },
    { name: 'Contacto', href: '/contact' }
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="fondoDorado textoDorado h-24">
            {({ open }) => (
                <>
                    <div className="header h-20 max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-20">
                            <div className="absolute inset-y-0 right-40 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
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
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                className={classNames(
                                                    'px-3 py-2 rounded-md text-sm font-medium hover:text-white focus:outline-none xl:text-m'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="inset-y-0  flex items-between pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className="flex p-1">
                                    <Link to='#'><FiMail className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></Link>
                                    <Link to='#'><FaWhatsapp className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></Link>
                                    <Link to='#'><FaInstagram className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></Link>
                                    <Link to='#'><FaFacebook className='mx-2 text-xl xl:text-2xl hover:text-white focus:outline-none' /></Link>
                                </div>

                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <Disclosure.Button
                                    key={item.name}
                                    as="a"
                                    href={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block px-3 py-2 rounded-md text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
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
