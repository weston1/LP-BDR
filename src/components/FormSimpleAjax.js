import React, { Fragment } from 'react'
import Helmet from 'react-helmet'
import { stringify } from 'qs'
import { serialize } from 'dom-form-serializer'

import './Form.css'

class Form extends React.Component {
  static defaultProps = {
    name: 'Simple Form Ajax',
    subject: '{image.team}', // optional subject of the notification email
    action: '/thank-you',
    successMessage: 'Welcome to loilpoints!',
    errorMessage: 'Please fill out all fields before submitting.'
  }

  state = {
    alert: '',
    disabled: false
  }

  handleSubmit = e => {
    e.preventDefault()
    if (this.state.disabled) return

    const form = e.target
    const data = serialize(form)
    this.setState({ disabled: true })
    fetch(form.action + '?' + stringify(data), {
      method: 'POST'
    })
      .then(res => {
        if (res.ok) {
          return res
        } else {
          throw new Error('Network error')
        }
      })
      .then(() => {
        form.reset()
        this.setState({
          alert: this.props.successMessage,
          disabled: false
        })
      })
      .catch(err => {
        console.error(err)
        this.setState({
          disabled: false,
          alert: this.props.errorMessage
        })
      })
  }

  render() {
    const { name, subject, action } = this.props

    return (
      <Fragment>
        <Helmet></Helmet>
        <form
          className="Form"
          name={name}
          action={action}
          onSubmit={this.handleSubmit}
          data-netlify="true"
          netlify-recaptcha=""
        >
          {this.state.alert && (
            <div className="Form--Alert">{this.state.alert}</div>
          )}
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
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              inputmode="numeric"
              pattern="[0-9]*"
              placeholder="Phone*"
              name="phone"
              required
            />
            <span>Phone*</span>
          </label>
          <label className="Form--Label">
            <input
              className="Form--Input Form--InputText"
              inputmode="numeric"
              pattern="[0-9]*"
              maxLength="5"
              placeholder="Zip Code"
              name="zip"
              required
            />
            <span>Zip Code</span>
          </label>

          <label className="Form--Label Form-Checkbox">
            <input
              className="Form--Input Form--Textarea Form--CheckboxInput"
              name="newsletter"
              type="checkbox"
              defaultChecked
            />
            <span>Get news updates</span>
          </label>
          {!!subject && <input type="hidden" name="subject" value={subject} />}
          <input type="hidden" name="form-name" value={name} />
          <input
            className="Button Form--SubmitButton"
            type="submit"
            value="Learn More"
            disabled={this.state.disabled}
          />
        </form>
        <small>*Mandatory Field</small>
      </Fragment>
    )
  }
}

export default Form
