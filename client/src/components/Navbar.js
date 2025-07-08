import { Outlet, Link } from "react-router-dom";
const Navbar = () => {
    return (
    <div>
        <nav class="navbar bg-body-tertiary">
  <a class="nav-link active" aria-current="page" href="#">Profile</a>
  <a class="nav-link active" aria-current="page" href="#">Login</a>
  <a class="nav-link active" aria-current="page" href="#">Register</a>
  <div className="container-fluid">
  <Link className = "navbar-brand" to ="/">Profile</Link>  
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    <div className="collapse navbar-collapse" id = "navbarNav">
        <ul className="navbar-nav">
        <li className="nav-item">
            <Link className="nav-link" to="/register">RegisterForm</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/register">LoginForm</Link>
        </li>
        </ul>
    </div>
    <div class="input-group">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
    </div>
    </form>
  </div>
  </nav> 
  <Outlet />
  </div>
  );
}

