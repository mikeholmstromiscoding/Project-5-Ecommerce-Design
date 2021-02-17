import React from 'react'

export default function ShoppingHeader() {
    return (
        <div>
            <section id="shopping-header">
                <div className="container d-none shopping-header-wrapper">
                    <div className="d-flex flex-column">
                        <div className="mt-5 text-center">
                            <h1>Shopping is</h1>
                            <h1 className="text-theme font-weight-bold">MORE FUN</h1>
                            <p className="small-2">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita nisi, molestias quas voluptatum maiores ipsam.</p>
                            <a className="btn btn-rounded text-theme bg-white mt-2" href="/#">SHOP NOW</a>
                        </div>
                        <div className="mt-3">
                            <img className="img-fluid shopping-banner" src="/img/shopping_banner.png" alt="/#" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
