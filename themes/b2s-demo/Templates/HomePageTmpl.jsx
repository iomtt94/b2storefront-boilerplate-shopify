import React from 'react'
import { Layout } from '../../../src/components/Layout/Layout'
import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import { CategoryType } from '@b2storefront/b2s_core/dist/types/category'
import { Link } from 'gatsby'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { arrayOf } from 'prop-types'
import { ProductType } from '@b2storefront/b2s_core/dist/types/product'
import { getProductPath } from '@b2storefront/b2s_core/dist/utils/routing'

/** 
 * @param {HomePageTmpl.propTypes} props
 **/
const HomePageTmpl = ({ allCollections, allProducts, collections, products }) => {
  useCustomJavascript(() => {
    
  })

  return (
    <Layout>
      <SEO
        title="My eCommerce"
        description=""
      />
      <section className="section section-home-page">
        <div className="container">
          <div className="product-list">
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
                    <input type="number" name="quantity"  id="" />
                    <div class="dropdown">
                      <button class="btn dropdown-toggle dropdown-type" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Item
                      </button>
                      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a class="dropdown-item" href="#">Action</a></li>
                        <li><a class="dropdown-item" href="#">Another action</a></li>
                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                      </ul>
                    </div>
                  </div>
                  <button type="submit">Add to cart</button>
                </form>
              </div>
            </div>


          </div>
        </div>
      </section>
    </Layout>
  )
}

HomePageTmpl.propTypes = {
  collections: arrayOf(CategoryType),
  products: arrayOf(ProductType),
}

export default HomePageTmpl
