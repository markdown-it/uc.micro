'use strict'
/* eslint-env mocha */

const ucm = require('../')
const assert = require('assert')

describe('CJS', () => {
  it('require', () => {
    assert.ok(ucm.Any)
    assert.ok(ucm.Cc)
    assert.ok(ucm.Cf)
    assert.ok(ucm.P)
    assert.ok(ucm.Z)
  })
})
