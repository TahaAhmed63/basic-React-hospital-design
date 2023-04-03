import {React,useState} from "react";
import "./Sidebar.css";


const Sidebar = () => {
    const [activeItem, setActiveItem] = useState('currentRequest');
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const handleItemClick = (item) => {
        setActiveItem(item);
      };
      const handleToggle = () => {
        setSidebarOpen(!sidebarOpen);
      };  
  return (
    <>
        <button className="sidebar-toggle">
        <button className="sidebar-toggle" onClick={handleToggle}>
  <span className="line"></span>
  <span className="line"></span>
  <span className="line"></span>
</button>
      </button>
      <div className={`sidebar${sidebarOpen ? ' open' : ''}`}>
      <div className="sidebar-heading">
    <p> LODGN</p> 
      </div>
   
      <ul className="sidebar-menu">
      <li
          className={`sidebar-menu-item ${activeItem === 'currentRequest' ? 'active' : ''}`}
          onClick={() => handleItemClick('currentRequest')}
        >
          Current Request
        </li>
        <li
          className={`sidebar-menu-item ${activeItem === 'ongoingStays' ? 'active' : ''}`}
          onClick={() => handleItemClick('ongoingStays')}
        >
          Ongoing Stays
        </li>
        <li
          className={`sidebar-menu-item ${activeItem === 'previousStays' ? 'active' : ''}`}
          onClick={() => handleItemClick('previousStays')}
        >
          Previous Stays
        </li>
        <li
          className={`sidebar-menu-item ${activeItem === 'reports' ? 'active' : ''}`}
          onClick={() => handleItemClick('reports')}
        >
          Reports
        </li>
      </ul>
      <div className="sidebar-logout">
      <button >Log Out</button>
      </div>
      <div className="credit">
      <p>Help Desk</p>
      <p>786-874 9988</p>
      </div>
    </div>
    </>
  );
};

export default Sidebar;
