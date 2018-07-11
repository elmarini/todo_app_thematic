// eslint-disable-next-line import/prefer-default-export
export const sortItems = (items, sort) => {
  switch (sort.id) {
    case 'label':
      return items.sort((a, b) => (
        a.label.toLowerCase()[0] > b.label.toLowerCase()[0]
      ));
    case 'date':
      return items.sort((a, b) => a.date > b.date);
    default:
      return items;
  }
};
