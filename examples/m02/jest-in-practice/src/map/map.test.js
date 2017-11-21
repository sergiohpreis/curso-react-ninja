'use strict'

import { expect } from 'chai'
import map from './map'

it('map() should be a function', () => {
    expect(map).to.be.a('function')
})

it('map([1,2,3], item => item + 1) should return [2,3,4]', () => {
    const increment = item => item + 1
    expect(map([1,2,3], increment)).to.be.eql([2,3,4])
})

it('map([1,2,3], (item, index) => ({item, index})) should return [{item: 1, index: 0}, {item: 2, index: 1}, {item: 3, index: 2}]', () => {
    const transform = (item, index) => ({ item, index })
    expect(map([1, 2, 3], transform)).to.be.eql([{ item: 1, index: 0 }, { item: 2, index: 1 }, { item: 3, index: 2 }])
})

it('map([1,2,3], (item, index, array) => ({item, index, array})) should return [{item: 1, index: 0, array: [1,2,3]}, {item: 2, index: 1, array: [1,2,3]}, {item: 3, index: 2, array: [1,2,3]}]', () => {
    const transform = (item, index, array) => ({ item, index, array })
    expect(map([1, 2, 3], transform)).to.be.eql([{ item: 1, index: 0, array: [1, 2, 3] }, { item: 2, index: 1, array: [1, 2, 3] }, { item: 3, index: 2, array: [1, 2, 3] }])
})