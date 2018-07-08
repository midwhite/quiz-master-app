import Util from '@/util';

describe('util.js', () => {
  describe('camelToSnake()', () => {
    it('should convert keys from camel-case to snake-case', () => {
      const original = { camelKey: 'camel_key' };
      const expected = { camel_key: 'camel_key' };
      expect(Util.camelToSnake(original)).to.deep.equal(expected);
    });

    it('should return no error if object has null value', () => {
      const original = { nullValue: null };
      const expected = { null_value: null };
      expect(Util.camelToSnake(original)).to.deep.equal(expected);
    });

    it('should convert keys recursively when find object value', () => {
      const original = {
        snakeKey: 'snake_key',
        nestObj: {
          innerValue: 'inner_value',
          nestObj: { innerValue: 'inner_value' },
        },
      };
      const expected = {
        snake_key: 'snake_key',
        nest_obj: {
          inner_value: 'inner_value',
          nest_obj: { inner_value: 'inner_value' },
        },
      };
      expect(Util.camelToSnake(original)).to.deep.equal(expected);
    });

    it('should convert keys normally if it has array value', () => {
      const original = {
        isArray: ['element', {
          objectInArray: 'object_in_array',
          nestedObject: { innerNestedObject: 'inner_nested_object' },
        }],
      };
      const expected = {
        is_array: ['element', {
          object_in_array: 'object_in_array',
          nested_object: { inner_nested_object: 'inner_nested_object' },
        }],
      };
      expect(Util.camelToSnake(original)).to.deep.equal(expected);
    });
  });

  describe('randomStr()', () => {
    it('should return random characters', () => {
      const result = Util.randomStr(10);
      expect(result.length).to.equal(10);
      expect(result).to.be.a('string');
    });
  });
});

