import React from "react";

const Contact = () => {
    return (
        <div>
            

            <h1> Contatti </h1>
            <br/>
            <br/>
            <br/>
            <address>
                <p>
                <strong>Email: example@react.it</strong>
                </p>
                <p>
                <strong>Phone: 0123 456789</strong>
                </p>
            </address>
            
            <form>
                <input placeholder="Nome" type= "text"/>
                <input placeholder="Email" type= "text"/>
                <br/>
            </form>
            <textarea placeholder="Messaggio" >
            </textarea>
            
            <button type="submit">Invia</button>
            
        </div>
    )
};

export default Contact;