import { useEffect, useState } from "react";
import "./InformationSection.scss";

const InformationSection = () => {
    const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 1096);

    const images = [
        "images/client-databiz.svg",
        "images/client-audiophile.svg",
        "images/client-meet.svg",
        "images/client-maker.svg",
    ];

    useEffect(() => {
        const handleWindowResize = () => {
            setIsWideScreen(window.innerWidth > 1096);
        };

        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <div className="information-grid">
            <div className="text-container">
                <h1>
                    Make
                    {isWideScreen ? <br /> : " "}
                    remote work
                </h1>
                <p>
                    Get your team in sync, no matter your location.<br />
                    Streamline processes, create team rituals, and<br />
                    watch productivity soar.
                </p>
                <button>Learn more</button>

                <div className="client-logos">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            className="client-logo"
                        />
                    ))}
                </div>
            </div>

            <div className="background"></div>
        </div>
    );
}

export default InformationSection;