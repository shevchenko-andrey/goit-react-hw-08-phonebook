export const getFilter = state => {
  return state.filter;
};

export const getIsLoggedIn = state => state.auth.isLoggedIn;

export const getUserName = state => state.auth.user.name;

export const getvisibleContacts = (state, data) => {
  if (!data) {
    return;
  }
  const filter = getFilter(state);
  return data.filter(({ name }) => name.toLowerCase().includes(filter));
};
