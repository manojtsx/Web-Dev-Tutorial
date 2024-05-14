const extractNumbers = require('../day47');

describe('extractNumbers()', () => {
    test('should return an array of numbers extracted from a string', () => {
        expect(extractNumbers('abc123def456')).toEqual([123, 456]);
        expect(extractNumbers('no numbers here')).toEqual([]);
        expect(extractNumbers('1a2b3c4d5e6f')).toEqual([1, 2, 3, 4, 5, 6]);
        expect(extractNumbers('')).toEqual([]);
    }
    );
}
);