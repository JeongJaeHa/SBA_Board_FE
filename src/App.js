import './App.css';
import {BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import SignUpPage from './pages/SignUp';
import MainPage from './pages/Main';
import SignInPage from './pages/SignIn';
import UserTable from './pages/UserTable';
import WritePage from './pages/Write';
import DetailPage from './pages/Detail';
import EditPage from './pages/Edit';
import GridTable from './pages/GridTable';
import { Box } from '@mui/material';

function App() {

  return (
    <>
        <AppBar position="static">
    <Toolbar>
      <Box sx={{ textAlign: 'center',textTransform: 'uppercase', fontWeight: 'bold', fontSize: 30, fontStyle: 'italic' }}>
      SBA AWS Public&Private Cloud
      </Box>
    </Toolbar>
    </AppBar>

    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
        <Route path='/write' element={<WritePage />} />
        <Route path='/testmain' element={<UserTable />} />
        <Route path='/detail/:id' element={<DetailPage />} />
        <Route path='/edit' element={<EditPage />} />
        <Route path='/gird' element={<GridTable />} />
      </Routes>   
    </BrowserRouter> 
    </>
  );
}

export default App;
