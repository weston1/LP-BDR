import React from 'react'

import { graphql } from 'gatsby'

import FormSimpleAjax from '../components/FormSimpleAjax'
import Content from '../components/Content'
import Layout from '../components/Layout'
import './ContactPage.css'

// Export Template for use in CMS preview
export const ContactPageTemplate = ({ body }) => (
  <main className="Contact">
    <section className="Contact--Section1 row">
      <div className="Contact--BG col-lg-6">
        <div className="Contact--Logo--Container mx-auto">
          <div className="taCenter py-3">
            <img
              src="/images/Logo_Large.svg"
              className="img-fluid my-auto py-3 Contact--Logo--Container"
              alt="O.penVAPE - Bakked - Pressies - District - Firefly"
            />
          </div>
          <div className="taCenter py-3">
            <img
              src="/images/Logo_Family.svg"
              className="img-fluid mx-auto taCenter"
              alt="O.penVAPE - Bakked - Pressies - District - Firefly"
            />
          </div>
        </div>
      </div>
      <div className="Contact--Card col-lg-6">
        <div className="container my-auto">
          <div className="taLeft py-5 desktop-only">
            <img
              src="/images/Logo_Small.svg"
              className="img-fluid mx-auto py-3"
              alt="O.penVAPE - Bakked - Pressies - District - Firefly"
            />
          </div>
          <div className="Contact--Details">
          <Content source={body} />
          </div>
          <FormSimpleAjax name="Simple Form Ajax" />
        </div>
      </div>
    </section>
  </main>
)

const ContactPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ContactPageTemplate {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ContactPage

export const pageQuery = graphql`
  query ContactPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
      }
    }
  }
`
