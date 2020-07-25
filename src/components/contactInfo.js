// packages
import React from 'react';

function ContactInfo() {
    return(
        <div className='container mt-4 text-center'>
            <h1>Contact</h1>
            <div className='row'>
                <div className='col-sm-6'>
                    <p>Jay Kim</p>
                    <p><span className='fas fa-envelope'></span> jaykim92@gmail.com</p>
                    <p><span className='fas fa-mobile-alt'></span> 310-800-3902</p>
                </div>
                <div className='col-sm-6'>
                    <p><a href='https://www.linkedin.com/in/jaykim92'>LinkedIn</a></p>
                    <p><a href='https://www.github.com/jaykim92'>GitHub</a></p>
                    <p><a href='../assets/Jay Kim.pdf'>Resume</a></p>
                </div>                
            </div>
        </div>
    );
};

export default ContactInfo;