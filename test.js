'use strict';

const assert = require('assert');
const ucm    = require('./');

describe('Unicode classes', function () {

  it('Any', function () {
    assert.ok(ucm.Any.test('A'));
    assert.ok(!ucm.Any.test(''));
  });

  it('Cc', function () {
    assert.ok(ucm.Cc.test('\r'));
    assert.ok(!ucm.Cc.test('A'));
  });

  it('Cf', function () {
    assert.ok(ucm.Cf.test('\xAD'));
    assert.ok(!ucm.Cf.test('A'));
  });

  it('P', function () {
    assert.ok(ucm.P.test(','));
    assert.ok(!ucm.P.test('A'));
  });

  it('Z', function () {
    assert.ok(ucm.Z.test(' '));
    assert.ok(ucm.Z.test('\u2028'));
    assert.ok(ucm.Z.test('\u2029'));
    assert.ok(!ucm.Z.test('A'));
  });

});
