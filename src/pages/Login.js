import React from 'react';
import Button from '../components/Button';

const Login = () => {
    return (
        <div>
            <form action="">
                <input type="text" placeholder='Username'/>
                <br/>
                <input type="text" placeholder='Password'/>
            </form>
            <Button name={'LOGIN'}/>
            <p>Please Login with your username and Password</p>
        </div>
    )
}

export default Login
