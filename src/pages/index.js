import React from 'react'
import Link from 'gatsby-link'
import DSLeftNav from '../components/ds-website-components/LeftNav'
import logoBrush from '../assets/brush/brush.svg'
import Splash from '../assets/brush/splash.svg'
import FooterMessage from '../components/ds-website-components/FooterMessage'

const IndexPage = () => (
  <div className="ds-app-grid">
    <DSLeftNav />

    <div className="ds-main-content">
      <div className="ds-container">

        <img src={logoBrush} className="ds-intro-logo-brush" />

        <h3 className="subheading">A mostly reasonable although opinionated approach to building Responsive User Interfaces sharing the same anatomy.</h3>

        <img src={Splash} className="ds-intro-splash" />

      </div>

      <FooterMessage />

    </div>
  </div>
)

export default IndexPage
