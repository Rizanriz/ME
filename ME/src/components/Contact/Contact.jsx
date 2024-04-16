import React from "react";
import ContactCss from "./../Contact/Contact.module.css"

function Contact(){
    return(
        <>
        <section id="Contact">
            <div className={ContactCss.contact}>
                <div>
                    <h2>Contact Me</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt totam dicta esse minima. Ea adipisci </p>
                </div>
                    
                <form>
                    <label>Name :</label>
                    <input type="text" placeholder="Enter Name" id="name" required/>
                    <label>Email :</label>
                    <input type="email" placeholder="Enter email" id="email" required/>
                    <label>Phon :</label>
                    <input type="text" placeholder="Enter phon number" id="phon" required/>
                    <button>Contact</button>
                </form>
            </div>
        </section>
        </>
    )
}

export default Contact