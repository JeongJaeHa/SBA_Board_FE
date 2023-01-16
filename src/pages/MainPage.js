import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import {
  ListItemText
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Box, Grid, Link, List, ListItem, ListItemButton, Pagination, Typography } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import axios from "axios";
import dayjs from "dayjs";

function MainPage() {
  const [list, setList] = useState([]);
  const [page, setPage] = useState('');
  const [beforePage, setBeforePage] = useState('');
  const [afterPage, setAfterPage] = useState('');
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [id, setId] = useState('');
  const [currentPage, setCurrentPage] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const navigate = useNavigate();
  const offset = 10;

  const MoveMain = () => {
    localStorage.removeItem('accessToken');
    navigate('/main');
}

  const MoveSignup = () => {
      navigate('/signup');
  }

  const MoveSignin = () => {
    navigate('/signin');
}
  const token = localStorage.getItem('accessToken');
  const MoveWrite = () => {
    if(!token) {
      alert('로그인 후 작성해 주세요');
      navigate('/signin');
    } else{
      navigate('/write');
    }
}

const MoveDetail = (id) => {
  if(id === undefined || id === null) {
    alert('존재하지 않는 게시물입니다.');
    navigate('/main');
  } else {
    navigate(`/post?id=${id}`);
  }
}

const onPageChange = (event, page) => {
    setCurrentPage(page);
    navigate(`/main?page=${page}&offset=${offset}`)
  };


useEffect(() => {
  if(list.length == 0 || currentPage <= 0 || currentPage == undefined) {
    const currentPage = 1;
    const offset = 10;
    const Page = async () => {
      const page = await axios.get(`http://127.0.0.1:8080/post/list?page=${currentPage}&offset=${offset}`,{
        headers: {
          "Content-Type": "application/json",
          "accessToken": localStorage.getItem("accessToken"),
        },
        })
        setList(page.data.list[0])
        setPage(page.data.list[1])
    };
    Page(); 
  } else {
    const Page = async () => {
      const page = await axios.get(`http://127.0.0.1:8080/post/list?page=${currentPage}&offset=${offset}`,{
        headers: {
          "Content-Type": "application/json",
          "accessToken": localStorage.getItem("accessToken"),
        },
        })
        setList(page.data.list[0])
        setPage(page.data.list[1])
    };
    Page(); 
  }
}, [currentPage])

  return (
    <Grid container spacing={2} sx={{paddingTop: 0}}>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>
        <Box >
        <Typography component="div">
          <ListItem sx={{ fontStyle: 'normal', fontSize: 30, fontFamily: 'Monospace', alignItems: 'flex-end', paddingLeft: 0, paddingTop: '10%'}}>자유 게시판</ListItem>
        </Typography>
        </Box>
      </Grid>
            <Grid item xs={3}>
        <Box sx={{paddingRight: 0}}>
        <Typography component="div" >
          <ListItem sx={{ fontStyle: 'normal', fontSize: 30, fontFamily: 'Monospace', flexDirection: 'row-reverse', paddingRight: 0, paddingTop: '10%' }}>
            {localStorage.getItem("accessToken") ? <Link onClick={() => MoveMain()} href="" underline="hover">LOGOUT</Link> : <Link onClick={() => MoveSignin()} href="" underline="hover">LOGIN</Link>}
          </ListItem>
        </Typography>
        </Box>
      </Grid>
      <Grid item xs={3}>
        <ListItem></ListItem>
      </Grid>
      <Grid item xs={3}>

      </Grid>
      <Grid container xs={6} sx={{paddingTop: 0, pr: 0, pl: 0}}>
        <Box 
        key={id}
          sx={{
            width: '100%',
            paddingTop: 0, 
            paddingBottom: 0, 
            borderTop: 2, 
            borderBottom: 1, 
            borderColor: 'grey.500' 
            }}>
        {list.map(({title, writer, createdAt, view, id}, i) => (
          <List sx={{width: '100%', paddingTop: 0, paddingBottom: 0, borderBottom: 1, borderColor: 'grey.500',mb: 0}}>
            <Grid item fullWidth sx={{flexDirection: "column"}}>
              <ListItem sx={{paddingTop: 0, paddingBottom: 0, pr: 0, pl: 0, mb: 0}}>
                <ListItemButton sx={{paddingTop: 0, paddingBottom: 0, mb: 0}} onClick={() => MoveDetail(id)}>
                <ListItemText
                  primary={title} 
                  secondary={
                    <Typography 
                      variant="caption" 
                      display="block" 
                      gutterBottom>{writer.nickname} | {createdAt.slice(0,10)}
                    </Typography>} />
              </ListItemButton>
            </ListItem>
            </Grid>
          </List>
        ))}
        </Box>
      </Grid>
      <Grid item xs={3}>
        
      </Grid>
      <Grid item xs={3}>
        
      </Grid>
      <Grid item xs={6}>
        <Box sx={{ display: 'flex',justifyContent: 'center' }}>
        <Pagination 
            count={Math.floor(page/10 + 1)}
            page={currentPage}
            onChange={onPageChange}
            rowsPerPage={rowsPerPage}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              /> 
        </Box>
      </Grid>
      <Grid item xs={3}>
        
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

export default MainPage;
