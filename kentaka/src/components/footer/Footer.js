import React from 'react'

export default function Footer() {
    return (
        <div>
            <section id="footer">
                <div className="hr-theme"></div>
                <div className="bg-footer">
                    <div className="container">
                        <div className="row">
                            {/* First Column Brand & Socials */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <img src="/img/brand_footer.png" className="brand" alt="/#" />
                                <p className="text-white small text-thiny mt-3">
                                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. In laborum aliquid officia dolor quam porro facere amet obcaecati, incidunt voluptatem eius ad, labore maiores dignissimos illum eos maxime ea similique. Aut dolores facere odit veritatis?
                                </p>
                                <p className="text-white small text-thiny">Follow us <span><img src="/img/theme_line.png" className="line" alt="" /></span> </p>
                                <div className="socials-footer">
                                    <a href="/#" className="small text-theme mr-2 "><i className="fab fa-facebook-f"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-twitter"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-instagram"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-pinterest-p"></i></a>
                                    <a href="/#" className="small text-theme mr-2"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                            {/* Second Column Contact  */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <h6 className="text-theme footer-title">CONTACT INFO</h6>
                                <p className="text-white text-thiny"><span className="text-theme">Address:</span><br />Solna Business Park <br /> Feni-2500, Stockholm</p>
                                <p className="text-white text-thiny"><span className="text-theme">Phone:</span><br />+08-123456789 <br /> +08-123456789</p>
                                <p className="text-white text-thiny"><span className="text-theme">Email:</span><br />support@website.com <br />info@website.com</p>
                            </div>
                            {/* Third Column Links */}
                            <div className="d-none d-md-block col-md-3 mt-5">
                                <h6 className="text-theme footer-title">USEFUL LINKS</h6>
                                <div><a href="/#" className="text-white text-thiny">Privay Policy</a></div>
                                <div><a href="/#" className="text-theme text-thiny"><u>Terms & Condition</u></a></div>
                                <div><a href="/#" className="text-white text-thiny">Contact Us</a></div>
                                <div><a href="/#" className="text-white text-thiny">Our Sitemap</a></div>
                                <div><a href="/#" className="text-white text-thiny">Latest News</a></div>
                                <div><a href="/#" className="text-white text-thiny">Returns</a></div>
                            </div>
                            {/* Fourth Column Instagram */}
                            <div className="d-none d-md-block col-md-3 mt-5 instagram-wrapper">
                                <h6 className="text-theme footer-title">RECENT INSTAGRAM</h6>
                                {/* Group 1 */}
                                <div className="d-flex">
                                    <img src="/img/insta1.jpg" className="img-fluid instagram-img mr-2" alt="/#" />
                                    <img src="/img/insta2.jpg" className="img-fluid instagram-img mr-2" alt="/#" />
                                    <img src="/img/insta3.jpg" className="d-none d-lg-block img-fluid instagram-img" alt="/#" />
                                </div>
                                {/* Group 2 */}
                                <div className="d-flex">
                                    <img src="/img/insta4.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src="/img/insta5.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src="/img/insta6.jpg" className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                </div>
                                {/* Group 3 */}
                                <div className="d-flex">
                                    <img src="/img/insta7.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src="/img/insta8.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                    <img src="/img/insta9.jpg" className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                </div>
                            </div>
                            {/* Shows On Mobiles Only */}
                            <div className="d-none mx-auto mt-3 footer-mobiles">
                                <div className="flex-column mr-3">
                                    <h6 className="text-theme footer-title">CONTACT INFO</h6>
                                    <p className="text-white text-thiny"><span className="text-theme">Address:</span><br />Solna Business Park <br /> Feni-2500, Stockholm</p>
                                    <p className="text-white text-thiny"><span className="text-theme">Phone:</span><br />+08-123456789 <br /> +08-123456789</p>
                                    <p className="text-white text-thiny"><span className="text-theme">Email:</span><br />support@website.com <br />info@website.com</p>
                                </div>
                                <div className="ml-3">
                                    <h6 className="text-theme footer-title">RECENT INSTAGRAM</h6>
                                    {/* Group 1 */}
                                    <div className="d-flex">
                                        <img src="/img/insta1.jpg" className="img-fluid instagram-img mr-2" alt="/#" />
                                        <img src="/img/insta2.jpg" className="img-fluid instagram-img mr-2" alt="/#" />
                                        <img src="/img/insta3.jpg" className="d-none d-lg-block img-fluid instagram-img" alt="/#" />
                                    </div>
                                    {/* Group 2 */}
                                    <div className="d-flex">
                                        <img src="/img/insta4.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src="/img/insta5.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src="/img/insta6.jpg" className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                    </div>
                                    {/* Group 3 */}
                                    <div className="d-flex">
                                        <img src="/img/insta7.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src="/img/insta8.jpg" className="img-fluid instagram-img mr-2 mt-2" alt="/#" />
                                        <img src="/img/insta9.jpg" className="d-none d-lg-block img-fluid instagram-img mt-2" alt="/#" />
                                    </div>

                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
                {/* Footer Bottom */}
                <div className="bg-footer-bottom">
                    <div className="container">
                        <div className="d-flex align-items-center">
                            <div className="text-white small footer-brand">&copy; Kenkata 2020</div>
                            <div className="d-none d-md-block ml-auto">
                                <img src="/img/mastercard.png" className="payments mr-2" alt="/#" />
                                <img src="/img/paypal.png" className="payments mr-2" alt="/#" />
                                <img src="/img/visa.png" className="payments mr-2" alt="/#" />
                                <img src="/img/payoneer.png" className="payments mr-2" alt="/#" />
                                <img src="/img/discover.png" className="payments" alt="/#" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
