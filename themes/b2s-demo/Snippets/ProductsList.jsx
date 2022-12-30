import React from 'react';

const ProductsList = () => {
    return (
        <>
            <div className="product-type">
                <div className="product-type__left">
                    <h3>Featured products</h3>
                </div>
                <div className="product-type__right">
                    <a href="#">
                        <span>Show all recommended products</span>
                        <img src="images/arrow-product-right.svg" alt="arrow-recommended" />
                    </a>
                </div>
            </div>
            <div className="product-list">
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -30%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-1.jpg" alt="" />
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
                            Omnires | Part No. 2123532
                        </span>
                        <h4 className="product-name">
                            Connection with a handle Omnires round
                        </h4>
                        <p className="product-detail">
                            Material of execution: brass
                        </p>
                        <p className="product-detail">
                            Manufacturer’s color: chrome
                        </p>
                        <p className="product-detail">
                            Guarantee: 5 years
                        </p>
                        <p className="product-price">
                            your price<span>$45.00</span>net<span>$55.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-2.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Countertop washbasin GoodHome Tekapo
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-3.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Perforated Simpson tape 25 x 2500 x 2 mm
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Update cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                            <span className="added-to__cart">
                                <img src="images/products/added-to-cart.svg" alt="added-to-cart" />
                                Added to cart
                            </span>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-4.jpg" alt="" />
                        </div>
                        <div className="product-actions__bottom">
                            <div className="product-status product-status__out">
                                <img src="images/products/out-of-stock.svg" alt="Out of stock" />
                                <span>Out of stock</span>
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            AMBER DECOR Bulb 60W, E27 590
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="product-type">
                <div className="product-type__left">
                    <h3>Replacement products</h3>
                </div>
                <div className="product-type__right">
                    <a href="#">
                        <span>Show all recommended products</span>
                        <img src="images/arrow-product-right.svg" alt="arrow-recommended" />
                    </a>
                </div>
            </div>
            <div className="product-list">
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -30%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-1.jpg" alt="" />
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
                            Omnires | Part No. 2123532
                        </span>
                        <h4 className="product-name">
                            Connection with a handle Omnires round
                        </h4>
                        <p className="product-detail">
                            Material of execution: brass
                        </p>
                        <p className="product-detail">
                            Manufacturer’s color: chrome
                        </p>
                        <p className="product-detail">
                            Guarantee: 5 years
                        </p>
                        <p className="product-price">
                            your price<span>$45.00</span>net<span>$55.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-2.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Countertop washbasin GoodHome Tekapo
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-3.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Perforated Simpson tape 25 x 2500 x 2 mm
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Update cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                            <span className="added-to__cart">
                                <img src="images/products/added-to-cart.svg" alt="added-to-cart" />
                                Added to cart
                            </span>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-4.jpg" alt="" />
                        </div>
                        <div className="product-actions__bottom">
                            <div className="product-status product-status__out">
                                <img src="images/products/out-of-stock.svg" alt="Out of stock" />
                                <span>Out of stock</span>
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            AMBER DECOR Bulb 60W, E27 590
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="product-type">
                <div className="product-type__left">
                    <h3>Products from the same series</h3>
                </div>
                <div className="product-type__right">
                    <a href="#">
                        <span>Show all recommended products</span>
                        <img src="images/arrow-product-right.svg" alt="arrow-recommended" />
                    </a>
                </div>
            </div>
            <div className="product-list">
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -30%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-1.jpg" alt="" />
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
                            Omnires | Part No. 2123532
                        </span>
                        <h4 className="product-name">
                            Connection with a handle Omnires round
                        </h4>
                        <p className="product-detail">
                            Material of execution: brass
                        </p>
                        <p className="product-detail">
                            Manufacturer’s color: chrome
                        </p>
                        <p className="product-detail">
                            Guarantee: 5 years
                        </p>
                        <p className="product-price">
                            your price<span>$45.00</span>net<span>$55.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-2.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Countertop washbasin GoodHome Tekapo
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-3.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Perforated Simpson tape 25 x 2500 x 2 mm
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Update cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                            <span className="added-to__cart">
                                <img src="images/products/added-to-cart.svg" alt="added-to-cart" />
                                Added to cart
                            </span>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-4.jpg" alt="" />
                        </div>
                        <div className="product-actions__bottom">
                            <div className="product-status product-status__out">
                                <img src="images/products/out-of-stock.svg" alt="Out of stock" />
                                <span>Out of stock</span>
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            AMBER DECOR Bulb 60W, E27 590
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="product-type">
                <div className="product-type__left">
                    <h3>Similar products</h3>
                </div>
                <div className="product-type__right">
                    <a href="#">
                        <span>Show all recommended products</span>
                        <img src="images/arrow-product-right.svg" alt="arrow-recommended" />
                    </a>
                </div>
            </div>
            <div className="product-list">
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -30%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-1.jpg" alt="" />
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
                            Omnires | Part No. 2123532
                        </span>
                        <h4 className="product-name">
                            Connection with a handle Omnires round
                        </h4>
                        <p className="product-detail">
                            Material of execution: brass
                        </p>
                        <p className="product-detail">
                            Manufacturer’s color: chrome
                        </p>
                        <p className="product-detail">
                            Guarantee: 5 years
                        </p>
                        <p className="product-price">
                            your price<span>$45.00</span>net<span>$55.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-2.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Countertop washbasin GoodHome Tekapo
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-3.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Perforated Simpson tape 25 x 2500 x 2 mm
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Update cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                            <span className="added-to__cart">
                                <img src="images/products/added-to-cart.svg" alt="added-to-cart" />
                                Added to cart
                            </span>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-4.jpg" alt="" />
                        </div>
                        <div className="product-actions__bottom">
                            <div className="product-status product-status__out">
                                <img src="images/products/out-of-stock.svg" alt="Out of stock" />
                                <span>Out of stock</span>
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            AMBER DECOR Bulb 60W, E27 590
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="product-type">
                <div className="product-type__left">
                    <h3>Related products</h3>
                </div>
                <div className="product-type__right">
                    <a href="#">
                        <span>Show all recommended products</span>
                        <img src="images/arrow-product-right.svg" alt="arrow-recommended" />
                    </a>
                </div>
            </div>
            <div className="product-list">
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -30%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-1.jpg" alt="" />
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
                            Omnires | Part No. 2123532
                        </span>
                        <h4 className="product-name">
                            Connection with a handle Omnires round
                        </h4>
                        <p className="product-detail">
                            Material of execution: brass
                        </p>
                        <p className="product-detail">
                            Manufacturer’s color: chrome
                        </p>
                        <p className="product-detail">
                            Guarantee: 5 years
                        </p>
                        <p className="product-price">
                            your price<span>$45.00</span>net<span>$55.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt=""/></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-2.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Countertop washbasin GoodHome Tekapo
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg"alt=""/></button>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-3.jpg" alt="" />
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            Perforated Simpson tape 25 x 2500 x 2 mm
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Update cart<img src="images/products/arrow-down-product.svg"
                                    alt="" /></button>
                            <span className="added-to__cart">
                                <img src="images/products/added-to-cart.svg" alt="added-to-cart" />
                                Added to cart
                            </span>
                        </form>
                    </div>
                </div>
                <div className="product-list__item">
                    <div className="product-item__top">
                        <div className="product-actions__top">
                            <span className="product-discount">
                                -15%
                            </span>
                            <span className="product-bookmark">
                                <img src="images/product-star.svg" alt="" />
                            </span>
                        </div>
                        <div className="product-item__image">
                            <img src="images/products/product-image-4.jpg" alt="" />
                        </div>
                        <div className="product-actions__bottom">
                            <div className="product-status product-status__out">
                                <img src="images/products/out-of-stock.svg" alt="Out of stock" />
                                <span>Out of stock</span>
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
                            GoodHome | Part No. 234565
                        </span>
                        <h4 className="product-name">
                            AMBER DECOR Bulb 60W, E27 590
                        </h4>
                        <p className="product-detail">
                            Basin width : 45 cm
                        </p>
                        <p className="product-detail">
                            Basin height: 12 cm
                        </p>
                        <p className="product-detail">
                            Basin depth: 35 cm
                        </p>
                        <p className="product-price">
                            your price<span>$51.00</span>net<span>$64.00 net</span>
                        </p>
                        <form action="#" name="name">
                            <div className="product-form__count">
                                <input type="number" name="quantity" id="" />
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Item
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </div>
                            <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductsList;