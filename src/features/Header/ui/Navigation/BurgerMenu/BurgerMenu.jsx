import React, { useState } from 'react';
import NavContainer from '../NavContainer/NavContainer';
import RegistrButton from '../RegistrButton/RegistrButton';

import '../NavStyles/navigation.scss'
import '../NavStyles/registration.scss'

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="burger-menu">
            <div onClick={toggleMenu} className="burger-icon">
                {!isOpen ? (
                    <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#151515" fillRule="evenodd">
                            <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                        </g>
                    </svg>
                ) : (
                    <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
                        <g fill="#151515" fillRule="evenodd">
                            <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                            <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
                        </g>
                    </svg>
                )}
            </div>
            {isOpen && (
                <div className="menu">
                    <NavContainer />
                    <RegistrButton />
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
