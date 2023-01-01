import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const MainHeader = styled.div`
background: red;
height: 100px;
`

const MainContent = styled.div`
background: blue;
height: 650px;
`

const LoginButton = styled.button`
width: 400px;
height: 50px;
margin-top: 15px;
margin-bottom: 15px;
`

function MainPage() {
    const navigate = useNavigate();

    const MoveSignin = () => {
        navigate('/signin');
    }

    const MoveSignup = () => {
        navigate('/signup');
    }

    return (
        <div>
        <MainHeader>
            메인 페이지
                <div>
                    <button onClick={MoveSignin}>로그인</button>
                </div>
                <div>
                    <button onClick={MoveSignup}>회원가입</button>
                </div>
        </MainHeader>
        <MainContent>
            게시글 목록
        </MainContent>
        </div>
    )
}


export default MainPage;
