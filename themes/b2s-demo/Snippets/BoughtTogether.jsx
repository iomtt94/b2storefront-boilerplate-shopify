import React from "react"

const BoughtTogether = () => {
    return (
        <>
            <div className="container">
                <div className="bought-together__container">
                    <h3>Frequently bought together</h3>
                    <div className="bought-together">
                        <div className="bought-together__left">
                            <div className="product-list__item">
                                <div className="product-item__top">
                                    <div className="product-actions__top justify-content-end">
                                        <span className="product-bookmark">
                                            <img src="images/product-star.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="product-item__image">
                                        <img src="images/products/product-recommended.jpg" alt="" />
                                    </div>
                                    <div className="product-actions__bottom">
                                        <div className="product-status">
                                            <img src="images/products/in-stock.svg" alt="in-stock" />
                                            <span>In stock</span>
                                        </div>
                                        <div className="product-share">
                                            <button>
                                                <img src="images/products/product-compare.svg" alt="product-compare" />
                                            </button>
                                            <button>
                                                <img src="images/products/product-share.svg" alt="product-share" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__bottom">
                                    <span className="product-provider">
                                        Brand Name | Part No. 234565
                                    </span>
                                    <h4 className="product-name">
                                        AMBER DECOR Small Lamp 60W, E27 590
                                    </h4>
                                </div>
                            </div>
                            <div className="product-list__item">
                                <div className="product-item__top">
                                    <div className="product-actions__top justify-content-end">
                                        <span className="product-bookmark">
                                            <img src="images/product-star.svg" alt="" />
                                        </span>
                                    </div>
                                    <div className="product-item__image">
                                        <img src="images/products/product-recommended.jpg" alt="" />
                                    </div>
                                    <div className="product-actions__bottom">
                                        <div className="product-status">
                                            <img src="images/products/in-stock.svg" alt="in-stock" />
                                            <span>In stock</span>
                                        </div>
                                        <div className="product-share">
                                            <button>
                                                <img src="images/products/product-compare.svg" alt="product-compare" />
                                            </button>
                                            <button>
                                                <img src="images/products/product-share.svg" alt="product-share" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="product-item__bottom">
                                    <span className="product-provider">
                                        Brand Name | Part No. 234565
                                    </span>
                                    <h4 className="product-name">
                                        AMBER DECOR Small Lamp 60W, E27 590
                                    </h4>
                                </div>
                            </div>
                            <div className="bought-together__continue">
                                <p className="mb-0">Price for bundle:</p>
                                <p className="product-price"><span>$95.00</span>net<span>$129.00 net</span></p>
                                <form action="#" name="name">
                                    <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                                </form>
                            </div>
                        </div>
                        <div className="bought-together__right">
                            <h4>Contact with our Expert!</h4>
                            <div className="expert">
                                <img src="images/expert.jpg" alt="expert" />
                                <div className="expert-details">
                                    <p>Name and Surname</p>
                                    <p className="fs-16">Specialist - name of profession</p>
                                    <p className="fs-16">Company Product Group</p>
                                </div>
                            </div>
                            <div className="expert-actions">
                                <button className="btn-meeting"><img src="images/videocam.svg" alt="" />Schedule a meeting</button>
                                <a className="btn-call__expert" href="tel:+65 553 123 543"><img src="images/phone-right.svg" alt="" />Call: +65 553 123 543</a>
                                <button className="btn-chat"><img src="images/chat.svg" alt="" />Chat</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoughtTogether