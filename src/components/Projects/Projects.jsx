import React from "react";
import ProjectCss from "./../Projects/Project.module.css"
import img1 from "./../../../public/img1.png"
import img2 from "./../../../public/img2.png"
import img3 from "./../../../public/img3.png"
import img4 from "./../../../public/img4.png"
import img5 from "./../../../public/img5.png"
import img6 from "./../../../public/img6.png"

function Project(){
    return(
        <>
        <section id="projects">
            <div className={ProjectCss.project}>
                <h2>Projects</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, provident aperiam aspernatur doloribus, veritatis consectetur maxime fugiat earum in cum magnam laborum</p>
                <div className={ProjectCss.cards}>
                    <div className={ProjectCss.card}>
                        <img src={img1} alt="" />
                        <div>
                            <h4>Futurestic Gaming website</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="https://rizanriz.github.io/futurestic/" target="blank" >Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <div className={ProjectCss.card}>
                        <img src={img2} alt="" />
                        <div>
                            <h4>Responsive Bank Website</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="https://rizanriz.github.io/Bank/" target="blank">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <div className={ProjectCss.card}>
                        <img src={img4} alt="" />
                        <div>
                            <h4>Portfolio Website</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <div className={ProjectCss.card}>
                        <img src={img3} alt="" />
                        <div>
                            <h4>Sundown Studio <br/> website clone</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <div className={ProjectCss.card}>
                        <img src={img5} alt="" />
                        <div>
                            <h4>Dynamic Website</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <div className={ProjectCss.card}>
                        <img src={img6} alt="" />
                        <div>
                            <h4>FoodieXpress Website</h4>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam dolorum nulla magnam excepturi adipisci tempore voluptatum quae officiis dolorem doloremque vel, sit nihil expedita, iusto aliquam consectetur at possimus? Voluptatibus.</p>
                            <a href="">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                        </div>
                    </div>

                    <a href="">Read more<i class="fa-solid fa-arrow-right-long"></i></a>
                </div>
            </div>
        </section>
        </>
    )
}
export default Project
