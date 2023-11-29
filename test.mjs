import assert from 'node:assert'
import ucm from './index.mjs'

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

  it('Z', () => {
    assert.ok(ucm.Z.test(' '));
    assert.ok(ucm.Z.test('\u2028'));
    assert.ok(ucm.Z.test('\u2029'));
    assert.ok(!ucm.Z.test('A'));
  });
});
