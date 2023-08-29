import { getUserListGit } from './users'; // Update the import to your actual file path
import axios from 'axios';
import TYPE from './type';
import { Dispatch } from 'react';

jest.mock('axios');

describe('getUserListGit', () => {
  let dispatch: jest.Mock<Dispatch<any>>;
  
  beforeEach(() => {
    dispatch = jest.fn();
  });

  it('dispatches USERS_GIT_SUCCESS upon a successful API call', async () => {
    // Mock successful axios request
    (axios.get as jest.Mock).mockResolvedValue({ data: 'someData' });

    await getUserListGit('testQuery')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPE.USERS_GIT_SUCCESS,
      payload: 'someData',
    });
  });

  it('dispatches USERS_GIT_ERROR upon an API error', async () => {
    // Mock failed axios request
    (axios.get as jest.Mock).mockRejectedValue(new Error('An error occurred'));

    await getUserListGit('testQuery')(dispatch);

    expect(dispatch).toHaveBeenCalledWith({
      type: TYPE.USERS_GIT_ERROR,
      payload: new Error('An error occurred'),
    });
  });
});
