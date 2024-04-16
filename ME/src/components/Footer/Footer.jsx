import React from "react";
import FooterCss from "./../Footer/Footer.module.css"

function Footer(){
    return(
        <>
           <section>
            <div className={FooterCss.footer}>
                <div className={FooterCss.links}>
                  <h1>Somebody</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>

                    <div className={FooterCss.social}>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>
                </div>

                <div className={FooterCss.links}>
                    <h3>Useful Links</h3>
                    <ul>
                        <li><a href="">About</a></li>
                        <li><a href="">Services</a></li>
                        <li><a href="">Portfilio</a></li>
                    </ul>
                </div>
                
                <div className={FooterCss.links}>
                    <h3>Information</h3>
                    <ul>
                        <li><a href="">Membership</a></li>
                        <li><a href="">Privacy and policy</a></li>
                        <li><a href="">Terms and condition</a></li>
                    </ul>
                </div>
            </div>
           </section>
        </>
    )
}
export default Footer