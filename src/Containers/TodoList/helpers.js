// eslint-disable-next-line import/prefer-default-export
export const sortItems = (items, sort) => {
  const compare = (a, b) => (
    sort.direction === 'asc' ? (a > b) : (a < b)
  );

  switch (sort.id) {
    case 'label':
      return items.sort((a, b) => (
        compare(a.label.toLowerCase()[0], b.label.toLowerCase()[0])
      ));
    case 'date':
      return items.sort((a, b) => compare(a.date, b.date));
    default:
      return items;
  }
};
