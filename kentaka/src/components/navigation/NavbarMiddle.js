import React from 'react';


const NavbarMiddle = () => {

    return (
        <div>
            <div className="container" id="navbar-middle">
                <div className="d-flex align-items-center justify-content-between navbar-middle-wrapper">
                    <div className="brand">
                        <span><a href="/#"><img src="/img/Brand.png" className="ml-2 img-fluid" alt="/#"></img></a></span>
                    </div>
                    <div className="mx-auto">
                        <form>
                            <div className="input-group">
                                <input type="search" id="search" className="form-control" aria-label="Text input with dropdown button" placeholder="Search products..." />
                                <div className="input-group-append">
                                    <button className="btn-dropdown-search dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Categories</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/#">Action</a>
                                        <a className="dropdown-item" href="/#">Another action</a>
                                        <a className="dropdown-item" href="/#">Something else here</a>
                                    </div>
                                    <span className="input-group-text bg-theme btn-rounded"><a href="/#"><i className="fas fa-search text-white"></i></a></span>
                                    
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="nav-icons">
                        <a className="text-dark ml-1" href="/#"><i className="far fa-user"></i> <span className="d-none d-lg-inline-block ml-1" >My Account</span> </a>
                        <a className="text-dark ml-3" href="/#"><i className="far fa-heart"></i></a>
                        <a className="text-dark ml-3" href="/#"><i className="fas fa-random position-relative"><span className="badge badge-pill badge-theme position-absolute">0</span></i></a>
                        <a className="text-dark ml-3" href="/#"><i className="fas fa-shopping-bag position-relative"><span className="badge badge-pill badge-theme position-absolute">0</span></i><span className="cart-money"> $0.00</span></a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMiddle;
