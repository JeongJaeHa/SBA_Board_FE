import { Grid, Link, ListItem, ListItemText, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";



const contents = [
  {
    id: 1,
    date: '2023-01-01',
    title: 'test title',
    nickname: '불타는 금요일'
  },
  {
    id: 2,
    date: '2023-01-01',
    title: '테스트 타이틀',
    nickname: '점심메뉴 추천좀'
  },
  {
    id: 3,
    date: '2023-01-01',
    title: '네트워크 너무 어려워요 ㅠㅠ',
    nickname: '통학전문가'
  }
];

function GridTable() {

  return (
    <>
      <Grid container spacing={2}>
      <Grid item xs={12}>
        <ListItem>xs=8</ListItem>
      </Grid>
      <Grid item xs={3}>
        <ListItem>xs=4</ListItem>
      </Grid>
      <Grid item xs={6}>
      <Grid item xs={12} md={6}>
          <Typography sx={{ mt: 4, mb: 2, display: 'inline' }} variant="h6" component="div">
            <Link href="#" underline="hover">
              {'underline="hover"'}
            </Link>
          </Typography>
        </Grid>
      </Grid>
      <Grid item xs={3}>
        <ListItem>xs=8</ListItem>
      </Grid>
    </Grid>
    </>
  )
};

export default GridTable;
