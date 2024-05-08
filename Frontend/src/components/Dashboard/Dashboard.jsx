import React, { useState } from "react";
import "./Dashboard.css";
import { Link } from "react-router-dom";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProjectsTable from "../NewProject/ProjectsTable";

function Dashboard() {
  const [style, setStyle] = useState(
    "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
  );

  const changeStyle = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };
  const changeStyle1 = () => {
    if (
      style === "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
    ) {
      setStyle(
        "navbar-nav bg-gradient-primary sidebar sidebar-dark accordion toggled1"
      );
    } else {
      setStyle("navbar-nav bg-gradient-primary sidebar sidebar-dark accordion");
    }
  };

  const [isToggled, setIsToggled] = useState(false);

  const toggleStyle = () => {
    setIsToggled(!isToggled);
  };

  const [selectedItem, setSelectedItem] = useState("Articles Scientifiques");
  // Function to handle item selection
  const handleItemClick = (itemName) => {
    setSelectedItem(itemName);
  };

  const [profileFormVisible, setProfileFormVisible] = useState(false);
  const handleItemClick1 = (itemName) => {
    if (itemName === "Profile") {
      setProfileFormVisible(true);
      setSelectedComponent(null); // Set ProjectsTable to null
    } else {
      setProfileFormVisible(false);
    }
    setSelectedItem(itemName);
  };
  const [selectedComponent, setSelectedComponent] = useState(null);
  const handleItemClick3 = (itemName) => {
    setSelectedComponent(itemName === "Projets" ? "ProjectsTable" : null);
    setSelectedItem(itemName);
  };


  
  const routeMappings = {
    "Articles scientifiques": "articles-scientifiques",
    "Ouvrages scientifiques": "ouvrages-scientifiques",
    "Chapites d'ouvrages": "chapitre-ouvrage",
    "Brevets": "brevets",
    "Obtentions végétales": "obtentions-vegetales",
    "Habitations": "habitations",
    "Thèses de doctorat": "these-doctorat",
    "Mastères recherche": "masteres-recherche",
    "Manifestations scientifiques": "manifestations-scientifiques",
    "Conventions": "conventions",
    "Projets": "new-project"
  };
  
  const getRouteForItem = (item) => {
    return routeMappings[item];
  };
  
  // Usage
  const route = getRouteForItem(selectedItem);



  return (
    <div>
      <body id="page-top">
        {/*  <!-- Page Wrapper --> */}
        <div id="wrapper">
          {/*  <!-- Sidebar --> */}

          <ul
            className={`navbar-nav main-color sidebar sidebar-dark accordion ${
              isToggled ? "toggled" : ""
            }`}
            id="accordionSidebar"
          >
            {/*  <!-- Sidebar - Brand --> */}

            <Link
              className="sidebar-brand d-flex align-items-center justify-content-center"
              to="/home"
            >
              <div className="sidebar-brand-icon">
                <img src="imgs/logo.png" alt="No-img" />
              </div>
              <div className="text-center d-none d-md-inline"></div>
            </Link>

            {/*   <!-- Divider --> */}
            <hr className="sidebar-divider my-0" />

            {/*  <!-- Nav Item - Dashboard --> */}
            <li className="nav-item active">
              <a className="nav-link" href="">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span>
              </a>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Heading --> */}
            <div className="sidebar-heading">Interface</div>

            {/*  <!-- Nav Item - Pages Collapse Menu --> */}
            <li className="nav-item">
              <Link
                className="nav-link collapsed"
                data-toggle="collapse"
                data-target="#collapseTwo"
                aria-expanded="true"
                aria-controls="collapseTwo"
              >
                <i className="fas fa-fw fa-cog"></i>
                <span>composantes</span>
              </Link>
              <div
                id="collapseTwo"
                className="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-3 collapse-inner rounded">
                  <h6 className="collapse-header">
                    Composantes d'utilisateur:
                  </h6>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Articles scientifiques")}
                  >
                    Articles scientifiques
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Ouvrages scientifiques")}
                  >
                    Ouvrages scientifiques
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Chapites d'ouvrages")}
                  >
                    Chapites d'ouvrages
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Brevets")}
                  >
                    Brevets
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Obtentions végétales")}
                  >
                    Obtentions végétales
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Habitations")}
                  >
                    Habitations
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Thèses de doctorat")}
                  >
                    Thèses de doctorat
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Mastères recherche")}
                  >
                    Mastères recherche
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() =>
                      handleItemClick("Manifestations scientifiques")
                    }
                  >
                    Manifests scientifiques
                  </Link>
                  <Link
                    className="dropdown-item"
                    onClick={() => handleItemClick("Conventions")}
                  >
                    Conventions
                  </Link>
                  <Link
                    onClick={() => handleItemClick3("Projets")}
                    className="dropdown-item"
                    // onClick={() => handleItemClick("Projets")}
                  >
                    Projets
                  </Link>
                </div>
              </div>
            </li>

            {/* <!-- Nav Item - Utilities Collapse Menu --> */}
            <li className="nav-item">
              <a
                className="nav-link collapsed"
                href="#"
                data-toggle="collapse"
                data-target="#collapseUtilities"
                aria-expanded="true"
                aria-controls="collapseUtilities"
              >
                <i className="fas fa-fw fa-wrench"></i>
                <span>utilitaires</span>
              </a>
              <div
                id="collapseUtilities"
                className="collapse"
                aria-labelledby="headingUtilities"
                data-parent="#accordionSidebar"
              >
                <div className="bg-white py-2 collapse-inner rounded">
                  <h6 className="collapse-header">utilitaires:</h6>
                  <a className="collapse-item" href="utilities-color.html">
                    Coleurs
                  </a>
                  <a className="collapse-item" href="utilities-border.html">
                    Frontières
                  </a>
                  <a className="collapse-item" href="utilities-animation.html">
                    Animations
                  </a>
                  <a className="collapse-item" href="utilities-other.html">
                    Autre
                  </a>
                </div>
              </div>
            </li>

            {/*  <!-- Divider --> */}
            <hr className="sidebar-divider" />

            {/*   <!-- Sidebar Toggler (Sidebar) --> */}
            {/*   <div className="text-center d-none d-md-inline">
                            <button className="rounded-circle border-0" id="sidebarToggle" onClick={changeStyle}></button>
                        </div> */}

            {/*  <!-- Sidebar Message --> */}
          </ul>
          {/*  <!-- End of Sidebar --> */}

          {/*  <!-- Content Wrapper --> */}
          <div id="content-wrapper" className="d-flex flex-column">
            {/*  <!-- Main Content --> */}
            <div id="content">
              {/*  <!-- Topbar --> */}
              <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                {/*  <!-- Sidebar Toggle (Topbar) --> */}
                <button
                  id="sidebarToggleTop"
                  className="btn btn-link d-md-none rounded-circle mr-3 "
                  onClick={changeStyle1}
                >
                  <i className="fa fa-bars"></i>
                </button>

                {/*  <!-- Topbar Search --> */}
                <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control search bg-light border-0 small"
                      placeholder="Rechercher..."
                      aria-label="Search"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary main-color"
                        type="button"
                      >
                        <i className="fas fa-search fa-sm"></i>
                      </button>
                    </div>
                  </div>
                </form>

                {/*  <!-- Topbar Navbar --> */}
                <ul className="navbar-nav ml-auto">
                  {/*  <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
                  <li className="nav-item dropdown no-arrow d-sm-none">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="searchDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-search fa-fw"></i>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                      aria-labelledby="searchDropdown"
                    >
                      <form className="form-inline mr-auto w-100 navbar-search">
                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control bg-light border-0 small"
                            placeholder="Search for..."
                            aria-label="Search"
                            aria-describedby="basic-addon2"
                          />
                          <div className="input-group-append">
                            <button className="btn btn-primary" type="button">
                              <i className="fas fa-search fa-sm"></i>
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Alerts --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="alertsDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-bell fa-fw"></i>
                      {/*  <!-- Counter - Alerts --> */}
                      <span className="badge badge-danger badge-counter">
                        3+
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Alerts --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="alertsDropdown"
                    >
                      <h6 className="dropdown-header">Alerts Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-primary">
                            <i className="fas fa-file-alt text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 12, 2019
                          </div>
                          <span className="font-weight-bold">
                            A new monthly report is ready to download!
                          </span>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-success">
                            <i className="fas fa-donate text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 7, 2019
                          </div>
                          $290.29 has been deposited into your account!
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="mr-3">
                          <div className="icon-circle bg-warning">
                            <i className="fas fa-exclamation-triangle text-white"></i>
                          </div>
                        </div>
                        <div>
                          <div className="small text-gray-500">
                            December 2, 2019
                          </div>
                          Spending Alert: We've noticed unusually high spending
                          for your account.
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Show All Alerts
                      </a>
                    </div>
                  </li>

                  {/*  <!-- Nav Item - Messages --> */}
                  <li className="nav-item dropdown no-arrow mx-1">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="messagesDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <i className="fas fa-envelope fa-fw"></i>
                      {/*  <!-- Counter - Messages --> */}
                      <span className="badge badge-danger badge-counter">
                        7
                      </span>
                    </a>
                    {/*   <!-- Dropdown - Messages --> */}
                    <div
                      className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="messagesDropdown"
                    >
                      <h6 className="dropdown-header">Message Center</h6>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_1.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div className="font-weight-bold">
                          <div className="text-truncate">
                            Hi there! I am wondering if you can help me with a
                            problem I've been having.
                          </div>
                          <div className="small text-gray-500">
                            Emily Fowler · 58m
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_2.svg"
                            alt="..."
                          />
                          <div className="status-indicator"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            I have the photos that you ordered last month, how
                            would you like them sent to you?
                          </div>
                          <div className="small text-gray-500">
                            Jae Chun · 1d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="img/undraw_profile_3.svg"
                            alt="..."
                          />
                          <div className="status-indicator bg-warning"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Last month's report looks great, I am very happy
                            with the progress so far, keep up the good work!
                          </div>
                          <div className="small text-gray-500">
                            Morgan Alvarez · 2d
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item d-flex align-items-center"
                        href="#"
                      >
                        <div className="dropdown-list-image mr-3">
                          <img
                            className="rounded-circle"
                            src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                            alt="..."
                          />
                          <div className="status-indicator bg-success"></div>
                        </div>
                        <div>
                          <div className="text-truncate">
                            Am I a good boy? The reason I ask is because someone
                            told me that people say this to all dogs, even if
                            they aren't good...
                          </div>
                          <div className="small text-gray-500">
                            Chicken the Dog · 2w
                          </div>
                        </div>
                      </a>
                      <a
                        className="dropdown-item text-center small text-gray-500"
                        href="#"
                      >
                        Read More Messages
                      </a>
                    </div>
                  </li>

                  <div className="topbar-divider d-none d-sm-block"></div>

                  {/* <!-- Nav Item - User Information --> */}
                  <li className="nav-item dropdown no-arrow">
                    <a
                      className="nav-link dropdown-toggle"
                      href="#"
                      id="userDropdown"
                      role="button"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                        Hadil Ben Abdallah
                      </span>
                      <img className="img-profile rounded-circle" src="" />
                    </a>
                    {/*  <!-- Dropdown - User Information --> */}
                    <div
                      className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                      aria-labelledby="userDropdown"
                    >
                      <Link
                        className="dropdown-item"
                        onClick={() => handleItemClick1("Profile")}
                      >
                        <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                        Profile
                      </Link>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                        Paramètres
                      </a>
                      <a className="dropdown-item" href="#">
                        <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                        Journal d'activité
                      </a>
                      <div className="dropdown-divider"></div>
                      <Link
                        className="dropdown-item"
                        to="/"
                        data-toggle="modal"
                        data-target="#logoutModal"
                      >
                        <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                        Se déconnecter
                      </Link>
                    </div>
                  </li>
                </ul>
              </nav>
              {/*  <!-- End of Topbar --> */}

              {/* <!-- Begin Page Content --> */}
              <div className="container-fluid">
                {/*  <!-- Page Heading --> */}
                <div className="d-sm-flex align-items-center justify-content-between mb-4 report">
                  <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                  <a
                    href="#"
                    className="d-none d-sm-inline-block btn btn-sm shadow-sm"
                  >
                    <i className="fas fa-download fa-sm text-white-50"></i>{" "}
                    Télécharger un Report
                  </a>
                </div>

                {/*  <!-- Content Row --> */}
                <div className="row"></div>

                {/*  <!-- Content Row --> */}

                <div className="row">
                  {/*  <!-- Pie Chart --> */}
                  <div className="col-xl-12 col-lg-12">
                    <div className="card shadow mb-4">
                      {/*  <!-- Card Header - Dropdown --> */}
                      <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                        <h6 className="m-0 font-weight-bold ">
                          {selectedItem}
                        </h6>
                        {selectedItem !== "Profile" && (
  <Link to={`/${route}`} className="btn mx-2 btn-success">
    + Nouveaux {selectedItem}
  </Link>
)}

                        {/* <div className="dropdown no-arrow">
                          <a
                            className="dropdown-toggle"
                            href="#"
                            role="button"
                            id="dropdownMenuLink"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                          >
                            <i className="fas fa-ellipsis-v fa-sm fa-fw text-gray-400"></i>
                          </a>
                          <div
                            className="dropdown-menu dropdown-menu-right shadow animated--fade-in"
                            aria-labelledby="dropdownMenuLink"
                          >
                            <div className="dropdown-header">
                              Dropdown Header:
                            </div>
                            <a className="dropdown-item" href="#">
                              Mettre à jour
                            </a>
                            <a className="dropdown-item" href="#">
                              Another action
                            </a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#">
                              Something else here
                            </a>
                          </div>
                        </div> */}
                      </div>
                      {/* {profileFormVisible && <ProfileForm />} */}
                      {selectedItem === "Profile" && (
                        <div className="center-profile-form">
                          <ProfileForm />
                        </div>
                      )}
                      {selectedComponent === "ProjectsTable" && (
                        <div className="center-profile-form">
                          <ProjectsTable />
                        </div>
                      )}

                      {/*  <!-- Card Body --> */}
                    </div>
                  </div>
                </div>

                {/*   <!-- Content Row --> */}
                <div className="row">
                  {/*   <!-- Content Column --> */}
                  <div className="col-lg-6 mb-4">
                    {/* <!-- Project Card Example --> */}
                    {/* <!-- Color System --> */}
                  </div>
                  <div className="col-lg-6 mb-4"></div>
                </div>
              </div>
              {/*   <!-- /.container-fluid --> */}
            </div>
            {/*   <!-- End of Main Content -->
            <!-- Footer --> */}

            <div className="footer-dashboard pt-3 pb-3 text-white-50 text-center text-md-start">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 col-lg-4"></div>
                  <div className="col-md-12 col-lg-4">
                    <div className="contact">
                      <ul className="d-flex  justify-content-center list-unstyled gap-3"></ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="d-flex justify-content-center copyright dashboard">
                    <div>
                      Copyright © Ministère de l'Enseignement Supérieur et de la
                      Recherche Scientifique - <span>Tunisie</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- End of Footer --> */}
          </div>
          {/*  <!-- End of Content Wrapper --> */}
        </div>
        {/*  <!-- End of Page Wrapper -->

                                <!-- Scroll to Top Button--> */}
        <a className="scroll-to-top rounded" href="#page-top">
          <i className="fas fa-angle-up"></i>
        </a>

        {/*  <!-- Logout Modal--> */}
        <div
          className="modal fade"
          id="logoutModal"
          tabindex="-1"
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Ready to Leave?
                </h5>
                <button
                  className="close"
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                Select "Logout" below if you are ready to end your current
                session.
              </div>
              <div className="modal-footer">
                <button
                  className="btn btn-secondary"
                  type="button"
                  data-dismiss="modal"
                >
                  Cancel
                </button>
                <a className="btn btn-primary" href="login.html">
                  Logout
                </a>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
}

export default Dashboard;
