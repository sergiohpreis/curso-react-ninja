/* eslint no-unused-vars: 0 */

'use strict'

import React, { PropTypes } from 'react'
import ajax from '@fdaciuk/ajax'

import style from './search.css'

const Search = ({ isDisabled, handleSearch }) => (
  <div className={style.search}>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      disabled={isDisabled}
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  isDisabled: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired
}

export default Search
