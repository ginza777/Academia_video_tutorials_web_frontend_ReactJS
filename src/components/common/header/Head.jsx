import React from "react"

function Head (props) {

    return <>
        <section className='head'>
            <div className='container flexSB'>
                <div className='logo black-color '>
                    <h1>ACADEMIA</h1>
                    <span>ONLINE EDUCATION & LEARNING</span>
                </div>
                <div className='social'>
                    {/* eslint-disable jsx-a11y/anchor-is-valid */}
                    <a href="#"><i className='fab fa-facebook-f icon'></i></a>
                    <a href="#"><i className='fab fa-instagram icon'></i></a>
                    <a href="#"><i className='fab fa-twitter icon'></i></a>
                    <a href="#"><i className='fab fa-youtube icon'></i></a>

                </div>
            </div>
        </section>
    </>
}

export default Head
