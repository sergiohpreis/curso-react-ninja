/* eslint no-unused-vars: 0 */

'use strict'

import React, { PropTypes } from 'react'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={className}>
    <h2>{title}</h2>
    <ul>
      {repos.map((repo, index) => (
        <li key={index}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>
  </div>
)

React.defaultProps = {
  className: ''
}

Repos.propType = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
}

export default Repos
