import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const LoginHeader = styled.div`
margin-top 150px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const LoginBoxBlock = styled.div`
width: 450px;
height: 150px;
background: green;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const LoginButtonBlock = styled.div`
width: 450px;
background: blue;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const SignInButtonBlock = styled.div`
width: 450px;
background: red;
display: flex;
flex-direction: column;
align-items: left;
margin: 0 auto;
`

const LoginBox = styled.input`
width: 400px;
height: 50px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5px;
position: relative;
`

const LoginButton = styled.button`
width: 400px;
height: 50px;
margin-top: 15px;
margin-bottom: 15px;
`


function SignInPage() {
    const navigate = useNavigate();

    const MoveSignup = () => {
        navigate('/signup');
    }

    return (
        <div>
            <LoginHeader>
            로그인 페이지
            </LoginHeader>
            <LoginBoxBlock>
            <div>
                <LoginBox input name='EMAIL' placeholder='EMAIL' />
            </div>
            <div>
                <LoginBox input name='PASSWORD' placeholder='PASSWORD' type='password' />
            </div>
            </LoginBoxBlock>
            <LoginButtonBlock>
                <LoginButton>
                    로그인
                </LoginButton>
            </LoginButtonBlock>
            <SignInButtonBlock>
                <div>
                <button onClick={MoveSignup}>회원가입</button>
                </div>
            </SignInButtonBlock>
        </div>
    )
}


export default SignInPage;
