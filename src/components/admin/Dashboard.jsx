import "./dashboard.css";
import Sidebar from './Sidebar'
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <main className="dashboard-container">
        <Navbar />
        <section>
          Contenido principal
          <Outlet />
        </section>
      </main>
    </div>
  );
};

export default Dashboard;
