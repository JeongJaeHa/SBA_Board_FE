import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import {TextField} from "@material-ui/core";
import Button from '@mui/material/Button';
import { Box, Grid, ListItem, Typography } from '@mui/material';
import {API} from '../config'

function WritePage() {
    const[ title, setTitle ] = useState('');
    const [content, setContent ] = useState('');

    const navigate = useNavigate();
    const Movemain = () => {
        navigate('/main');
    }



  const postRegister = async () => {
    if(title.length > 0 & content.length > 0) {
      const postregister = await axios({
        method: "post",
        url: `${API.POST_WRITE}`,
        data: {
          title: title,
          content: content
        },
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
        })
        navigate('/main');
    }
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
        <Button variant="contained" onClick={() => postRegister()}>등록</Button>
        &nbsp;&nbsp;
        <Button variant="out-lined" onClick={() => Movemain()}>취소</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
    </Grid>
        </>
    )
}


export default WritePage;