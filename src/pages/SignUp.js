import React, { useState } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Box, ListItem } from '@material-ui/core';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import axios from "axios";
import {API} from '../config';

function SignUpPage() {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

    const navigate = useNavigate();

    const MoveSignup = () => {
        navigate('/signup');
    }

    const MoveSignin = () => {
        navigate('/signin');
    }

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const SignUp = async () => {
      const emailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
      const nicknameRegex = new RegExp('^[ㄱ-ㅎ|가-힣|a-z|A-Z|0-9|]+$');
      const passwordRegex = new RegExp('^[a-zA-Z0-9]{8,}$');
      
      if(!email) return alert('이메일을 입력해주세요');
      if( !emailRegex.test(email)) return alert('이메일을 형식을 확인하세요');
      if(!nickname) return alert('닉네임을 입력해주세요');
      if( !nicknameRegex.test(nickname)) return alert('닉네임은 한글, 영문, 숫자로 2글자 이상 만들어주세요.');
      if(!password) return alert('비밀번호를 입력해주세요');
      if(!passwordConfirm) return alert('비밀번호 확인란을 입력하세요');
      if(!passwordRegex.test(password)) return alert('비밀번호는 문자와 숫자 조합으로 8자 이상 만드세요')
      if(password !== passwordConfirm) return alert('비밀번호가 다릅니다.');


      const userSignUp = await axios({
        method: "post",
        url: `${API.SIGN_UP}`,
        data: {
            email: email,
            password: password,
            nickname: nickname
        },
        headers: {
            "Content-Type": "application/json",
        }
        })
        .then((res) => {
          if(res.data.message == 'register success') {
            alert('회원가입에 성공하였습니다.')
            navigate('/main')
          }
        })
        .catch((err) => {
          if(err.response.data.message == 'email already registered') return alert('이미 사용중인 이메일 입니다.')
          if(err.response.data.message == 'nickname already registered') return alert('이미 사용중인 닉네임 입니다.')
        });
    }

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
                    label="NickName"
                    onChange={(e) => setNickname(e.target.value)}
                    />
                </Box>
                &nbsp;
                <Box sx={{width: 300}}>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormControl>
                </Box>
                &nbsp;
                <Box sx={{width: 300}}>
        <FormControl sx={{ width: '100%', }} variant="outlined">
          <InputLabel required htmlFor="outlined-adornment-password">Password Check</InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password Check"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </FormControl>
                </Box>
            </Grid>
            <Grid item xs={4}></Grid>
            <Grid item xs={4}></Grid>
      <Grid item xs={4} sx={{height: 300}}>
        <Box sx={{ flexDirection: 'column'}}>
        <Button fullWidth variant="contained" sx={{height: 50}} onClick={()=>SignUp()}>회원가입</Button>
        </Box>
        &nbsp;&nbsp;
        <Box sx={{ flexDirection: 'column'}}>
        <Button fullWidth variant="out-lined" onClick={()=> MoveSignin()} sx={{height: 50}}>로그인</Button>
        </Box>
      </Grid>
      <Grid item xs={4}>
        <ListItem></ListItem>
      </Grid>
        </Grid>

    )
}


export default SignUpPage;
