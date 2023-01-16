import { Box, Button, Grid, ListItem, sliderClasses } from '@mui/material';
import React, { useEffect, useState } from'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import axios from "axios";

function DetailPage() {
    const [post, setPost] = useState('');
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [nickname, setNickname ] = useState('');
    const [view, setView] = useState('');
    const [createdAt, setCreatedAt] = useState('');

    const location = useLocation();
    const navigate = useNavigate();

    const userNickname = localStorage.getItem('nickname');
    const newArr = [...location.search]
    const id = newArr.slice(4,).join('')

    useEffect(() => {
        const detailPost = axios.get(`http://127.0.0.1:8080/post?id=${id}`)
        .then(response => {
            if(response.data.information.post.length == 0) {
                alert('존재하지 않는 게시물 입니다.')
                navigate('/main')
            }
            setPost(response.data.information.post);
            setTitle(response.data.information.post[0].title);
            setContent(response.data.information.post[0].content);
            setNickname(response.data.information.post[0].nickname);
            setView(response.data.information.post[0].view);
            setCreatedAt(response.data.information.post[0].createdAt);

        });
    }, []);

    
    const MoveEdit = () => {
        if(nickname === userNickname) {
            navigate(`/edit?id=${id}`, {
                state: {
                    id: id,
                    title: title,
                    content: content
                }
            });
        } else {
            alert("게시글 작성자만 수정할 수 있습니다.");
        }
        
    }

    const Delete = async () => {
        try{
            const postDelete = await axios({
                method: 'delete',
                url: `http://localhost:8080/post/delete?id=${id}`,
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

    const Writer = localStorage.getItem("accessToken")
    
    if(Writer) {
        return(
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={2}>
                    </Grid>
                    <Grid item xs={8}>
                        <Box sx={{ width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0}}>
                        <ListItem title='title' sx={{ color: 'text.primary', fontSize: 30, paddingBottom: 0, paddingLeft: 0, paddingTop: 10}}>{title}</ListItem>
                        <ListItem sx={{ paddingTop: 2, paddingLeft: 0, paddingRight: 0}}>
                        <ListItem sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0}}>{nickname} |  {createdAt.slice(0,10)} {createdAt.slice(11,16)}</ListItem>
                        <ListItem sx={{ flexDirection: 'row-reverse', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}></ListItem>
                        </ListItem>
                        </Box>
                        <Grid item xs={12}>
                            <Box sx={{ height: 300, width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0 }}>
                                <ListItem sx={{paddingTop: 3}}>{content}</ListItem>
                            </Box>
                            </Grid>
                            <Grid item xs={12}>
                            <Box  sx={{ justifyContent: 'flex-end', display: 'flex', marginTop: 3}}>
                            <Button onClick={() => MoveEdit(nickname)}>수정</Button>
                            &nbsp;
                            <Button onClick={() => Delete()}>삭제</Button>
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
                        <ListItem title='title' sx={{ color: 'text.primary', fontSize: 30, paddingBottom: 0, paddingLeft: 0, paddingTop: 10}}>{title}</ListItem>
                        <ListItem sx={{ paddingTop: 2, paddingLeft: 0, paddingRight: 0}}>
                        <ListItem sx={{ paddingTop: 0, paddingLeft: 0, paddingBottom: 0}}>{nickname} |  {createdAt} {createdAt.slice(11,16)}</ListItem>
                        <ListItem sx={{ flexDirection: 'row-reverse', paddingTop: 0, paddingBottom: 0, paddingRight: 0 }}></ListItem>
                        </ListItem>
                        </Box>
                        <Grid item xs={12}>
                            <Box sx={{ height: 300, width: '100%', display: 'column', justifyContent: 'center', flexWrap: 'wrap', borderBottom: 2, paddingRight: 0 }}>
                                <ListItem sx={{paddingTop: 3}}>{content}</ListItem>
                            </Box>
                            </Grid>
                    </Grid>
                </Grid>
                
                
                
            </div>
        )
    }
}

export default DetailPage;