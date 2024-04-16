import React from "react";
import HeaderCss from './../Header/Header.module.css'
import element1 from './../../../public/element1.png'
import hero from './../../../public/hero.jpeg'

function Header(){
    return (
        <>
        <section id="home">
            <div className={HeaderCss.Hero}>
                <div className={HeaderCss.Hero_info}>
                    <h1>Hai i am <span>Rizwan <img src={element1} alt="" /></span></h1>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eaque dolor doloribus quod soluta modi similique perferendis pariatur sapiente, beatae omnis suscipit consequuntur repellendus fugiat sit totam, facere, excepturi eos!</p>

                    <div className={HeaderCss.social_icons}>
                        <i class="fa-brands fa-facebook"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-linkedin"></i>
                        <i class="fa-brands fa-github"></i>
                    </div>

                    <div className={HeaderCss.hero_btns}>
                        <button>Hire Me</button>
                        <button>Contact</button>
                    </div>
                </div>

                <div className={HeaderCss.hero_img}>
                    <img src={hero} alt="hero_img" />
                </div>
            </div>
        </section>
        </>
    )
}

export default Header