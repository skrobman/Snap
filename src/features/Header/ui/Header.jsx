import Logo from './Logo/Logo'
import NavContainer from './Navigation/NavContainer/NavContainer'
import LoginButton from './Navigation/LoginButton/LoginButton'
import RegistrButton from './Navigation/RegistrButton/RegistrButton'

import './Navigation/NavStyles/navigation.scss'

const Header = () => {
    return (
        <>
            <header className="header-container">
                <div className="nav">
                    <Logo/>
                    <NavContainer/>
                    <RegistrButton/>
                </div>
            </header>
        </>
    )
}

export default Header;