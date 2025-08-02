import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#11eba3" }} >
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/" style={{ color: "#e36bfbff" }}>
            ShoppingCartApp
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/" style={{ color: "#ffffff" }}>
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/catalog" style={{ color: "#ffffff" }}>
                  Catalog
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={"nav-link"} to="/cart" style={{ color: "#ffffff" }}>
                  Cart
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
