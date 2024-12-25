import '../NavStyles/navigation.scss'
import NavItem from '../NavItem/NavItem'

const NAV_ITEMS = [
    { label: 'Features', hasDropdown: true, isFeature: true, isCompany: false },
    { label: 'Company', hasDropdown: true, isFeature: false, isCompany: true },
    { label: 'Careers', hasDropdown: false, isFeature: false, isCompany: false },
    { label: 'About', hasDropdown: false, isFeature: false, isCompany: false },
];

const NavContainer = () => {
    return (
        <nav className="navbar">
            {NAV_ITEMS.map((item, index) => (
                <NavItem
                    key={index}
                    label={item.label}
                    hasDropdown={item.hasDropdown}
                    isFeature={item.isFeature}
                    isCompany={item.isCompany} // Add this line
                />
            ))}
        </nav>
    );
};

export default NavContainer;
