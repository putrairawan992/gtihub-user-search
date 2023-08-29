import { Dispatch } from "react";
import TYPE from "./type";
import axios from "axios";
import { AnyAction } from "redux";

export const getUserListGit =
  (request: any) => async (dispatch: Dispatch<any>) => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `https://api.github.com/search/users?q=${request}`
      );
      dispatch({
        type: TYPE.USERS_GIT_SUCCESS,
        payload: res?.data,
      });
      dispatch(loading(false));
    } catch (error) {
      dispatch({
        type: TYPE.USERS_GIT_ERROR,
        payload: error,
      });
      loading(false);
    }
  };

export const loading =
  (payload: any) => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: TYPE.LOADING,
      payload: payload,
    });
  };

export const getUserListGitDetail =
  (request: any) => async (dispatch: Dispatch<any>) => {
    dispatch(loading(true));
    try {
      const res = await axios.get(
        `https://api.github.com/users/${request}/repos`
      );
      dispatch({
        type: TYPE.USERS_GIT_DETAIL_SUCCESS,
        payload: res?.data,
      });
      dispatch(loading(false));
    } catch (error) {
      dispatch(loading(false));
      dispatch({
        type: TYPE.USERS_GIT_DETAIL_ERROR,
        payload: error,
      });
    }
  };

export const getInitialRenderReset =
  () => async (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: TYPE.INITIAL_RENDER,
    });
  };
