import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Badge from "react-bootstrap/Badge";
import Modal from "../Modal";
import Cart from "../components/Cart";
import { useCart } from "./ContextReducer";
import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";

export default function Navbar(props) {
  const [cartView, setCartView] = useState(false);
  const navigate = useNavigate();

  const handelLogOut = () => {
    localStorage.removeItem("authToken");
    navigate("/login");
  };
  const loadCart = () => {
    setCartView(true);
  };

  const items = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-warning">
        <div className="container-fluid">
          <Link
            className="navbar-brand fs-3 fw-bold text-dark shadow-lg p-3 bg-warning rounded"
            to="/"
          >
            CFood
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav me-auto mb-2">
              <li className="nav-item">
                <Link
                  className="nav-link active fs-4 "
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              {localStorage.getItem("authToken") ? (
                <li className="navItem">
                  <Link
                    className="nav-link active fs-4 "
                    aria-current="page"
                    to="/"
                  >
                    My Orders
                  </Link>
                </li>
              ) : (
                ""
              )}
            </ul>
            {!localStorage.getItem("authToken") ? (
              <div className="d-flex">
                <Link className=" btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>

                <Link
                  className="btn bg-white text-success mx-1 "
                  to="/creatuser"
                >
                  Signup
                </Link>
              </div>
            ) : (
              <div>
                <div
                  className="btn bg-white text-success mx-2"
                  onClick={loadCart}
                >
                  <Badge pill bg="danger" bandgeContent={items.length}>
                    <ShoppingBagIcon />
                  </Badge>
                </div>
                {cartView ? (
                  <Modal onClose={() => setCartView(false)}>
                    <Cart />
                  </Modal>
                ) : null}
                <div
                  className="btn bg-white text-danger mx-2"
                  onClick={handelLogOut}
                >
                  Logout
                </div>
              </div>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
}
