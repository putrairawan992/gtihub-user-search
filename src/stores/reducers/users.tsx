import TYPE from "../actions/type";

const initialState = {
  userList: {
    data: null,
    error: null,
  },
  userDetails: {
    data: null,
    error: null,
  },
  loading: false,
};

const Users = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPE.USERS_GIT_SUCCESS:
      return {
        ...state,
        userList: {
          ...initialState.userList,
          data: action.payload,
          error: null,
        },
      };
    case TYPE.USERS_GIT_ERROR:
      return {
        ...state,
        userList: {
          ...initialState.userList,
          data: null,
          error: action,
        },
      };
    case TYPE.USERS_GIT_DETAIL_SUCCESS:
      return {
        ...state,
        userDetails: {
          ...initialState.userDetails,
          data: action.payload,
          error: null,
        },
      };
    case TYPE.USERS_GIT_DETAIL_ERROR:
      return {
        ...state.userDetails,
        userDetails: {
          ...initialState.userDetails,
          data: null,
          error: action,
        },
      };
    case TYPE.INITIAL_RENDER:
      return {
        ...state,
        userDetails: {
          ...initialState.userDetails,
        },
        userList: {
          ...initialState.userList,
        },
        loading: false,
      };
    case TYPE.LOADING:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
};

export default Users;
