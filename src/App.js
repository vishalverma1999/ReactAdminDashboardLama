import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserList from "./pages/home/userList/UserList";


const App = () => {
  return <>
  <BrowserRouter>
    <Topbar />
    <div className="container">
      <Sidebar />
      <Routes>
      <Route path= "/" element={<Home />}/>
      <Route path= "/userList" element={<UserList />}/>
      </Routes>
    </div>
  </BrowserRouter>
  </>
};

export default App;
