import React, {useEffect, useState} from "react"
import {Link, useNavigate} from "react-router-dom"
import Head from "./Head"
import "./header.css"
const Header = () => {
    const navigate = useNavigate();
    const [click, setClick] = useState(false)
    const [token, setToken] = useState(null);
    useEffect(() => {
        const token_local = localStorage.getItem('access_token');
        if (token_local) {
            setToken(token_local);
        } else {
            setToken(null);
        }
    }, []);
    const handleLogout = () => {
        localStorage.removeItem('access_token');
        localStorage.removeItem('user_email');
        localStorage.removeItem('user_name');
        navigate('/', {replace: true});
        window.location.reload();

    };
    return (<>
        <Head/>
        <header>
            <nav className='flexSB change_background'>
                <ul className={click ? "mobile-nav" : "flexSB "} onClick={() => setClick(false)}>
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/courses'>Courses</Link>
                    </li>
                    <li>
                        <Link to='/about'>About</Link>
                    </li>
                    <li>
                        <Link to='/team'>Team</Link>
                    </li>
                    <li>
                        <Link to='/pricing'>Pricing</Link>
                    </li>
                    <li>
                        <Link to='/journal'>Journal</Link>
                    </li>
                    <li>
                        <Link to='/contact'>Contact</Link>
                    </li>
                    {token ? (
                        <li><Link to='/' onClick={handleLogout}>Logout</Link></li>) : (<>
                            <li><Link to='/login'>Login</Link></li>
                            <li><Link to='/register'>Register</Link></li>
                        </>
                    )}
                </ul>
                <div className='start'>
                    <div className='button'>GET CERTIFICATE</div>
                </div>
                <button className='toggle' onClick={() => setClick(!click)}>
                    {click ? <i className='fa fa-times'> </i> : <i className='fa fa-bars'></i>}
                </button>
            </nav>
        </header>
    </>)
}

export default Header
