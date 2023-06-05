
import React, {useState} from "react";
import {Link, useNavigate} from 'react-router-dom';
import './login-style.css'

const LoginUrl = 'http://127.0.0.1:8000/api/token/'

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        fetch(LoginUrl, {
            method: 'POST', headers: {
                'Content-Type': 'application/json'
            }, body: JSON.stringify({

                email: email, password: password

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
                // Store the token in local storage or a cookie
                localStorage.setItem('access_token', data.access);
                setToken(data.access);
                navigate(`/`)
                alert("login succesfull!!!")


            })

            .catch(error => {
                console.log('catch error', error.message);
                alert('Authentication failed!');
                // Try to refresh the token if an error occurs
                if (error.message === 'Authentication failed.') {
                    fetch(`${LoginUrl}refresh/`, {
                        method: 'POST', headers: {
                            'Content-Type': 'application/json'
                        }, body: JSON.stringify({
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
                            // Store the new access token in local storage
                            localStorage.setItem('access_token', data.access);
                            setToken(data.access);
                        })
                        .catch(error => {
                            setError(error.message);
                        });
                }
            });


    }

    return (<div className={'login'}>      {/*eslint-disable*/}
            <div className="login-page">
                <div className={'registration-form'}>
                    <h1> Login</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="email">Email :</label>
                            <input type="email" id="email"
                                   placeholder={'Enter your username or email or phone'}
                                   value={email} onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" placeholder={'password'} id="password" value={password}
                                   onChange={(e) => setPassword(e.target.value)}/>
                        </div>
                        <button className={'login-button'} type="submit">Login</button>
                    </form>
                </div>
            </div>

        </div>

    );
}

export default LoginPage;