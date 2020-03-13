import React from 'react'
import { graphql } from 'gatsby'

import TeamHeader from '../components/TeamHeader'
import Content from '../components/Content.js'
import Layout from '../components/Layout.js'
import FeatureArray from '../components/FeatureArray'
import Accordion from '../components/Accordion'
import { PlayCircle } from 'react-feather'

// Export Template for use in CMS preview
export const ComponentsPageTemplate = ({
  title,
  subtitle,
  featuredImage,
  featureArray,
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
        accordion {
          title
          description
        }
      }
    }
  }
`
