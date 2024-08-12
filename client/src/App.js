import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import "./stylesheets/theme.css"
import "./stylesheets/alignments.css"
import "./stylesheets/custom.css"
import "./stylesheets/form-elements.css"
import "./stylesheets/sizes.css"
import ProtectedRoutes from './components/ProtectedRoutes';
import Admin from './pages/Admin';
import Profile from './pages/Profile';
import TheatresForMovie from './pages/TheatresForMovie';
import BookShow from './pages/BookShow';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/movie/:movieId' element={<ProtectedRoutes> <TheatresForMovie /> </ProtectedRoutes>}></Route>
          <Route path='/book-show/:showId' element={<ProtectedRoutes> <BookShow /> </ProtectedRoutes>}></Route>
          <Route path='/admin' element={<ProtectedRoutes> <Admin /> </ProtectedRoutes>}></Route>
          <Route path='/profile' element={<ProtectedRoutes> <Profile /> </ProtectedRoutes>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
