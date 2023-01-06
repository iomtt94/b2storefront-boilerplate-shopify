import React, {useState} from 'react'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'

const HeaderTmpl = (props) => {
  useCustomJavascript(() => {
    
  })

  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };

  return (
    <header className="header">
        <div className="header-top">
            <div className="container">
                <button id="toggleHeadMenu" onClick={handleToggle}><img src="/images/global-navigation-bar.svg" alt="" /></button>
                <div className={isActive ? "header-top__left active" : "header-top__left"}>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Country: <span>Sweden</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Language: <span>Svenska</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            Currency: <span>$</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
                <div className={isActive ? "header-top__right active" : "header-top__right"}>
                    <div className="header-top__phone">
                        <img src="/images/phone.svg" alt="phone" />
                        <a href="tel:+32 (0) 15 28 76 67">+32 (0) 15 28 76 67</a>
                    </div>
                    <div className="header-top__messages">
                        <a href="#">
                            <img src="/images/envelope.svg" alt="messages" />
                            <span>Messages</span>
                            <span className="messages-count">12</span>
                        </a>
                    </div>
                    <div className="dropdown dropdown-username">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="images/user.svg" alt="user" />
                            <span>Username Surname</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-secondary">
            <div className="container">
                <h1>
                    <a href="#">
                        <img src="images/logotype.svg" alt="logo" />
                    </a>
                </h1>
                <form className="header-form__search" action="#" name="header-search">
                    <button type="submit">
                        <img src="images/search-glass.svg" alt="search-glass-header" />
                    </button>
                    <input type="search" name="search" id="search" placeholder="Search by product or SKU" />
                </form>
                <a className="header-order__btn" href="#">Quick Order Form</a>
            </div>
        </div>
        <div className="header-navigation">
            <div className="container">
                <div className="header-navigation__left">
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>HOME & GARDEN</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <div className="dropdown">
                        <button className="btn btn-dropdown dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                            <span>MOTORS</span>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                    <a href="#">ELECTRONICS</a>
                    <a href="#">OFFICE EQUIPMENT</a>
                </div>
                <div className="header-navigation__right">
                    <div className="header-action">
                        <a href="#">
                            <div className="header-action__top">
                                <span>3</span>
                                <img className="header-action__compare" src="images/compare.svg" alt="compare" />
                            </div>
                            <p>COMPARE</p>
                        </a>
                    </div>
                    <div className="header-action">
                        <a href="#">
                            <div className="header-action__top">
                                <span>7</span>
                                <img className="header-action__bookmarks" src="images/star.svg" alt="bookmarks" />
                            </div>
                            <p>FAVORITES</p>
                        </a>
                    </div>
                    <div className="header-action">
                        <a href="#">
                            <div className="header-action__top">
                                <span>47</span>
                                <img className="header-action__cart" src="images/cart.svg" alt="cart" />
                            </div>
                            <p>CART</p>
                            <p>Active Cart Name</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>


    </header>
  )
}

export default HeaderTmpl
