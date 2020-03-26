import React from 'react'
import { graphql } from 'gatsby'
import Content from '../components/Content'
import Layout from '../components/Layout'
import '../components/Form.css'
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
          <form
            name="contact"
            method="post"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
          >
            {/* You still need to add the hidden input with the form name to your JSX form */}
            <input type="hidden" name="form-name" value="contact" />
            <div className="py-2">
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="text"
                  placeholder="Name*"
                  name="firstname"
                  required
                />
                <span>Name*</span>
              </label>
            </div>

            <div className="py-2">
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  type="email"
                  placeholder="Email*"
                  name="emailAddress"
                  required
                />
                <span>Email*</span>
              </label>
            </div>

            <div className="py-2">
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  inputmode="numeric"
                  pattern="[0-9]{1} [0-9]{3} [0-9]{3} [0-9]{4}"
                  placeholder="Phone"
                  name="tel"
                  type="tel"
                  required
                />
                <span>+ 1.420.720.1234*</span>
              </label>
            </div>

            <div className="py-2">
              <label className="Form--Label">
                <input
                  className="Form--Input Form--InputText"
                  inputmode="numeric"
                  pattern="[0-9]*"
                  maxLength="5"
                  placeholder="Zip Code*"
                  name="zip"
                  required
                />
                <span>Zip*</span>
              </label>
            </div>
            <div className=" py-2">
              <label className="Form--Label Form-Checkbox">
                <input
                  className="Form--Input Form--Textarea Form--CheckboxInput"
                  name="newsletter"
                  type="checkbox"
                  defaultChecked
                />
                <span>Get news updates</span>
              </label>
            </div>
            <p>
              <button type="submit" className="Button Form--SubmitButton">
                Learn More
              </button>
            </p>
            <small>*Mandatory Field</small>
          </form>
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
