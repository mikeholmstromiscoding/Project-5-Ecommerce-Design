import React from 'react'

export default function TopSellers() {
    return (
        <div>
            <section id="topsellers">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="font-weight-bold">TOP<span className="text-theme"> SELLERS</span></h3>
                            <img src="/img/shop_border.png" className="img-fluid" alt="" />
                            <p className="small-2 mb-5">Check out our weekly top sellers in all category</p>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row justify-content-center mx-auto">
                        {/* Card 1 Top Sellers */}
                        <div className="col-md-6">
                            <div className="card-background position-relative">
                                <div>
                                    <img src="/img/hot_icon.png" className="d-none hot-icon position-absolute" alt="#/" />
                                    <img src="/img/bexim_logo.png" className="bexim-logo position-absolute" alt="/#" />
                                </div>
                                {/* Overlay Icons */}
                                <img src="/img/tooltip_color_icon.png" className="position-absolute tooltip-color-icon" alt="/#" />
                                <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                <div className="bg-icons position-absolute d-flex align-items-center">
                                    <div className="red-dot ml-3"></div>
                                    <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                </div>
                                {/* Overlay Icons End */}
                                <div className="bg-topsellers-man d-flex">
                                    {/* Overlay Text items */}
                                    <div className="card-text-hide">
                                        <p className="card-text-title-overlay text-white position-absolute">Men's denim shirts full</p>
                                        <p className="text-fashion text-white position-absolute">Fashion</p>
                                        <p className="text-discount text-white position-absolute">$220.00</p>
                                        <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                        <div className="position-absolute ranking">
                                            <span className="rank-star"><i className="fas fa-star"></i></span>
                                            <span className="rank-star"><i className="fas fa-star"></i></span>
                                            <span className="rank-star"><i className="fas fa-star"></i></span>
                                            <span className="rank-star"><i className="fas fa-star"></i></span>
                                            <span className="rank-no-star"><i className="far fa-star"></i></span>
                                        </div>
                                    </div>
                                    {/* Overlay Text items End */}
                                    <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Men's denim shirts full</span></p>
                                </div>
                            </div>
                        </div>
                        {/* Card 2 Top Sellers */}
                        <div className="col-md-6">
                            <div className="card-background position-relative topseller-woman">
                                <div>
                                    <img src="/img/hot_icon.png" className="d-none hot-icon position-absolute" alt="#/" />
                                    <img src="/img/bexim_logo.png" className=" d-none bexim-logo position-absolute" alt="/#" />
                                    <img src="/img/lighton_logo.png" className="lighton-logo position-absolute" alt="/#" />
                                </div>
                                {/* Overlay Icons */}
                                <img src="/img/tooltip_color_icon.png" className="position-absolute tooltip-color-icon" alt="/#" />
                                <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                <div className="bg-icons position-absolute d-flex align-items-center">
                                    <div className="red-dot ml-3"></div>
                                    <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                </div>
                                {/* Overlay Icons End */}
                                <div className="bg-topsellers-woman d-flex">
                                    {/* Overlay Text items */}
                                    <div className="card-text-hide">
                                        <p className="card-text-title-overlay2 text-white position-absolute">Women's leather bag and shoe</p>
                                        <p className="text-fashion2 text-white position-absolute">Fashion</p>
                                        <p className="text-discount2 text-white position-absolute">$220.00</p>
                                        <p className="text-price2 text-theme position-absolute font-weight-bolder">$190.00</p>
                                        <div className="position-absolute ranking2">
                                            <span className="rank-star2"><i className="fas fa-star"></i></span>
                                            <span className="rank-star2"><i className="fas fa-star"></i></span>
                                            <span className="rank-star2"><i className="fas fa-star"></i></span>
                                            <span className="rank-star2"><i className="fas fa-star"></i></span>
                                            <span className="rank-no-star2"><i className="far fa-star"></i></span>
                                        </div>
                                    </div>
                                    {/* Overlay Text items End */}
                                    <p className="bg-text-card2 align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title2 text-white">Women's leather bag and shoe</span></p>
                                </div>
                            </div>
                            {/* Card 3 */}
                            <div className="card-background position-relative mt-2">
                                <div>
                                    <img src="/img/hot_icon.png" className="d-none hot-icon position-absolute" alt="#/" />
                                    <img src="/img/bexim_logo.png" className=" d-none bexim-logo position-absolute" alt="/#" />
                                    <img src="/img/lighton_logo.png" className=" d-none lighton-logo position-absolute" alt="/#" />
                                    <img src="/img/rosimo_logo.png" className=" rosimo-logo position-absolute" alt="/#" />
                                </div>
                                {/* Overlay Icons */}
                                <img src="/img/tooltip_color_icon.png" className=" d-none position-absolute tooltip-color-icon" alt="/#" />
                                <img src="/img/tooltip_quickview_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                <div className="bg-icons position-absolute d-flex align-items-center">
                                    <div className="red-dot ml-3"></div>
                                    <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                    <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                </div>
                                {/* Overlay Icons End */}
                                <div className="bg-topsellers-shoes d-flex">
                                    {/* Overlay Text items */}
                                    <div className="card-text-hide">
                                        <p className="card-text-title-overlay3 text-white position-absolute">New look men's sneakers</p>
                                        <p className="text-fashion3 text-white position-absolute">Shoes</p>
                                        <p className="text-discount3 text-white position-absolute">$220.00</p>
                                        <p className="text-price3 text-theme position-absolute font-weight-bolder">$190.00</p>
                                        <div className="position-absolute ranking3">
                                            <span className="rank-star3"><i className="fas fa-star"></i></span>
                                            <span className="rank-star3"><i className="fas fa-star"></i></span>
                                            <span className="rank-star3"><i className="fas fa-star"></i></span>
                                            <span className="rank-star3"><i className="fas fa-star"></i></span>
                                            <span className="rank-no-star3"><i className="far fa-star"></i></span>
                                        </div>
                                    </div>
                                    {/* Overlay Text items End */}
                                    <p className="bg-text-card3 align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title3 text-white">New look men's sneakers</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
