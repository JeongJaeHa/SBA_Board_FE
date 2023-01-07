import React, { useState } from "react";

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
  Button
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Link, List, ListItem, Pagination, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';

const users = [
  {
    id: 1,
    view: 12,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    id: 2,
    view: 12,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    id: 3,
    view: 12,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  },
  {
    id: 4,
    view: 12,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  },  {
    view: 12,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    view: 12,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  }
];

function UserTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isLogin, setIsLogin] = useState('');
  const [id, setId] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();

  const MoveSignup = () => {
      navigate('/signup');
  }

  const MoveSignin = () => {
    navigate('/signin');
}

  const MoveWrite = () => {
    if(!isLogin) {
      alert('로그인 후 작성해 주세요');
      navigate('/signin');
    } else{
      navigate('/write');
    }
}

const MoveDetail = (id) => {
  console.log(id)
  if(id === undefined || id === null) {
    alert('존재하지 않는 게시물입니다.');
    navigate('/testmain');
  } else {
    navigate(`/detail/id=${id}`);
  }

}

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <Box >
        <Typography component="div">
          <ListItem sx={{ fontStyle: 'normal', fontSize: 30, fontFamily: 'Monospace', alignItems: 'flex-end', paddingLeft: 0, paddingTop: '15%'}}>자유 게시판</ListItem>
        </Typography>
        </Box>
      </Grid>
            <Grid item xs={3}>
        <Box sx={{paddingRight: 0}}>
        <Typography component="div" >
          <ListItem sx={{ fontStyle: 'normal', fontSize: 30, fontFamily: 'Monospace', flexDirection: 'row-reverse', paddingRight: 0, paddingTop: '15%' }}>
            {localStorage.getItem("token") ? <Link onClick={() => MoveSignin()} href="" underline="hover">LOGOUT</Link> : <Link onClick={() => MoveSignin()} href="" underline="hover">LOGIN</Link>}
          </ListItem>
        </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={6}>
      <TableContainer component={Paper}>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell align="center">title</TableCell>
            <TableCell align="center">nickname</TableCell>
            <TableCell align="center">date</TableCell>
            <TableCell align="center">view</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users
            .slice(page * rowsPerPage, (page + 1) * rowsPerPage)
            .map(({ title, nickname, date, view, id }, i) => (
              <TableRow key={id}>
                <TableCell align="center">
                <Typography sx={{ mt: 4, mb: 2, display: 'inline' }} component="div">
            <Link onClick={() => MoveDetail(id)} href="" underline="hover">
              {title},{id}
            </Link>
          </Typography>
                  </TableCell>
                <TableCell align="center">{nickname}</TableCell>
                <TableCell align="center">{date}</TableCell>
                <TableCell align="center" component="th" scope="row">
                  {view}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              count={users.length}
              page={page}
              rowsPerPage={rowsPerPage}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={6}>
        <Box sx={{          display: 'flex',
          flexDirection: 'row-reverse'}}>
        <Button variant="contained" onClick={(view) => MoveWrite(view)}>게시글 작성하기</Button>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
    </Grid>
  );
}

export default UserTable;
