'use strict'

import { expect } from 'chai'
import every from './every'

it('every should be a function', () => {
    expect(every).to.be.a('function')
});

it('every([1, 2, 3], item => item) should return true', () => {
    expect(every([1, 2, 3], item => item)).to.be.equal(true)
})

it('every([0, 1, 2], item => item) should return false', () => {
    expect(every([0, 1, 2], item => item)).to.be.equal(false)
})

it('every([0, 1, 2], (item, index) => item === index should return true', () => {
    expect(every([0, 1, 2], (item, index) => item === index)).to.be.equal(true)
})