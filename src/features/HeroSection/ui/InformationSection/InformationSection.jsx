import {useEffect, useState} from "react";
import './InformationSection.scss'

const InformationSection = () => {

    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1440)

    useEffect(() => {
        const handleWindowResize = () => {
            setIsWideScreen(window.innerWidth > 1440)
        };

        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        }
    }, [])

    return (

        <>
            <div className="information-container">
                <div className="text-container">
                    <h1>
                        Make
                        {isWideScreen ? <br/> : " "}
                        remote work
                    </h1>
                    <p>
                        Get your team in sync, no matter your location.<br/>
                        Streamline processes, create team rituals, and<br/>
                        watch productivity soar.
                    </p>
                    <button>Learn more</button>
                </div>

            </div>
            <div className="background">

            </div>
        </>
    )
}

export default InformationSection;