import './App.css';
import { Route,Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import User from './components/pages/User'
import ErrorPage from './components/pages/ErrorPage'
import NavBar from './components/NavBar';
import MainFooter from './components/MainFooter';

function App() {

  return ( 
    <>
    <NavBar/>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/user/:id' element={<User/>}/>
        <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <MainFooter/>
    </>
  );
}

export default App;
