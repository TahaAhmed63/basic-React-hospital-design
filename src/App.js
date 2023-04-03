import Detail from "./Detail";
import "./Sidebar"
import "./App.css"
import Sidebar from "./Sidebar";
import Apointment  from "./Apointment";

function App() {
  return (
<>
<div className="container-1">
  <div className="sidebar-wrap">
 <Sidebar/>
  </div>
  <div className="detail-wrap">
<Detail/>
<Apointment/>
  </div>
  </div>
</>
  );
}

export default App;
