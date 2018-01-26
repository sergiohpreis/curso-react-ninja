/* eslint no-unused-vars: 0 */

'use strict'

import React, { PropTypes } from 'react'

import Pagination from 'components/pagination'

import './repos.css'

const Repos = ({ className, title, repos }) => (
  <div className={`repos-list-container ${className}`}>
    <h2>{title}</h2>
    <ul className='repos-list'>
      {repos.map((repo, index) => (
        <li key={index}><a href={repo.link}>{repo.name}</a></li>
      ))}
    </ul>

    <Pagination total={10} activePage={3}/>
  </div>
)

Repos.defaultProps = {
  className: '',
  repos: []
}

Repos.propType = {
  className: PropTypes.string,
  title: PropTypes.string.isRequired,
  repos: PropTypes.array.isRequired
}

export default Repos
