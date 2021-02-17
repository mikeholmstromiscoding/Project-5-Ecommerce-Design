import React from 'react'

export default function CarouselBlog() {
    return (
        <div>
            <section id="carousel-latestblog">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="font-weight-bold">LATEST<span className="text-theme"> BLOG</span></h3>
                            <img src="/img/shop_border.png" className="img-fluid" alt="/#" />
                            <p className="small-2 mb-5">Read our latest posts about our events and trending news</p>
                        </div>
                    </div>
                </div>
                <div id="carouselExampleIndicators4" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators4" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators4" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators4" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* Slide Items 1 */}
                        <div className="carousel-item active">
                            <div className="container">
                                <div className="row justify-content-center mx-auto">
                                    {/* Card Blog 1 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative mx-auto">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">29</span><br /> MAR</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Adam Moore</small></u></div>
                                                    <div className="text-theme mb-2"><small>A beautiful scenery in <br />  the world we are missing</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Blog 2 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">18</span><br /> JUL</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Jonathon Doe</small></u></div>
                                                    <div className="text-theme mb-2"><small>We love our country, we love <br />  our peoples like ourselves</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slides 2 */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    {/* Card Blog 1 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative mx-auto">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">29</span><br /> MAR</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Adam Moore</small></u></div>
                                                    <div className="text-theme mb-2"><small>A beautiful scenery in <br />  the world we are missing</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Blog 2 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">18</span><br /> JUL</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Jonathon Doe</small></u></div>
                                                    <div className="text-theme mb-2"><small>We love our country, we love <br />  our peoples like ourselves</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slides 3 */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    {/* Card Blog 1 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative mx-auto">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">29</span><br /> MAR</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Adam Moore</small></u></div>
                                                    <div className="text-theme mb-2"><small>A beautiful scenery in <br />  the world we are missing</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Card Blog 2 */}
                                    <div className="col-md-6">
                                        <div className="bg-card-big position-relative">
                                            <div className="bg-card-sm position-absolute">
                                                <div className="date pl-3">
                                                    <p className="bg-date text-white text-center"><span className="font-weight-bold date-font">18</span><br /> JUL</p>
                                                </div>
                                                <div className="blog-content pl-3">
                                                    <div className="text-white author-font"><u><small>By Jonathon Doe</small></u></div>
                                                    <div className="text-theme mb-2"><small>We love our country, we love <br />  our peoples like ourselves</small></div>
                                                    <span className="author-font border text-white pl-2 pr-2"><small>Travel</small></span>
                                                    <span className="author-font border text-white pl-2 pr-2 ml-3"><small>Fashion</small></span>
                                                    <a className="btn-xs bg-white text-theme btn-rounded mt-2" href="/#">Read More</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Controls */}
                        <a className="carousel-control-prev" href="#carouselExampleIndicators4" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators4" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
