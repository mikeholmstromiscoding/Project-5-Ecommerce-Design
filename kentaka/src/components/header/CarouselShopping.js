import React from 'react';

const CarouselShopping = () => {
    return (
        <div>
            <section id="carousel-shopping">
                <div id="myCarousel" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        {/* Item 1 */}
                       <div className="carousel-item active">
                           <div className="container">
                               <div className="row">
                                   <div className="col-md-6 shopping">
                                       <h1>Shopping is</h1>
                                       <h1 className="text-theme font-weight-bold">MORE FUN</h1>
                                       <p className="small-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nisi, molestias quas voluptatum maiores ipsam.</p>
                                       <a className="btn btn-rounded text-theme bg-white" href="/#">SHOP NOW</a>
                                   </div>
                                   <div className="col-md-6">
                                       <img className="img-fluid shopping-banner" src="/img/shopping_banner.png" alt="/#"/>
                                   </div>
                               </div>
                           </div>
                       </div>
                       {/* Item 2 */}
                        <div className="carousel-item">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6 shopping">
                                        <h1>Shopping is</h1>
                                        <h1 className="text-theme font-weight-bold">MORE FUN</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nisi, molestias quas voluptatum maiores ipsam.</p>
                                        <a className="btn btn-rounded text-theme bg-white" href="/#">SHOP NOW</a>
                                    </div>
                                    <div className="col-md-6">
                                        <img className="img-fluid shopping-banner" src="/img/shopping_banner.png" alt="/#" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default CarouselShopping;