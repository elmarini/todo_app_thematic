export const sort = (sortBy, options, setSort) => {
  let direction = 'asc';
  if (sortBy === options.by) {
    direction = options.direction === 'asc' ? 'desc' : 'asc';
  }
  setSort(sortBy, direction);
};

export const getArrow = (sortBy, options) => {
  const arrowMap = {
    asc: '\u25B2',
    desc: '\u25BC'
  };
  if (options.by === sortBy) {
    return arrowMap[options.direction];
  }
  return '';
}
