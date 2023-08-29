import Users from './users';
import TYPE from '../actions/type';

describe('Users reducer', () => {
  it('should return the initial state', () => {
    expect(Users(undefined, {})).toEqual({
      userList: {
        data: null,
        error: null,
      },
      userDetails: {
        data: null,
        error: null,
      },
      loading: false,
    });
  });

  it('should handle USERS_GIT_SUCCESS', () => {
    const action = {
      type: TYPE.USERS_GIT_SUCCESS,
      payload: 'someData',
    };
    expect(Users(undefined, action)).toEqual({
      userList: {
        data: 'someData',
        error: null,
      },
      userDetails: {
        data: null,
        error: null,
      },
      loading: false,
    });
  });

  it('should handle USERS_GIT_ERROR', () => {
    const action = {
      type: TYPE.USERS_GIT_ERROR,
    };
    expect(Users(undefined, action)).toEqual({
      userList: {
        data: null,
        error: action,
      },
      userDetails: {
        data: null,
        error: null,
      },
      loading: false,
    });
  });

  // Similar tests can be written for other action types like USERS_GIT_DETAIL_SUCCESS, USERS_GIT_DETAIL_ERROR, etc.
});
