import Logo from './Logo/Logo'
import NavContainer from './Navigation/NavContainer/NavContainer'
import RegistrButton from './Navigation/RegistrButton/RegistrButton'
import BurgerMenu from './Navigation/BurgerMenu/BurgerMenu'

import './Navigation/NavStyles/navigation.scss'

const Header = () => {
    return (
        <>
            <header className="header-container">
                <div className="nav">
                    <Logo/>

                    <NavContainer/>
                    <RegistrButton/>
                    <BurgerMenu />
                </div>
            </header>
        </>
    )
}

export default Header;