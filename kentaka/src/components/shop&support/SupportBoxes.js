import React from 'react';

const SupportBoxes = () => {
    return (
        <div>
            <div className="container-fluid">
                <div id="support-boxes">
                    <div className="row justify-content-center">
                        {/* Box 1 Start */}
                        <div className="col-lg-3 col-md-6 d-sm-block mb-4">
                            <div className="support-box position-relative">
                                <div className="support-boxes-content">
                                    <div className="free-shipping-icon position-absolute">
                                        <span><i className="fas fa-box"></i></span>
                                    </div>
                                    <div className="text-theme text-smaller box-title mb-2">Free Shipping</div>
                                    <p className="text-smaller box-text">For a local customer, we provide <br/> free shipping facility</p>
                                </div>
                            </div>
                        </div>
                        {/* Box 1 End */}
                        {/* Box 2 Start */}
                        <div className="col-lg-3 col-md-6 d-sm-block mb-4">
                            <div className="support-box position-relative">
                                <div className="support-boxes-content">
                                    <div className="support-icon position-absolute">
                                        <span><i className="fas fa-user-clock"></i></span>
                                    </div>
                                    <div className="text-theme text-smaller box-title mb-2">24/7 support</div>
                                    <p className="text-smaller box-text">For any inquiry, we are available 24 <br/> hours every day</p>
                                </div>
                            </div>
                        </div>
                        {/* Box 2 End */}
                        {/* Box 3 Start */}
                        <div className="col-lg-3 col-md-6 d-sm-block mb-4">
                            <div className="support-box position-relative">
                                <div className="support-boxes-content">
                                    <div className="payment-icon position-absolute">
                                        <span><i className="fas fa-credit-card"></i></span>
                                    </div>
                                    <div className="text-theme text-smaller box-title mb-2">Online payment</div>
                                    <p className="text-smaller box-text">You can pay quickly and easily with <br/> our online payment system</p>
                                </div>
                            </div>
                        </div>
                        {/* Box 3 End */}
                        {/* Box 4 Start */}
                        <div className="col-lg-3 col-md-6 d-sm-block mb-4">
                            <div className="support-box position-relative">
                                <div className="support-boxes-content">
                                    <div className="fastdelivery-icon position-absolute">
                                        <span><i className="fas fa-shipping-fast"></i></span>
                                    </div>
                                    <div className="text-theme text-smaller box-title mb-2">Fast delivery</div>
                                    <p className="text-smaller box-text">We understand your urgency and <br/> we deliver in a fast way</p>
                                </div>
                            </div>
                        </div>
                        {/* Box 4 End */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SupportBoxes;