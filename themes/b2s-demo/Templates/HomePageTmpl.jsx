import React from 'react'
import { Layout } from '../../../src/components/Layout/Layout'
import SEO from '@b2storefront/b2s_core/dist/components/snippets/SEO'
import { CategoryType } from '@b2storefront/b2s_core/dist/types/category'
import { useCustomJavascript } from '@b2storefront/b2s_core/dist/hooks/useCustomJavascript'
import { arrayOf } from 'prop-types'
import { ProductType } from '@b2storefront/b2s_core/dist/types/product'
import SubscribeDiscound from '../Snippets/SubscribeDiscount'
import ProductsList from '../Snippets/ProductsList'
import Tabs from '../Snippets/Tabs'
import Breadcrumbs from '../Snippets/Breadcrumbs'
import DefaultBenefits from '../Snippets/DefaultBenefits'

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
        <Breadcrumbs/>
        <DefaultBenefits/>
        <Tabs />
        <SubscribeDiscound />
        <div className="container">
          <ProductsList />
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
