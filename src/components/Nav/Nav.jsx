import React, { useState } from "react";
import NavCSS from './../../components/Nav/Nav.module.css';

function Nav() {
    AOS.init();
    const [navbar, setNavbar] = useState({ height: 0, padding: 0 });

    const activeNav = () => {
        if (!navbar.height) {
            setNavbar({ height: 350, padding: 20 });
        } else {
            setNavbar({ height: 0, padding: 0 });
        }
    };

    return (
        <>
            <section>
                <header className={NavCSS.header}>
                    <div className={NavCSS.logo} data-aos="fade" data-aos-duration="1500">
                        <h2>Mohd <span>Rizwan</span></h2>
                    </div>
                    <div className={NavCSS.nav} style={{ height: navbar.height, padding: navbar.padding }}>
                        <a href="" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="200">Home</a>
                        <a href="#about" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="300">About</a>
                        <a href="#service" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="400">Services</a>
                        <a href="#projects" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="500">Projects</a>
                        <a href="#Contact" data-aos="fade-down" data-aos-duration="1500" data-aos-delay="600">Contact</a>
                    </div>
                    <div className={NavCSS.bars} onClick={activeNav}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </header>
            </section>
        </>
    );
}

export default Nav;
