import '../NavStyles/navigation.scss'
import NavItem from '../NavItem/NavItem'

const NAV_ITEMS = [
    {label: 'Features', hasDropdown: true},
    {label: 'Company', hasDropdown: true},
    {label: 'Careers', hasDropdown: false},
    {label: 'About', hasDropdown: false},
]

const NavContainer = () => {

    return (
        <nav className="navbar">
            {NAV_ITEMS.map((item, index) => (
                <NavItem
                    key={index}
                    label={item.label}
                    hasDropdown={item.hasDropdown}
                />
            ))}
        </nav>
    )
}

export default NavContainer