import React from "react";

const DefaultBenefits = () => {
    return (
        <>
            <div className="container">
                <div className="row row-benefits">
                    <div className="col-benefits">
                        <img src="images/safety-payment.svg" alt="safety-payment" />
                        <span>Safety payment </span>
                    </div>
                    <div className="col-benefits">
                        <img src="images/location-on.svg" alt="location" />
                        <span>More than 5k stationary shop</span>
                    </div>
                    <div className="col-benefits">
                        <img src="images/local-shipping.svg" alt="local-shipping" />
                        <span>Within 2-5 business days</span>
                    </div>
                    <div className="col-benefits">
                        <img src="images/info.svg" alt="info" />
                        <span>Free shipping and returns</span>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DefaultBenefits;