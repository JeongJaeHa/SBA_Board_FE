import { Box, Button, Grid, ListItem } from '@mui/material';
import React, { useState } from'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

const content = [
    {
        id:1,
        date: '2023-01-01',
        title: 'test title',
        nickname: '불타는 금요일',
        content: '월요일은 너무 힘든것 같아요',
        userid: '111'
    }
  ];

function DetailPage() {
    const [detailId, setDetailId ] = useState('');
    const [detailTitle, setDetailTitle] = useState('');
    const [detailContent, setDetailContent] = useState('');

    // setDetailTitle(content[0].title);
    // setDetailContent(content[0].content);

    const Edit = async () => {
        const EditPost = await axios({
            method: "post",
            url: "http://127.0.0.1:8080/edit",
            data: {
                nickname: content[0].nickname
            },
            headers: {
                "Content-Type": "application/json",
                accessToken: localStorage.getItem("Token"),
            },
        });
    }

    const navigate = useNavigate();

    const MoveEdit = () => {
        if(Edit()) {
            navigate('/edit', {
                state: {
                    id: content[0].id,
                    title: content[0].title,
                    content: content[0].content,
                    userid: content[0].userid
                }
            });
        } else {
            alert("게시글 작성자만 수정할 수 있습니다.");
        }

    }

    const Writer = localStorage.getItem("Token")

    if(Writer) {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0}}>
                        <ListItem title='title' sx={{ color: 'text.primary', fontSize: 30, paddingBottom: 0, paddingLeft: 0, paddingTop: 10}}>{content[0].title}</ListItem>
                        <ListItem sx={{ paddingTop: 2, paddingLeft: 0, paddingRight: 0}}>
                        <ListItem sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0}}>{content[0].nickname} |  {content[0].date}</ListItem>
                        <ListItem sx={{ flexDirection: 'row-reverse', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}>조회수 20</ListItem>
                        </ListItem>
                        </Box>
                        <Grid item xs={12}>
                            <Box sx={{ height: 300, width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0 }}>
                                <ListItem sx={{paddingTop: 3}}>{content[0].content}</ListItem>
                            </Box>
                            </Grid>
                            <Grid item xs={12}>
                            <Box  sx={{ justifyContent: 'flex-end', display: 'flex', marginTop: 3}}>
                            <Button onClick={() => MoveEdit(content[0].nickname)}>수정</Button>
                            &nbsp;
                            <Button>삭제</Button>
                            </Box>
                        </Grid>
                    </Grid>
                </Grid>
                
                
                
            </div>
        )
    } else {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0}}>
                        <ListItem title='title' sx={{ color: 'text.primary', fontSize: 30, paddingBottom: 0, paddingLeft: 0, paddingTop: 10}}>{content[0].title}</ListItem>
                        <ListItem sx={{ paddingTop: 2, paddingLeft: 0, paddingRight: 0}}>
                        <ListItem sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0}}>{content[0].nickname} |  {content[0].date}</ListItem>
                        <ListItem sx={{ flexDirection: 'row-reverse', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}>조회수 20</ListItem>
                        </ListItem>
                        </Box>
                        <Grid item xs={12}>
                            <Box sx={{ height: 300, width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0 }}>
                                <ListItem sx={{paddingTop: 3}}>{content[0].content}</ListItem>
                            </Box>
                            </Grid>
                    </Grid>
                </Grid>
                
                
                
            </div>
        )
    }
}

export default DetailPage;