import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";


const App = () => {
  return <>
    <BrowserRouter>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userList" element={<UserList />} />   
          <Route path="/user/:userId" element={<User />} />     {/*path is going to be user and additionally :userId, so this means basically look at this path and after this userId can be anything any number any string and it's going to be our user id*/}
          <Route path="/newUser" element={<NewUser />} />
        </Routes>
      </div>
    </BrowserRouter>
  </>
};

export default App;


/*
 */