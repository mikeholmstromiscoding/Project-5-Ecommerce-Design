import React from 'react'

export default function DiscountSection() {
    return (
        <div>
            <section id="discount-section">
                <div className="bg-discount">
                    <div className="container">
                        <div className="row">
                            {/* Column 1 Left */}
                            <div className="col-md-3 text-center">
                                <div className="bg-discount-content">
                                    <div className="d-flex">
                                        <h1 className="discount-30 text-white font-weight-bold">30%</h1>
                                        <h3 className="discount-text-off text-white ml-3">OFF</h3>
                                    </div>
                                    <p className="text-center text-white">FOR NEW CUSTOMER </p>
                                    <a className="btn btn-shop btn-rounded" href="/#">SHOP NOW</a>
                                </div>
                            </div>
                            {/* Column 2 Right */}
                            <div className="d-none d-md-block discount-right-content col-md-5 ml-auto">
                                <p className="text-dark small-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus earum quae animi? Distinctio perspiciatis, expedita tenetur accusamus, omnis ut voluptas, earum culpa sed voluptatem vel!</p>
                                <a className="btn bg-white text-theme btn-rounded mt-3" href="/#">LEARN MORE</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
