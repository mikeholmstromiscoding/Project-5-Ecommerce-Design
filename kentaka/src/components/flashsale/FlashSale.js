import React from 'react'

export default function FlashSale() {
    return (
        <div>
           <section id="flashsale">
               <div className="bg-flashsale">
                   <div className="container">
                       <div className="row">
                           <div className="col-md-4 flashsale-box-content">
                               <div className="flashsale-box bg-theme">
                                   <h1 className="text-white text-center">FLASH <br/> SALE</h1>
                                    <p className=" flashsale-text text-white text-center">UP TO 50% OFF</p>
                               </div>
                           </div>
                           <div className="col-md-8 text-center flashsale-items-wrapper">
                               <div className="d-flex justify-content-lg-center">
                                    <div className="days ring mr-4">
                                        <p className="text-theme fontsize-text"><span className="font-weight-bolder fontsize-number">7</span> <br/>Days</p>
                                    </div>
                                    <div className="hours ring mr-4">
                                        <p className="text-theme fontsize-text"><span className="font-weight-bolder fontsize-number">23</span> <br />Hours</p>
                                    </div>
                                    <div className="minutes ring mr-4">
                                        <p className="text-theme fontsize-text"><span className="font-weight-bolder fontsize-number">46</span> <br />Minutes</p>
                                    </div>
                                    <div className="seconds ring">
                                        <p className="text-theme fontsize-text"><span className="font-weight-bolder fontsize-number">12</span> <br />Seconds</p>
                                    </div>
                               </div>
                               <a className="btn-shop-now btn bg-white text-theme btn-rounded mt-4" href="/#">SHOP NOW</a>
                           </div>
                       </div>
                   </div>
               </div>
           </section>
        </div>
    )
}
