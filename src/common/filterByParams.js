export default (ary, { query, city }) => {
  let newData = ary;

  if (query) {
    newData = newData.filter(
      (row) =>
        `${row.name} ${row.category} ${row.description}`
          .toLowerCase()
          .indexOf(query.toLowerCase()) > -1
    );
  }

  if (!!city && city !== '-1') {
    newData = newData.filter((row) => row.city === city);
  }

  return newData;
};
