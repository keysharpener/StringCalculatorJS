var assert = require('assert');
var stringcalculator = require('../stringcalculator');

describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should return zero when given an empty string', function() {
      assert.equal(0, stringcalculator.Add(""));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should return number as is if only one input', function() {
      assert.equal(1, stringcalculator.Add("1"));
      assert.equal(100, stringcalculator.Add("100"));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should return sum of two numbers', function() {
      assert.equal(3, stringcalculator.Add("1,2"));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should return sum of more than two numbers', function() {
      assert.equal(15, stringcalculator.Add("1,2,3,4,5"));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should allow \\n as a separator', function() {
      assert.equal(4, stringcalculator.Add("1\n3"));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should allow using a custom separator if first line is //{seperator}\\n', function() {
      assert.equal(4, stringcalculator.Add("//;\n1;3"));
    });
  });
});
describe('stringcalculator', function() {
  describe('#add()', function() {
    it('should allow using a custom separator if first line is //{seperator}\\n, but be still compatible with \\n and ,', function() {
      assert.equal(9, stringcalculator.Add("//;\n1;3\n4,1"));
    });
  });
});