import React from "react"
import {Link} from "react-router-dom";
const Head = () => {
    return (
        <>
            <section className='head'>
                <div className='container flexSB'>
                    <div className='logo black-color '>
                        <h1>ACADEMIA</h1>
                        <span>ONLINE EDUCATION & LEARNING</span>
                    </div>
                    <div className='social'>
                        <a href="#"><i className='fab fa-facebook-f icon'></i></a>
                        <a href="#"><i className='fab fa-instagram icon'></i></a>
                        <a href="#"><i className='fab fa-twitter icon'></i></a>
                        <a href="#"><i className='fab fa-youtube icon'></i></a>
                        <Link className={'login-head'} to="/login">Login</Link>
                        <Link className={'login-head'} to="/signup">Register</Link>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Head
