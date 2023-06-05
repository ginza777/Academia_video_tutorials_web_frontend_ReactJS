import React, {useState} from "react";
import {Link, redirect, useNavigate} from 'react-router-dom';
import './login-style.css';
import jwtDecode from "jwt-decode";


const LoginUrl = 'http://127.0.0.1:8000/api/token/';

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [error, setError] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(LoginUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(response => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Authentication failed.');
                }
            })
            .then(data => {
                const user_email = jwtDecode(data.access).email;
                const user_name = jwtDecode(data.access).username;
                localStorage.setItem('user_email', user_email);
                localStorage.setItem('user_name', user_name);
                localStorage.setItem('access_token', data.access);
                navigate('/', {replace: true});
                window.location.reload();


            })
            .catch(error => {
                console.log('catch error', error.message);
                alert('Authentication failed!');
                if (error.message === 'Authentication failed.') {
                    fetch(`${LoginUrl}refresh/`, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            refresh: localStorage.getItem('refresh_token')
                        })
                    })
                        .then(response => {
                            if (response.ok) {
                                return response.json();
                            } else {
                                throw new Error('Token refresh failed.');
                            }
                        })
                        .then(data => {
                            localStorage.setItem('access_token', data.access);
                        })
                        .catch(error => {
                            setError(error.message);
                        });
                }
            });
    };

    return (
        <div className="login">
            <div className="login-page">
                <div className="registration-form">
                    <h1>Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="Enter your username or email or phone"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input
                                type="password"
                                placeholder="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="login-button" type="submit">Login</button>
                        <Link to="/register">Register</Link>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
