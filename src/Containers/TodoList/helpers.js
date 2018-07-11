// eslint-disable-next-line import/prefer-default-export
export const filterItems = (items, filter, sort) => {
  let visible = items;

  if (filter.terms) {
    visible = visible.filter(item => (
      item.label.toLowerCase().includes(filter.terms.toLowerCase())
    ));
  }

  switch (sort.id) {
    case 'label':
      return visible.sort((a, b) => (
        a.label.toLowerCase()[0] > b.label.toLowerCase()[0]
      ));
    case 'date':
      return visible.sort((a, b) => a.date > b.date);
    default:
      return visible;
  }
};
