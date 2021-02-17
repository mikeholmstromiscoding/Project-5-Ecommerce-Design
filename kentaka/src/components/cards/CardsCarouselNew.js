import React from 'react'

export default function CardsCarouselNew() {
    return (
        <div>
            <section id="carousel-new-arrivals">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="font-weight-bold">NEW<span className="text-theme"> ARRIVALS</span></h3>
                            <img src="/img/shop_border.png" className="img-fluid" alt="/#" />
                            <p className="small-2 mb-5">We always try to give you the best product within a fast and reliable way</p>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* Slide Items 1 */}
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row justify-content-center mx-auto">
                                    {/* Card 1 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men d-flex">
                                                {/* Overlay Text items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Blue silk flare sleeved top</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 2 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men2 d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">New look men's coat</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 girls */}
                                    <div className="d-none d-lg-block col-lg-4 mb-4 girls">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-woman d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look girls's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Circle pattern girls shirt</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items 2 */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row justify-content-center mx-auto">
                                    {/* Card 1 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men d-flex">
                                                {/* Overlay Text items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Blue silk flare sleeved top</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 2 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men2 d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">New look men's coat</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 girls */}
                                    <div className="d-none d-lg-block col-lg-4 mb-4 girls">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-woman d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look girls's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Circle pattern girls shirt</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items 3 */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row justify-content-center mx-auto">
                                    {/* Card 1 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men d-flex">
                                                {/* Overlay Text items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Blue silk flare sleeved top</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 2 Men */}
                                    <div className="col-md-6 col-lg-4 mb-4">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-men2 d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look men's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">New look men's coat</span></p>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card 3 girls */}
                                    <div className="d-none d-lg-block col-lg-4 mb-4 girls">
                                        <div className="card-background position-relative">
                                            <div>
                                                <span className="new-arrival-icon position-absolute"><img src="/img/new_arrival_icon.png" alt="#/" /></span>
                                            </div>
                                            {/* Overlay Icons */}
                                            <img src="/img/card_add_to_cart_icon.png" className="add-to-cart-icon position-absolute" alt="/#" />
                                            <div className="bg-icons position-absolute d-flex align-items-center">
                                                <div className="red-dot ml-3"></div>
                                                <a href="/#"><img src="/img/card_heart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_compare_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_search_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                                <a href="/#"><img src="/img/card_cart_icon.png" className="card-icons ml-3" alt="/#" /></a>
                                            </div>
                                            {/* Overlay Icons End */}
                                            <div className="bg-new-arrival-woman d-flex">
                                                {/* Overlay Text Items */}
                                                <div className="card-text-hide">
                                                    <p className="card-text-title-overlay text-white position-absolute">New look girls's coat</p>
                                                    <p className="text-fashion text-white position-absolute">Fashion</p>
                                                    <p className="text-discount text-white position-absolute">$220.00</p>
                                                    <p className="text-price text-theme position-absolute font-weight-bolder">$190.00</p>
                                                </div>
                                                {/* Overlay Text Items End */}
                                                <p className="bg-text-card align-self-end pl-2 small p-2 m-0 smooth-corners"><span className="card-text-title text-white">Circle pattern girls shirt</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   
                        {/* Controls */}
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
