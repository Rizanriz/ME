import React from "react";
import ServicesCss from "./../Servicess/Service.module.css"

function Service(){
    return(
        <>
         <section id="service">
            <div className={ServicesCss.service}>
                <h2>Service</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat iste enim dolores minima. Rem aliquam ea voluptates iusto inventore quas corrupti consequatur, assumenda beatae incidunt. Sint excepturi non architecto quidem?</p>

                <div className={ServicesCss.service_cards}>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i className="fa-solid fa-display" id={ServicesCss.icon}></i>
                        <h3>Web Design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i className="fa-solid fa-camera-retro" id={ServicesCss.icon}></i>
                        <h3>Photo/Vidio Editor</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i class="fa-solid fa-code" id={ServicesCss.icon}></i>
                        <h3>Web Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i class="fa-brands fa-codepen" id={ServicesCss.icon}></i>
                        <h3>UI / UX Design</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i class="fa-solid fa-mobile-screen" id={ServicesCss.icon}></i>
                        <h3>Mobile App Development</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>

                    <div className={ServicesCss.service_card} data-aos="zoom-in" data-aos-duration="1500">
                        <i class="fa-solid fa-gear" id={ServicesCss.icon}></i>
                        <h3>Other</h3>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. voluptatibus enim laudantium sit aliquam earum! Ipsam, tenetur nesciunt. Soluta, vitae!</p>
                        <a href="">Read more <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    
                </div>
            </div>
         </section>
        </>
    )
}
export default Service