import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const SignupHeader = styled.div`
margin-top 150px;
margin-bottom: 100px;
display: flex;
flex-direction: column;
align-items: center;
`

const SignupBoxBlock = styled.div`
width: 450px;
height: 200px;
background: green;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const SignInButtonBlock = styled.div`
width: 450px;
background: blue;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const SignUpButtonBlock = styled.div`
width: 450px;
background: red;
display: flex;
flex-direction: column;
align-items: center;
margin: 0 auto;
`

const SignupBox = styled.input`
width: 400px;
height: 35px;
display: flex;
flex-direction: column;
align-items: center;
margin-top: 5px;
position: relative;
`

const SigninButton = styled.button`
width: 400px;
height: 50px;
margin-top: 15px;
margin-bottom: 15px;
align-items: left;
`

function SignUpPage() {
    const navigate = useNavigate();

    const MoveSignin = () => {
        navigate('/signin');
    }

    return (
        <div>
            <SignupHeader>
            회원가입 페이지
            </SignupHeader>
            <SignupBoxBlock>
            <div>
                <SignupBox input placeholder='email' name='email' />
            </div>
            <div>
                <SignupBox input placeholder='nickname' name='nickname' />
            </div>
            <div>
                <SignupBox input placeholder='password' name='password' type='password' />
            </div>
            <div>
                <SignupBox input placeholder='password' name='password' type='password' />
            </div>
            </SignupBoxBlock>
            <SignUpButtonBlock>
                <SigninButton>
                    회원가입
                </SigninButton>
            </SignUpButtonBlock>
            <SignInButtonBlock>
                <div>
                    <button onClick={MoveSignin}>로그인</button>
                </div>
            </SignInButtonBlock>
        </div>
    )
}


export default SignUpPage;
