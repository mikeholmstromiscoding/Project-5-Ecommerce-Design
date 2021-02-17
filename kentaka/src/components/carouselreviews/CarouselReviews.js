import React from 'react'

export default function CarouselReviews() {
    return (
        <div>
            <section id="carousel-reviews">
                <div id="carouselExampleIndicators3" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators3" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators3" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators3" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        {/* Slide Items 1 */}
                        <div className="bg-reviews carousel-item active">
                            <div className="container">
                                <div className="row justify-content-center mx-auto text-center">
                                    <div className="col-md-7">
                                        <img src="/img/quote_logo.png" className="quote-logo mb-4" alt="/#"/>
                                        <div className="card">
                                            <img src="/img/robert.jpg" className="card-img-top img-fluid" alt="/#"/>
                                            <div className="card-body">
                                                <div className="ranking">
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="far fa-star rank-no-star"></i></span>
                                                </div>
                                               <h6 className="text-theme mt-2">Robert Craig</h6>
                                                <p className="text-white"><small>Computer Engineer</small></p>
                                               <p className="text-white small-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae doloremque voluptatem iure aspernatur blanditiis quasi nesciunt quae dicta expedita ducimus possimus itaque architecto, tempore impedit.</p>
                                            </div>
                                        </div>
                                    
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items 2 */}
                        <div className="bg-reviews carousel-item">
                            <div className="container">
                                <div className="row justify-content-center mx-auto text-center">
                                    <div className="col-md-7">
                                        <img src="/img/quote_logo.png" className="quote-logo mb-4" alt="/#" />
                                        <div className="card">
                                            <img src="/img/jane.jpg" className="card-img-top img-fluid" alt="/#" />
                                            <div className="card-body">
                                                <div className="ranking">
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="far fa-star rank-no-star"></i></span>
                                                </div>
                                                <h6 className="text-theme mt-2">Jane Rosell</h6>
                                                <p className="text-white"><small>Fashion Modell</small></p>
                                                <p className="text-white small-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae doloremque voluptatem iure aspernatur blanditiis quasi nesciunt quae dicta expedita ducimus possimus itaque architecto, tempore impedit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Slide Items 3 */}
                        <div className="bg-reviews carousel-item">
                            <div className="container">
                                <div className="row justify-content-center mx-auto text-center">
                                    <div className="col-md-7">
                                        <img src="/img/quote_logo.png" className="quote-logo mb-4" alt="/#" />
                                        <div className="card">
                                            <img src="/img/craig.jpg" className="card-img-top img-fluid" alt="/#" />
                                            <div className="card-body">
                                                <div className="ranking">
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="fas fa-star rank-star"></i></span>
                                                    <span><i className="far fa-star rank-no-star"></i></span>
                                                </div>
                                                <h6 className="text-theme mt-2">Johnny Wesmullar</h6>
                                                <p className="text-white"><small>CEO, Biotech Inc.</small></p>
                                                <p className="text-white small-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae doloremque voluptatem iure aspernatur blanditiis quasi nesciunt quae dicta expedita ducimus possimus itaque architecto, tempore impedit.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Controls */}
                        <a className="carousel-control-prev" href="#carouselExampleIndicators3" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators3" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}
