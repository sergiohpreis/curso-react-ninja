/* eslint no-unused-vars: 0 */

'use strict'

import React, { PropTypes } from 'react'
import ajax from '@fdaciuk/ajax'

const Search = ({ handleSearch }) => (
  <div className='search'>
    <input
      type='search'
      placeholder='Digite o nome do usuário no Github'
      onKeyUp={handleSearch}
    />
  </div>
)

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Search
