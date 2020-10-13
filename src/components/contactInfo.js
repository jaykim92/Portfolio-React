// packages
import React from 'react';

// import pdf
import PDF from "../assets/Jay_Kim.pdf"

function ContactInfo() {
    return(
        <div className='container container-opaque' style={{marginTop: "15%"}}>
            <h1 className="text-center">Contact</h1>
            <div className="container" style={{width: "60%"}}>
                <div className='row'>
                    <div className='col-sm-12 col-md-6 text-center' style={{fontSize: "125%"}}>
                        <p>Jay Kim</p>
                        <p><span className='fas fa-envelope'></span>  jaykim92@gmail.com</p>
                        <p><span className='fas fa-mobile-alt'></span>  310-800-3902</p>
                    </div>
                    <div className='col-sm-12 col-md-6 text-center' style={{fontSize: "125%"}}>
                        <p><a href='https://www.linkedin.com/in/jaykim92'>LinkedIn</a></p>
                        <p><a href='https://www.github.com/jaykim92'>GitHub</a></p>
                        <p><a href={PDF}>Resume</a></p>
                    </div>                
                </div>                
            </div>

        </div>
    );
};

export default ContactInfo;