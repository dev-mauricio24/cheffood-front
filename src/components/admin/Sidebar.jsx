import "./dashboard.css";

const Sidebar = () => {
  return (
    <aside className="sidebar shadow">
        <div className="sidebar-img">
          <img src="../public/logo.png" alt="Logo menu" />
        </div>
        <div>
          <p>
            <button
              className="btn-collapse"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapse1"
              aria-expanded="false"
              aria-controls="collapse1"
            >
              <span>Ordenes</span>
              <i className='bx bxs-chevron-down'></i>
            </button>
          </p>
          <div className="collapse mb-2" id="collapse1">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
          <p className="item-collapse">
            <button
              className="btn-collapse"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseExample2"
              aria-expanded="false"
              aria-controls="collapseExample"
            >
              <span>Otro elemento</span>
              <i className='bx bxs-chevron-down'></i>
            </button>
          </p>
          <div className="collapse" id="collapseExample2">
            <div className="card card-body">
              Some placeholder content for the collapse component. This panel is
              hidden by default but revealed when the user activates the
              relevant trigger.
            </div>
          </div>
        </div>
      </aside>
  );
};

export default Sidebar;
