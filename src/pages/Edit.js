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
import {API} from '../config'

function EditPage(props) {
    const location = useLocation();
    const detailTitle = location.state.title;
    const detailContent = location.state.content;
    const detailUserId = location.state.id;

    const [title, setTitle] = useState(detailTitle);
    const [content, setContent] = useState(detailContent);

    const id = location.state.id;
    const navigate = useNavigate();
    const Movemain = () => {
        navigate('/main');
    }

    const Edit = async () => {
        const EditPost = await axios({
            method: "patch",
            url: `${API.POST_EDIT}${id}`,
            data: {
                id: detailUserId,
                title: title,
                content: content
            },
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
            },
            });
          if(EditPost.data.message == 'update success') {
            alert('업데이트 하였습니다.')
            navigate(`/main`)
          }
    }

    const Delete = async () => {
      try{
          const postDelete = await axios({
              method: 'delete',
              url: `${API.POST_DELETE}${id}`,
              headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem('accessToken')}`,
              },
          })
          if(postDelete.status == 204) {
            alert('삭제되었습니다.')
            navigate('/main');
          }
      } catch(err) {
          if(err.response.data.message == 'not this post writer') {
              alert('게시글 작성자만 삭제 할 수 있습니다.')
          }
      }
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
        <Button variant="contained" onClick={() => Edit()}>수정</Button>
        &nbsp;&nbsp;
        <Button variant="out-lined" onClick={() => Delete()}>삭제</Button>
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
                <Button variant="out-lined" onClick={() => Movemain()}>취소</Button>
            </Box> */}

        </>
    )
}


export default EditPage;