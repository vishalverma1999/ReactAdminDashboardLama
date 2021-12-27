import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./app.css"


const App = () => {
  return <>
    <Topbar />
   <div className="container">
     <Sidebar />
     <Home/>
   </div>
    </>
};

export default App;
