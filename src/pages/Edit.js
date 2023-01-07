import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableFooter,
    TableHead,
    TablePagination,
    TableRow,
    Paper,
    TextField
} from "@material-ui/core";
import Button from '@mui/material/Button';
import axios from "axios";
import { Box, Grid, ListItem, Typography } from '@mui/material';

const TitleBox = styled.div`
width: 550px;
height: 80px;
align-items: center;
display: flex;
flex-direction: column;
margin: 0 auto;
margin-top: 20px;

`

const ContentBox = styled.div`
width: 550px;
height: 550px;
align-items: center;
display: flex;
flex-direction: column;
margin: 0 auto;
`

const ButtonBox = styled.div`
width: 550px;
align-items: center;
display: flex;
justify-content: space-between;
flex-direction: row;
margin: 0 auto;
margin-top: 20px;
`

const contents = [
    {
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일',
    content: '월요일은 너무 힘든것 같아요'
    },
    {
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
    },
    {
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
    }
];

function EditPage(props) {
    const location = useLocation();
    const detailTitle = location.state.title;
    const detailContent = location.state.content;
    const detailUserId = location.state.id;

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    
    function test(value) {
        console.log(JSON.stringify(value), title, props.title);
      }
    const navigate = useNavigate();
    const MoveTestMain = () => {
        navigate('/testmain');
    }

    const Edit = async () => {
        const EditPost = await axios({
            method: "post",
            url: "http://127.0.0.1:8080/edit",
            data: {
                id: detailUserId,
                title: title,
                content: content
            },
            headers: {
                "Content-Type": "application/json",
                accessToken: localStorage.getItem("Token"),
            },
            });
    }

    return (
        <>
        <Grid container spacing={2}>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <Box >
        <Typography component="div">
          <ListItem sx={{ fontStyle: 'normal', fontSize: 20, fontFamily: 'Monospace', alignItems: 'flex-end', paddingLeft: 0, paddingTop: '15%'}}></ListItem>
        </Typography>
        </Box>
      </Grid>
            <Grid item xs={3}>

      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={6}>
      <TextField
            fullWidth
            id="outlined-basic"
            variant="outlined"
            placeholder='제목을 입력하세요.'
            defaultValue={detailTitle}
            onChange={(e) => setTitle(e.target.value)}
        />
        &nbsp;
        <TextField
            fullWidth
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={27}
          defaultValue={detailContent}
          onChange={(e) => setContent(e.target.value)}
        />
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex',
          flexDirection: 'row-reverse'}}>
        <Button variant="contained">수정</Button>
        &nbsp;&nbsp;
        <Button variant="out-lined" onClick={() => MoveTestMain()}>삭제</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
    </Grid>
        {/* <div>
            <TitleBox>
            <TextField
                    fullWidth
                    id="outlined-basic"
                    variant="outlined"
                    placeholder='제목을 입력하세요.'
                    defaultValue={contents[0].title}
                    onChange={(e) => setTitle(e.target.value)}
        />
            </TitleBox>

        </div>

            <div>
                <ContentBox>
                <TextField
            fullWidth
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={27}
          defaultValue={contents[0].content}
          onChange={(e) => setTitle(e.target.value)}
        />
                </ContentBox>
            </div>
            <Box>
            <Button variant="contained" onClick={() => test()}>등록</Button>
                <Button variant="out-lined" onClick={() => MoveTestMain()}>취소</Button>
            </Box> */}

        </>
    )
}


export default EditPage;