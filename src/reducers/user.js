const defaultState = {};

const users = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_USERS_LIST":
      const users = [...action.users];
      users.map(user => {
        user.name = user.name.split(" ");
        const userType = [user.type];
        user.type === "Business"
          ? userType.push("Private")
          : userType.push("Business");
        user.type = userType;
      });
      return { ...state, usersList: users };
    case "SET_USER": {
      const usersList = [...state.usersList];
      const user = usersList[action.index];
      const userType = user.type;
      user.name = [action.user.firstName, action.user.lastName];
      user.email = action.user.email;
      if (action.user.userType !== userType[0]) {
        user.type = userType.reverse();
      } else {
        user.type = userType;
      }

      user.company = action.user.company;
      user.country = action.user.country;
      return { ...state, usersList };
    }
    default:
      return state;
  }
};

export default users;
