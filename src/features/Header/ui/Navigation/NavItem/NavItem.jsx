import '../NavStyles/navigation.scss'

const NavItem = ({label, hasDropdown}) => {
    return (
        <a className="nav-link">
            {label}
            {hasDropdown && (
                <svg
                    className="dropdown-icon"
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path className="dropdown-path"
                          stroke="#686868"
                          strokeWidth="1.5"
                          // fill="none"
                          d="m1 1 4 4 4-4"
                    />
                </svg>
            )}
        </a>
    );
};

export default NavItem