import React from 'react';

const ShoppingGrid = () => {
    return (
        <div>
            <div className="container">
                <div id="shopping-grid">
                    <div className="row">
                        <div className="col text-center">
                            <h3 className="font-weight-bold">SHOP BY <span className="text-theme">CATEGORY</span></h3>
                            <img src="/img/shop_border.png" className="img-fluid" alt="" />
                            <p className="small-2 mb-5">We always try to give you the best product within a fast and reliable way</p>
                        </div>
                    </div>
                    {/* Grid Start */}
                    <div className="grid-wrapper">
                        {/* Item 1 Men */}
                        <div className="item-1 bg-grid d-flex">
                            <p className="smooth-corners bg-item-1 text-theme small align-self-end p-1 m-0">Men</p>
                        </div>
                        {/* Item 2 Woman */}
                        <div className="item-2 bg-grid d-flex">
                            <p className="smooth-corners bg-item-2 text-theme small align-self-end p-1 m-0">Woman</p>
                        </div>
                        {/* Item 3 Kids */}
                        <div className="item-3 bg-grid d-flex">
                            <p className="smooth-corners bg-item-3 text-theme small align-self-end p-1 m-0">Kids</p>
                        </div>
                        {/* Item 4 Shoes */}
                        <div className="item-4 bg-grid d-flex">
                            <p className="smooth-corners bg-item-4 text-theme small align-self-end p-1 m-0">Shoes</p>
                        </div>
                        {/* Item 5 Hats */}
                        <div className="item-5 bg-grid d-flex">
                            <p className="smooth-corners bg-item-5 text-theme small align-self-end p-1 m-0">Hats</p>
                        </div>
                        {/* Item 6 Watches */}
                        <div className="item-6 bg-grid d-flex">
                            <p className="smooth-corners bg-item-6 text-theme small align-self-end p-1 m-0">Watches</p>
                        </div>
                        {/* Item 7 Sunglasses */}
                        <div className="item-7 bg-grid d-flex">
                            <p className="smooth-corners bg-item-7 text-theme small align-self-end p-1 m-0">Sunglasses <br /><small className="text-white">18 products</small></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default ShoppingGrid;