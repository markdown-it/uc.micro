import assert from 'node:assert'
import { createRequire } from 'node:module'
import { describe, it } from 'node:test'
import * as ucm from 'uc.micro'

const require = createRequire(import.meta.url)

describe('Unicode classes', () => {
  it('Any', () => {
    assert.ok(ucm.Any.test('A'));
    assert.ok(!ucm.Any.test(''));
  });

  it('Cc', () => {
    assert.ok(ucm.Cc.test('\r'));
    assert.ok(!ucm.Cc.test('A'));
  });

  it('Cf', () => {
    assert.ok(ucm.Cf.test('\xAD'));
    assert.ok(!ucm.Cf.test('A'));
  });

  it('P', () => {
    assert.ok(ucm.P.test(','));
    assert.ok(!ucm.P.test('A'));
  });

  it('S', () => {
    assert.ok(ucm.S.test('$'));
    assert.ok(ucm.S.test('£'));
    assert.ok(ucm.S.test('€'));
    assert.ok(!ucm.S.test('A'));
    assert.ok(!ucm.S.test(''));
    assert.ok(!ucm.S.test(','));
  });

  it('Z', () => {
    assert.ok(ucm.Z.test(' '));
    assert.ok(ucm.Z.test('\u2028'));
    assert.ok(ucm.Z.test('\u2029'));
    assert.ok(!ucm.Z.test('A'));
  });
});

describe('CJS', () => {
  it('require', () => {
    const cjs_ucm = require('uc.micro')

    assert.ok(cjs_ucm.Any)
    assert.ok(cjs_ucm.Cc)
    assert.ok(cjs_ucm.Cf)
    assert.ok(cjs_ucm.P)
    assert.ok(cjs_ucm.Z)
  })
})
