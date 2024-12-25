import '../NavStyles/navigation.scss';
import FeaturesMenu from '../../../pop-ups/FeaturesMenu';
import CompanyMenu from "../../../pop-ups/CompanyMenu";
import { useState } from 'react';

const NavItem = ({ label, hasDropdown, isFeature = false, isCompany = false }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="nav-link"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <span>{label}</span>
            {hasDropdown && (
                <svg
                    width="10"
                    height="6"
                    xmlns="http://www.w3.org/2000/svg"
                    className={(isFeature && hasDropdown && isHovered) ||
                    (isCompany && hasDropdown && isHovered) ? "none dropdown-icon" : "dropdown-icon show"}

                >
                    <path
                        stroke="#686868"
                        strokeWidth="1.5"
                        fill="none"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            )}

            {isFeature && hasDropdown && isHovered && (
                <>
                    <FeaturesMenu />
                    <svg
                        width="10"
                        height="6"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dropdown-icon"
                    >
                        <path
                            stroke="#686868"
                            strokeWidth="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                        />
                    </svg>

                </>

            )}
            {isCompany && hasDropdown && isHovered && (
                <>
                    <CompanyMenu />
                    <svg
                        width="10"
                        height="6"
                        xmlns="http://www.w3.org/2000/svg"
                        className="dropdown-icon"
                    >
                        <path
                            stroke="#686868"
                            strokeWidth="1.5"
                            fill="none"
                            d="m1 5 4-4 4 4"
                        />
                    </svg>

                </>
            )}
        </div>
    );
};

export default NavItem;
