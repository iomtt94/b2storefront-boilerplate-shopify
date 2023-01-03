import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function MerchandiseSliderInfo() {
    const [nav1, setNav1] = useState();
    const [nav2, setNav2] = useState();

    const settingsThumb = {
        asNavFor: nav2,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        arrows: true,
        infinite: true,
        verticalSwiping: true,
        ref: (slider1) => setNav1(slider1),
        centerMode: false,
        speed: 500,
        useTransform: true,
        cssEase: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
        responsive: [
            {
              breakpoint: 576,
              settings: {
                settings: "unslick"
              }
            }
        ]
    };

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        swipeToSlide: true,
        fade: true,
        ref: (slider2) => setNav2(slider2)
    };

    return (
            <div className="container">
                <div className="merchandise">
                    <div className="merchandise-slider">
                        <div className="merchandise-detail-banner banner-content clearfix">
                            <div className="banner-slider">
                                <>
                                    <Slider className="slider-nav thumb-image" asNavFor={nav1} {...settingsThumb}>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                                <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://static.vecteezy.com/packs/media/vectors/term-bg-1-3d6355ab.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://blog.spoongraphics.co.uk/wp-content/uploads/2022/03/thumbnail-2.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://www.digitalartsonline.co.uk/cmsdata/features/3668286/motion-graphics-templates-opener2.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="http://webtoolfeed.files.wordpress.com/2012/06/vector-graphic.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGszEZ9YzYmbJody_OI-4wBpWuXtFsZkrQBwqTxKbUrbcoZA3QbCQ3ko5iVY0wzxHckUo&usqp=CAU" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://img.freepik.com/free-vector/modern-abstract-background_1048-1003.jpg?w=2000" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                            </div>
                                        </div>
                                        <div className="thumbnail-image">
                                            <div className="thumbImg">
                                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGszEZ9YzYmbJody_OI-4wBpWuXtFsZkrQBwqTxKbUrbcoZA3QbCQ3ko5iVY0wzxHckUo&usqp=CAU" alt="slider-img" />
                                            </div>
                                        </div>
                                    </Slider>
                                </>
                                <>
                                <Slider className="slider slider-for" {...settingsFor}>
                                    <div className="slider-banner-image">
                                        <div className="product-actions__top merchandise-slider__top">
                                            <span className="product-discount">
                                                -15%
                                            </span>
                                            <span className="product-bookmark">
                                                <img src="images/product-star.svg" alt="" />
                                            </span>
                                        </div>
                                        <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                    </div>
                                    <div className="slider-banner-image">
                                        <div className="product-actions__top merchandise-slider__top">
                                            <span className="product-discount">
                                                -15%
                                            </span>
                                            <span className="product-bookmark">
                                                <img src="images/product-star.svg" alt="" />
                                            </span>
                                        </div>
                                        <img src="/images/slider/slider-image-1.jpg" alt="slider-img" />
                                    </div> 
                                </Slider>
                                </>
                            </div>
                        </div>
                    </div>

                    <div className="merchandise-info">
                        <h3>Product name for maximum two text lines title could be very long </h3>
                        <span className="product-provider">Omnires | Part No. 2123532</span>
                        <div className="d-flex mt-1 mb-3">
                            <ol className="rating-list">
                                <li>
                                    <img src="images/rating-xs.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/rating-xs.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/rating-xs.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/rating-xs.svg" alt="" />
                                </li>
                                <li>
                                    <img src="images/rating-xs.svg" alt="" />
                                </li>
                            </ol>
                            <span>5.0 (24)</span>
                        </div>
                        <div className="product-status d-inline-flex">
                            <img src="images/products/in-stock.svg" alt="in-stock" />
                            <span>In stock</span>
                        </div>
                        <table className="table mt-3">
                            <tbody>
                                <tr>
                                    <td>Quantity</td>
                                    <td>Discount</td>
                                    <td>Price net</td>
                                </tr>
                                <tr>
                                    <td>20-99 items</td>
                                    <td className="discount-size">20%</td>
                                    <td>$29.99 net</td>
                                </tr>
                                <tr>
                                    <td>100-299 items</td>
                                    <td className="discount-size">30%</td>
                                    <td>$25.35 net</td>
                                </tr>
                                <tr>
                                    <td>300-499 items</td>
                                    <td className="discount-size">40%</td>
                                    <td>$23.35 net</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="product-price text-end mt-4">your price<span>$45.00</span>net<span>$55.00 net</span></p>


                        <form action="#" name="name">
                            <div className="product-form__count">
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1"
                                        data-bs-toggle="dropdown" aria-expanded="false">
                                        Choose variant
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
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
                            <div className="d-flex">
                                <button type="submit">Add to cart<img src="images/products/arrow-down-product.svg" alt="" /></button>
                                <div className="merchandise-actions__right">
                                    <button><img src="images/m-share.svg" alt="" /></button>
                                    <button><img src="images/m-compare.svg" alt="" /></button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
    )
}