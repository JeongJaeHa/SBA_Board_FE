import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Box, ListItem } from '@material-ui/core';
import axios from "axios";
import {API} from '../config';

function SignInPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ nickname, setNickname ] = useState([]);
    const [showPassword, setShowPassword] = React.useState(false);

    const navigate = useNavigate();

    const MoveSignup = () => {
        navigate('/signup');
    }

    const MoveSignin = () => {
        navigate('/signin');
    }

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
    event.preventDefault();
    }

    const SignIn = async () => {
        if(!email) return alert('이메일을 입력해주세요');
        if(!password) return alert('비밀번호를 입력해주세요');

        const SignIn = await axios({
            method: "post",
            url: `${API.SIGN_IN}`,
            data: {
                email: email,
                password: password
            },
            headers: {
                "Content-Type": "application/json",
            },
            })
            .then((res) => {
                if(res.data.message == 'login success') {
                    localStorage.setItem("accessToken", res.data.accessToken);
                    localStorage.setItem("nickname", res.data.nickname);
                    alert(`환영합니다 ${res.data.nickname} 님`);
                    navigate('/main')
                }
                })
                .catch((err) => {
                    if(err.response.data.message == 'Email not exists') return alert('이메일을 확인해주세요')
                    if(err.response.data.message == 'Unauthorized') return alert('비밀번호를 확인해주세요')
                });
        };
        
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Box sx={{height: '50%'}}>
                <ListItem sx={{}}>&nbsp;</ListItem>
                </Box>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}>
                <Box sx={{width: 300}}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Email"
                    onChange={(e) => setEmail(e.target.value)}
                    />
                </Box>
                &nbsp;
                <Box sx={{width: 300}}>
                    <TextField
                    fullWidth
                    required
                    id="outlined-required"
                    label="Password"
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </Box>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
      <Grid item xs={4} sx={{height: 300}}>
        <Box sx={{ flexDirection: 'column'}}>
        <Button fullWidth variant="contained" sx={{height: 50}} onClick={() => SignIn()}>로그인</Button>
        </Box>
        &nbsp;&nbsp;
        <Box sx={{ flexDirection: 'column'}}>
        <Button fullWidth variant="out-lined" onClick={()=> MoveSignup()} sx={{height: 50}}>회원가입</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <ListItem></ListItem>
      </Grid>
        </Grid>
    )
}


export default SignInPage
