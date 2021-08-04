import React from 'react';
import LoginButton from '../componets/LoginButton';

const Login = (props) => {
  const login = () => {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  };
  return (
    <div>
      <h2>Login page</h2>
      <button onClick={login}>Login</button>
      <LoginButton />
    </div>
  );
};

export default Login;
