import axios from 'axios';
import {
    getRequest,
    getSuccess,
    getFailed,
    getError,
    doneSuccess,
    getDeleteSuccess,
} from './adminSlice';

const REACT_APP_BASE_URL = "http://localhost:5000";

export const getAllUsers = () => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.get(`${REACT_APP_BASE_URL}/Admin/getAllUsers`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        } else {
            dispatch(getSuccess(result.data));
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteUser = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${REACT_APP_BASE_URL}/Admin/deleteUser/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(getDeleteSuccess());
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteClass = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${REACT_APP_BASE_URL}/Admin/deleteClass/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(doneSuccess());
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteSubject = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${REACT_APP_BASE_URL}/Admin/deleteSubject/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(doneSuccess());
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteNotice = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${REACT_APP_BASE_URL}/Admin/deleteNotice/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(doneSuccess());
        }
    } catch (error) {
        dispatch(getError(error));
    }
}

export const deleteComplain = (id) => async (dispatch) => {
    dispatch(getRequest());

    try {
        const result = await axios.delete(`${REACT_APP_BASE_URL}/Admin/deleteComplain/${id}`);
        if (result.data.message) {
            dispatch(getFailed(result.data.message));
        }
        else {
            dispatch(doneSuccess());
        }
    } catch (error) {
        dispatch(getError(error));
    }
}