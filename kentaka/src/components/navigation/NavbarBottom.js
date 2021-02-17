import React from 'react';

const NavbarBottom = () => {
    return (
        <div>
            <div className="border-line"></div>
            <div className="container" id="navbar-bottom">
                <nav className="navbar navbar-expand-lg bg-trans">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon-black"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav justify-content-between w-100">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle btn-theme" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span className="mr-1"><img className="img-fluid browse-burger" src="/img/burger_menu.png" alt="#"/></span>Browse Categories</a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a className="dropdown-item" href="/#">Action</a>
                                    <a className="dropdown-item" href="/#">Another action</a>
                                    <div className="dropdown-divider"></div>
                                    <a className="dropdown-item" href="/#">Something else here</a>
                                </div>
                            </li>
                            {/* Nav-links wrapper */}
                            <div className="d-lg-flex d-md-block">
                                <li className="nav-item active">
                                    <a className="nav-link text-dark" href="/#">Home <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-nav text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Shop
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-nav text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Products
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-nav text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Categories
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle-nav text-dark" href="/#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        Pages
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="/#">Something else here</a>
                                    </div>
                                </li>
                                <li className="nav-item active">
                                    <a className="nav-link text-dark" href="/#">Blog <span className="sr-only">(current)</span></a>
                                </li>
                               
                            </div>
                            {/* Nav links wrapper end */}
                            <a className="special-offer btn-special-offer text-white d-sm-block" href="/#">SPECIAL OFFER</a>
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavbarBottom;