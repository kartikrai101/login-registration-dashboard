import Home from './Home';
import Login from './Login';
import Register from './Register';
import UserList from './UserList';
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <div>
      <BrowserRouter >
        <Routes>
          <Route path="/" element ={<Register/>} />
          <Route path="/register" element ={<Register/>} />
          <Route path="/login" element ={<Login/>} />
          <Route path="/home" element ={<Home/>} />
          <Route path="/userlist" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
