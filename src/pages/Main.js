import React, { useState } from 'react';
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
wdateth: 400px;
height: 50px;
margin-top: 15px;
margin-bottom: 15px;
`

function Content({ content }) {
    return (
      <div>
        <b>{content.title}</b> <span>({content.nickname})</span> <span>({content.date})</span>
      </div>
    );
  }
  
function MainPage() {
    const [PostList, setPostList] = useState('');

    // const PostLists = async () => {
    //   const getPostList = await axios({
    //     method: "get",
    //     url: "http://127.0.0.1:8080/main", {
    //       headers: {
    //         "Content-type": "application/json"
    //       },
    //   });
    //   const List = result.data[0]
    // }

    const navigate = useNavigate();

    const MoveSignin = () => {
        navigate('/signin');
    }

    const MoveSignup = () => {
        navigate('/signup');
    }

    const contents = [
        {
          date: '2023-01-01',
          title: 'velopert',
          nickname: 'public.velopert@gmail.com'
        },
        {
          date: '2023-01-01',
          title: 'tester',
          nickname: 'tester@example.com'
        },
        {
          date: '2023-01-01',
          title: 'liz',
          nickname: 'liz@example.com'
        }
      ];

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
            {contents.map(content => (
                <Content content={content} />
            ))}
        </MainContent>
        </div>
    )
}


export default MainPage;
