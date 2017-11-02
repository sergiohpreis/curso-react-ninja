/* eslint no-unused-vars: 0 */

'use strict'

import React from 'react'

import Title from './title'

const App = React.createClass({
  render: function () {
    return (
      <div className='container'>
        <Title name='Fernando Daciuk' />
        <label htmlFor='input' data-label='Label'>Input</label>
        <input type='text' id='input' aria-hidden />
      </div>
    )
  }
})

export default App
