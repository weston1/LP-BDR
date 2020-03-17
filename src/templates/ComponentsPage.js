import React from 'react'
import { graphql } from 'gatsby'

import TeamHeader from '../components/TeamHeader'
import Layout from '../components/Layout.js'
import Content from '../components/Content'
import FeatureArray from '../components/FeatureArray'
import Accordion from '../components/Accordion'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  featureArray,
  section1,
  accordion
}) => (
  <main>
    <TeamHeader
      title={title}
      subtitle={subtitle}
      backgroundImage={featuredImage}
      className="super-smash text-center"
    />
    <section className="section">
      <div className="container">
        <FeatureArray images={featureArray} />
      </div>
    </section>

    <section className="section">
      <div className="container">
        <Accordion items={accordion} />
      </div>
    </section>

    <section className="section">
      <div className="container text-center">
        <p className="small">&copy; loilpoints 2020.</p>
      </div>
    </section>
  </main>
)

const ComponentsPage = ({ data: { page } }) => (
  <Layout
    meta={page.frontmatter.meta || false}
    title={page.frontmatter.title || false}
  >
    <ComponentsPageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default ComponentsPage

export const pageQuery = graphql`
  query ComponentsPage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      ...featureArray
      html
      frontmatter {
        title
        template
        subtitle
        featuredImage
        section1
        accordion {
          title
          description
        }
      }
    }
  }
`
