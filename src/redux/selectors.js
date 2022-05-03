export const getFilter = state => {
  return state.filter;
};

export const getvisibleContacts = (state, data) => {
  if (!data) {
    return;
  }
  const filter = getFilter(state);
  return data.filter(({ name }) => name.toLowerCase().includes(filter));
};
