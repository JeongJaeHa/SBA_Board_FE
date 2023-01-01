import React from 'react';
import styled from 'styled-component';
import { LoginBox } from './LoginStyle';

const LoginEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Login() {
    return(
        <LoginBox>로그인</LoginBox>
    )
}

export default Login;