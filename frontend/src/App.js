import Signup from './Register';
import Login from "./Login";
import Home from './Home';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import {Routes,BrowserRouter, Route,Link} from "react-router-dom";
// import Users from "./users";

function App() {
  return (
    <BrowserRouter>
    <>
    <Provider store={store}>

      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Signup />}/>
        {/* <Route path="/user" element={<Users />}/> */}
        <Route path="/home" element={<Home/>}></Route>
        </Routes>
        </Provider>
        </>

    </BrowserRouter>
  );
}

export default App;
