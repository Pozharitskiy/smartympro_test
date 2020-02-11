export const setUsersList = users => {
  return {
    type: "SET_USERS_LIST",
    users
  };
};

export const setUser = (user, index) => {
  return {
    type: "SET_USER",
    user,
    index
  };
};
