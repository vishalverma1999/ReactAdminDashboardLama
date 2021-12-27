import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import "./app.css"


const App = () => {
  return <>
    <Topbar />
   <div className="container">
     <Sidebar />
     <div className="others">others</div>
   </div>
    </>
};

export default App;
