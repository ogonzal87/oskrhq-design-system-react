import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/LeftNav'
import Highlight from 'react-highlight'
import '../../node_modules/highlight.js/styles/dracula.css'


const Contact = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">
        <h1>Contact</h1>
        <script src="https://gist.github.com/ogonzal87/90381e4309044cdca78439885a47b473.js"></script>

        <Highlight className='sass'>
          {`@mixin ds-display4-text-style() {
  fontSize:   ds-font-size(display4, base);
  line-height: ds-line-height(display4, base);
  font-weight: ds-font-weight(display4, light);
  color: $ds-base-text-color;
  text-rendering: optimizeLegibility;
}`}
        </Highlight>
      </div>
    </div>
  </div>
)

export default Contact