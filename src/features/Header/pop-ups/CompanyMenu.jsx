import '../ui/Navigation/NavStyles/company.scss';

const CompanyMenu = () => {
    return (
        <div className="company-menu">
            <ul className="menu-container">
                <li>
                    <a href="#">History</a>
                </li>
                <li>
                    <a href="#">Our team</a>
                </li>
                <li>
                    <a href="#">Blog</a>
                </li>
            </ul>
        </div>
    );
};

export default CompanyMenu;