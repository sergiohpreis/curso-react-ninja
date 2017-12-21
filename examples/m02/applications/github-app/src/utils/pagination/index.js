'use strict'

const pagination = ({ total, activePage }) =>
  Array.from({ length: total }, (_, i) => i + 1)

export default pagination
