import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './NavBar.scss'

interface Props {}

const NavBar: React.FC<Props> = (props) => {
    return (
        <nav className="navbar navbar-expand-xl navbar-light bg-light sticky-top">
            <a className="navbar-brand">
                <Link className="navbar-brand" to="/">
                    Home
                </Link>
            </a>

            <div className="navbar">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a
                            className="nav-link dropdown-toggle"
                            href="#"
                            id="navbarDropdown"
                            role="button"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="false"
                        >
                            Shop
                        </a>
                        <div
                            className="dropdown-menu"
                            aria-labelledby="navbarDropdown"
                        >
                            <a className="dropdown-item" href="#">
                                <Link
                                    className="nav-link links"
                                    to="/originalart"
                                >
                                    Original Art
                                </Link>
                            </a>
                            <a className="dropdown-item" href="#">
                                <Link className="nav-link links" to="/prints">
                                    Prints
                                </Link>
                            </a>

                            <a className="dropdown-item" href="#">
                                <Link className="nav-link links" to="/merch">
                                    Merch
                                </Link>
                            </a>
                        </div>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link">
                            <Link className="nav-link links" to="/about">
                                About
                            </Link>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link">
                            <Link className="nav-link links" to="/contact">
                                Contact
                            </Link>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
    {
        /* <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a class="navbar-brand" href="#">Navbar</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
  <ul class="navbar-nav mr-auto">
    <li class="nav-item active">
      <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Link</a>
    </li>
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        Dropdown
      </a>
      <div class="dropdown-menu" aria-labelledby="navbarDropdown">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Something else here</a>
      </div>
    </li>
    <li class="nav-item">
      <a class="nav-link disabled" href="#">Disabled</a>
    </li>
  </ul>
  <form class="form-inline my-2 my-lg-0">
    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
  </form>
</div>
</nav> */
    }
}

export default NavBar
