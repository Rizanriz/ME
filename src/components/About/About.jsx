import React from "react";
import AboutCss  from  "./../About/About.module.css"
import aboutimg from "./../../../public/wall.jpg"

function About(){
    return (
        <>
          <section id="about">
             <div className={AboutCss.about}>
                <div className={AboutCss.about_img} data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
                    <img src={aboutimg} alt="" />
                </div>
                <div className={AboutCss.about_info} >
                    <h4 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">About Me</h4>
                    <h3 data-aos="fade-left" data-aos-duration="1500" data-aos-delay="400">I'm a <span>MEARN STACK </span>Developer</h3>
                    <p data-aos="fade-left" data-aos-duration="1500" data-aos-delay="500"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, praesentium, recusandae nam dolorum quaerat soluta sapiente odit temporibus, molestiae tempore delectus. Nemo reprehenderit accusantium quam reiciendis nihil similique illo perspiciatis.</p>
                    <button data-aos="fade-left" data-aos-duration="1500" data-aos-delay="600">Download CV</button>
                </div>
            </div>
          </section>
        </>
    )
}

export default About