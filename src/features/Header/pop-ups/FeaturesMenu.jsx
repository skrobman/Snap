import '../ui/Navigation/NavStyles/features.scss';

const FeaturesMenu = () => {
    return (
        <div className="features-menu">
            <ul className="menu-container">
                <li>
                    <a href="#">Todo List</a>
                </li>
                <li>
                    <a href="#">Calendar</a>
                </li>
                <li>
                    <a href="#">Reminders</a>
                </li>
                <li>
                    <a href="#">Planning</a>
                </li>
            </ul>
        </div>
    );
};

export default FeaturesMenu;
