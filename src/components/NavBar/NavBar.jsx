import React from "react";
import "./NavBar.styles.less"
import "../../index.css"
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const navigation = [
    { name: 'Who Am I ?', href: 'https://www.google.com', current: false, id: 'about-section'},
    { name: 'Skills', href: 'https://www.google.com', current: false, id: 'skills-section' },
    { name: 'Projects', href: 'https://www.google.com', current: false, id: 'projects-section' },
    { name: 'Resume', href: 'https://www.google.com', current: false, id: 'resume-section'},
    { name: 'Contact Me', href: 'https://www.google.com', current: false, id: 'contact-section' },
]


function NavBar() {
    return (
        <>
            <Disclosure as="nav" className="bg-black rounded-2xl shadow-2xl my-6 border-black flex justify-between nav-bar">
                <div className="text-white flex tracking-wider nav-bar-title">Darren Harris</div>
                <div className="flex space-x-4">
                    {navigation.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-xl font-medium flex items-center',
                            )}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                <DisclosurePanel className="sm:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {navigation.map((item) => (
                            <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                aria-current={item.current ? 'page' : undefined}
                                className={classNames(
                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'block rounded-md px-3 py-2 text-base font-medium',
                                )}
                            >
                                {item.name}
                            </DisclosureButton>
                        ))}
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </>
    )
}

export default NavBar