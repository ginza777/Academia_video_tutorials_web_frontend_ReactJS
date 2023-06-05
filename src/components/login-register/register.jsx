import './login-style.css'
import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";

const RegistrationUrl = 'http://localhost:8000/api/register/'


function RegistrationPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(''); //
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();

        // Perform form validation
        if (username.trim() === '') {
            alert('Iltimos, toʻliq ismingizni kiriting');
            return;
        }

        if (email.trim() === '') {
            alert('Iltimos, pochtangizni  kiriting');
            return;
        }
        if (phone.trim() === '') {
            alert('Iltimos, telefon raqamingizni kiriting');
            return;
        }

        if (password.trim() === '') {
            alert('Iltimos, parolingizni kiriting');
            return;
        }

        if (password !== retypePassword) {
            alert("Parollar mos emas ,iltimos qaytadan tekshirib ko'ring");
            return;
        }

        fetch(RegistrationUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                email: email,
                phone: phone,
                password: password
            })
        })
            .then(response => {
                if (response.ok) {
                    navigate('/login');
                    return response.json();
                } else {

                    alert("email yoki username mavjud !!!")

                }
            })
        setEmail('');
        setUsername('');
        setPassword('');
        setRetypePassword('');
    };

    return (<div className={'login'}>
            <div className="registration-page">
                <div className={'login-form'}>
                    <h1> Register</h1>
                    <form className="registration-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="fullName">Username</label>
                            <input
                                type="text"
                                id="username"
                                value={username}
                                placeholder="Username"
                                onChange={(event) => setUsername(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                placeholder="example@gmail.com"
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Phone</label>
                            <input
                                type="text"
                                id="phone"
                                value={phone}
                                placeholder="ex: +998900046465"
                                onChange={(event) => setPhone(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                placeholder="Password"
                                onChange={(event) => setPassword(event.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="retypePassword">Retype Password</label>
                            <input
                                type="password"
                                id="retypePassword"
                                value={retypePassword}
                                placeholder="Retype Password"
                                onChange={(event) => setRetypePassword(event.target.value)}
                            />
                        </div>
                        <button className="login-button" type="submit">Register</button>
                    </form>
                </div>
            </div>

        </div>


    );
}

export default RegistrationPage;