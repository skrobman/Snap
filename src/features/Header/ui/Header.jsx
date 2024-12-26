import Logo from './Logo/Logo'
import NavContainer from './Navigation/NavContainer/NavContainer'
import RegistrButton from './Navigation/RegistrButton/RegistrButton'
import BurgerMenu from './Navigation/BurgerMenu/BurgerMenu'
import './Navigation/NavStyles/navigation.scss'

const Header = () => {
    return (
        <header className="header-container">
            <nav className="nav">
                <Logo/>
                <NavContainer/>
                <RegistrButton/>
                <BurgerMenu/>
            </nav>
        </header>
    )
}

export default Header