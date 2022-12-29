import React from 'react'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'

const FooterTmpl = () => {
  useCustomJavascript(() => {

  })

  return (
    <footer className="footer mt-5">
        <div className="container">
            <div className="row">
                <div className="col-12 col-lg-3">
                    <div className="footer-sign__up">
                        <h3>
                            Sign up for news
                        </h3>
                        <p>Keep up to date with the latest product launches and news. Find out more about our brands and get special promo codes.</p>
                        <form action="#" name='form'>
                            <input type="email" name="email" id="" placeholder='Your e-mail address' />
                            <button type="submit">Sign up for newsletter</button>
                            <div className="form-check mt-3">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    I accept <a href="#">the personal data treatment.</a>
                                </label>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12 col-lg-9 footer-links__container">
                    <ul>
                        <li>How to buy</li>
                        <li>
                            <a href="#">Payment methods</a>
                        </li>
                        <li>
                            <a href="#">Order and pick up</a>
                        </li>
                        <li>
                            <a href="#">Order with delivery</a>
                        </li>
                        <li>
                            <a href="#">Shopping over the phone</a>
                        </li>
                        <li>
                            <a href="#">Returns</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Help</li>
                        <li>
                            <a href="#">Contact</a>
                        </li>
                        <li>
                            <a href="#">Online Help</a>
                        </li>
                        <li>
                            <a href="#">Our Commitments</a>
                        </li>
                        <li>
                            <a href="#">Give feedback</a>
                        </li>
                    </ul>
                    <ul>
                        <li>Services</li>
                        <li>
                            <a href="#">Transport</a>
                        </li>
                        <li>
                            <a href="#">Design service</a>
                        </li>
                        <li>
                            <a href="#">Paint an plaster mixing service</a>
                        </li>
                        <li>
                            <a href="#">Dimensioning and assemly service</a>
                        </li>
                        <li>
                            <a href="#">Return of used equipment</a>
                        </li>
                        <li>
                            <a href="#">Additional services</a>
                        </li>
                    </ul>
                    <ul>
                        <li>About</li>
                        <li>
                            <a href="#">About us</a>
                        </li>
                        <li>
                            <a href="#">Press Office</a>
                        </li>
                        <li>
                            <a href="#">For suppliers</a>
                        </li>
                        <li>
                            <a href="#">Regulations</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <a href="#">Personal Data Request</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="row">
                <div className="col-12 footer-bottom">
                    <div className="footer-bottom__left">
                        <img className="copyright" src="/images/copyright.svg" alt="" />
                        <span>2021 Divante S.A.</span>
                    </div>
                    <div className="footer-bottom__right">
                        <div className="footer-bottom__socials">
                            <a className='d-inline-block' href="#"><img src="/images/socials/facebook.svg" alt="" /></a>
                            <a className='d-inline-block' href="#"><img src="/images/socials/instagram.svg" alt="" /></a>
                            <a className='d-inline-block' href="#"><img src="/images/socials/youtube.svg" alt="" /></a>
                        </div>
                        <img src="/images/logotype.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default FooterTmpl