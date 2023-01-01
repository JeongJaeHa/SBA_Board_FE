import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom'
import SignUpPage from './pages/SignUp';
import MainPage from './pages/Main';
import SignInPage from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/main' element={<MainPage />} />
        <Route path='/signin' element={<SignInPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>   
    </BrowserRouter> 
  );
}

export default App;
