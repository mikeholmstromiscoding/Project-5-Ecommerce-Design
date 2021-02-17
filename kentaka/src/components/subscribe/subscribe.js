import React from 'react'

export default function subscribe() {
    return (
        <div>
            <section id="subscribe">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-6 subscribe-now">
                            <h3 className="font-weight-bold">SUBSCRIBE <span className="text-theme">NOW</span></h3>
                            <p className="small">Signup for awesome news about our new products and <br /> know our special discounts on products.</p>
                            <input className="form-control" type="email" name="email" id="subscribe-email" placeholder="Enter email address" />
                            <a className="btn-xs btn-theme btn-rounded position-absolute btn-subscribe" href="/#">Subscribe</a>
                        </div>
                        {/* Column 2 gray box */}
                        <div className="col-md-6">
                            <div className="d-none d-lg-block bg-subscribe-box"></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
