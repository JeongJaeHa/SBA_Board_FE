import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
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
import { Box, Grid, ListItem, Typography } from '@mui/material';

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

function WritePage() {
    const[ title, setTitle ] = useState('');
    const [content, setContent ] = useState('');

    const navigate = useNavigate();
    const MoveTestMain = () => {
        navigate('/testmain');
    }

    return (
        <>
                <Grid container spacing={2}>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <Box>
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
            onChange={(e) => setTitle(e.target.value)}
        />
        &nbsp;
        <TextField
            fullWidth
          id="outlined-basic"
          variant="outlined"
          multiline
          rows={27}
          placeholder='내용을 입력하세요.'
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
        <Button variant="contained">등록</Button>
        &nbsp;&nbsp;
        <Button variant="out-lined" onClick={() => MoveTestMain()}>취소</Button>
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
        placeholder="텍스트를 입력하세요."
        />
                </ContentBox>
            </div>
            <div>
                <ButtonBox>
                <Button variant="contained">등록</Button>
                <Button variant="out-lined" onClick={() => MoveTestMain()}>삭제</Button>
                </ButtonBox>
            </div> */}
        </>
    )
}


export default WritePage;