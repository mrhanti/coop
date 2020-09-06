import toUrlParams from './toUrlParams';

// Unit testing
// Integration testing
// end-2-end testing
// Functional testing

describe('toUrlParams', () => {
  it('should not return city when value is -1', () => {
    const obj = { query: 'foo', city: '-1' };

    const url = toUrlParams(obj);

    expect(url).toEqual('/search?query=foo');
  });
});
