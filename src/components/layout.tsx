/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { connect } from 'react-redux'

import { toggleDarkMode, incrementAsync } from '../redux/actions/app'

import Header from "./header"
import "./layout.css"

const Layout = ({ children, isDarkMode, num, dispatch }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata.title} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}
        
        <button onClick={() => dispatch(toggleDarkMode(!isDarkMode))}>Dark Mode is {isDarkMode? 'on': 'off'}</button>
        <button onClick={() => dispatch(incrementAsync(1))}>Increment is {num}</button>
        </main>
        <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default connect(state => ({
  isDarkMode: state.app.isDarkMode,
  num: state.app.num
}), null)(Layout) 
