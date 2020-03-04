import React from 'react'
import './Footer.css'

export default () => (
  <div>
    <footer className="footer">
      <div className="container taLeft">
        <span>
          © Copyright {new Date().getFullYear()} {' '}
          <a href="https://loilpoints.com">loilpoints</a>.
        </span>
      </div>
    </footer>
  </div>
)
