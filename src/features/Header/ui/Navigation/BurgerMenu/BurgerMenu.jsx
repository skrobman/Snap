import { useState } from 'react';
import RegistrButton from '../RegistrButton/RegistrButton';
import '../NavStyles/navigation.scss';
import '../NavStyles/registration.scss';

const BurgerMenu = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdownF, setActiveDropdownF] = useState(null);
    const [activeDropdownC, setActiveDropdownC] = useState(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'unset';
    };

    const toggleDropdownF = (menu) => {
        setActiveDropdownF(activeDropdownF === menu ? null : menu);
    };

    const toggleDropdownC = (menu) => {
        setActiveDropdownC(activeDropdownC === menu ? null : menu);
    };


    return (
        <div className={`burger-menu ${isMenuOpen ? 'burger-open' : ''}`}>
            <button
                onClick={toggleMenu}
                className={`burger-icon ${isMenuOpen ? 'active' : ''}`}
            >
                <svg width="32" height="18" className={isMenuOpen ? 'hidden' : ''}>
                    <g fill="#151515" fillRule="evenodd">
                        <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
                    </g>
                </svg>
                <svg width="26" height="26" className={!isMenuOpen ? 'hidden' : ''}>
                    <g fill="#151515" fillRule="evenodd">
                        <path d="m2.393.98 22.628 22.628-1.414 1.414L.979 2.395z" />
                        <path d="M.98 23.607 23.609.979l1.414 1.414L2.395 25.021z" />
                    </g>
                </svg>
            </button>
            {isMenuOpen && (
                <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <a
                                onClick={() => toggleDropdownF('features')}
                                className="dropdown-toggle"
                            >
                                Features
                            </a>
                            {!activeDropdownF ? <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                            </svg> : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
                            </svg>}

                            {activeDropdownF === 'features' && (
                                <ul className="dropdown-menu">
                                <li><a href="#">Todo List</a></li>
                                    <li><a href="#">Calendar</a></li>
                                    <li><a href="#">Reminders</a></li>
                                    <li><a href="#">Planning</a></li>
                                </ul>
                            )}
                        </li>
                        <li>
                            <a
                                onClick={() => toggleDropdownC('company')}
                                className="dropdown-toggle"
                            >
                                Company
                            </a>
                            {!activeDropdownC ? <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 1 4 4 4-4"/>
                            </svg> : <svg width="10" height="6" xmlns="http://www.w3.org/2000/svg">
                                <path stroke="#686868" stroke-width="1.5" fill="none" d="m1 5 4-4 4 4"/>
                            </svg>}

                            {activeDropdownC === 'company' && (
                                <ul className="dropdown-menu">
                                    <li><a href="#">History</a></li>
                                    <li><a href="#">Our Team</a></li>
                                    <li><a href="#">Blog</a></li>
                                </ul>
                            )}
                        </li>
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">About</a></li>
                    </ul>
                    <RegistrButton />
                </div>
            )}
        </div>
    );
};

export default BurgerMenu;
