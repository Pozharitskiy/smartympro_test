const defaultState = {};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USERS_LIST":
      //name и type распарсить для людей(белых)
      return { ...state, usersList: action.users };
    case "SET_USER": {
      const usersList = [...state.usersList];
      const user = usersList[action.index];
      user.name = `${action.user.firstName} ${action.user.lastName}`;
      user.email = action.user.email;

      // user.type = action.user.type;
      user.company = action.user.company;
      user.country = action.user.country;
      return { ...state, usersList };
    }
    default:
      return state;
  }
};

export default users;
