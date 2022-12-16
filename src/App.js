
import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import HomePage from './components/HomePage/HomePage';
import Login from './components/Login/Login';
import CreateNote from './components/Notes/CreateNote';
import ListNotes from './components/Notes/ListNotes';
import Signin from './components/SignIn/Signin';

function App() {

    // const [userEmail,setUserEmail] = useState('');
    // const [userPassword,setUserPassword] = useState('');
    // const [userLoggedIn,setUserLoggedIn] = useState(false)

    // function setUser(uemail,upass){
    //   setUserEmail(uemail)
    //   setUserPassword(upass)
    // }

    // function setSession(value){
    //   setUserLoggedIn(value)
    // }



    return (
      <div className="App">
          {/* <Routes>
            <Route path="/" element={<HomePage/>} />
            <Route path='/login' element={<Login userEmail={userEmail} userPassword={userPassword} setSession={setSession}  />} />
            <Route path='/signin' element={<Signin setFunction={setUser}/>}/>
            <Route path='/dashboard' element={<DashBoard userEmail={userEmail} setFunction={setUser}/>}/>
           </Routes> */}

          <CreateNote/>
          <ListNotes/>
      </div>
    );
}

export default App;
