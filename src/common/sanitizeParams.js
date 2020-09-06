const sanitizeParams = (params) => {
  const entries = Object.entries(params);

  return Object.fromEntries(
    entries.filter(([key, value]) => !!value && value !== '-1')
  );
};

export default sanitizeParams;
