import React from 'react';

function Front() {
    return(
        <>
            <div className='full-height cover-img'>
                <div className='container container-opaque vertical-center text-center'>
                    <h1 className='text-white'>Jay Kim</h1>
                    <h5 className='text-white'>Full Stack Web Developer</h5>
                    <hr style={{backgroundColor: "white"}}></hr>
                    <div className='row'>
                        <a className='col-sm-4 text-white' href='./portfolio'>Portfolio</a>
                        <a className='col-sm-4 text-white' href="./contact">Contact</a>
                        <a className='col-sm-4 text-white' href='./resume'>Resume</a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Front;