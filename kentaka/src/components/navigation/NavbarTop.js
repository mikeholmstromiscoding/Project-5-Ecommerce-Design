import React from 'react';

const NavbarTop = () => {
    return (
        <div>
            <div className="bg-top" id="navbar-top">
                <div className="container">
                    <div className="row">
                        <div className="d-none d-md-block col-md-12">
                            <div className="d-flex">
                                {/* Right Items Start */}
                                <div className="dropdown">
                                    <button className="btn-dropdown btn-transparent dropdown-toggle font-weight-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ENG</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/#">SWE</a>
                                    </div>
                                </div>
                                <div className="dropdown">
                                    <button className="btn-dropdown btn-transparent dropdown-toggle font-weight-light" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        USD</button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="/#">EURO</a>
                                    </div>
                                    <span className="border-left p-1 ml-1"></span>
                                </div>
                                {/* Left Items Start */}
                                <div className="left-items ml-auto d-flex">
                                    <div className="newsletter">
                                        <a href="/#" className="small text-white font-weight-light">Newsletter</a>
                                        <span className="border-left p-1 ml-2"></span>
                                    </div>
                                    <div className="contact-us">
                                        <a href="/#" className="small text-white font-weight-light">Contact Us</a>
                                        <span className="border-left p-1 ml-2"></span>
                                    </div>
                                    <div className="faqs">
                                        <a href="/#" className="small text-white font-weight-light">FAQs</a>
                                        <span className="border-left p-1 ml-2"></span>
                                    </div>
                                    <div className="socials">
                                        <a href="/#" className="small text-white mr-2"><i className="fab fa-facebook-f"></i></a>
                                        <a href="/#" className="small text-white mr-2"><i className="fab fa-twitter"></i></a>
                                        <a href="/#" className="small text-white mr-2"><i className="fab fa-instagram"></i></a>
                                        <a href="/#" className="small text-white mr-2"><i className="fab fa-pinterest-p"></i></a>
                                        <a href="/#" className="small text-white mr-2"><i className="fab fa-youtube"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarTop;