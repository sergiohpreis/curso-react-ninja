'use strict'

import { storiesOf, action } from '@kadira/storybook'
import React from 'react'
import Search from './index'

storiesOf('Search', module)
  .add('not disabled', () => (
    <Search isDisabled={false} handleSearch={action('Handle Search')} />
  ))

  .add('disabled', () => (
    <Search isDisabled handleSearch={action('Handle Search')} />
  ))
