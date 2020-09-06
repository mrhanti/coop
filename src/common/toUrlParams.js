export default (params) => {
  const keys = Object.keys(params);

  const url = keys
    .map((key) => {
      const value = params[key];

      if (value === '' || value === '-1') {
        return '';
      }

      return `${key}=${encodeURIComponent(value)}`;
    })
    .filter((value) => !!value);

  if (url.length === 0) {
    return '/search';
  }

  return `/search?${url.join('&')}`;
};
