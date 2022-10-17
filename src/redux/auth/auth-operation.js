import axios from "axios";
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com/';

export const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    }
};

export const register = createAsyncThunk('auth/register', async (credentials, thunkAPi) => {
    try {
        const { data } = await axios.post('users/signup', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return  thunkAPi.rejectWithValue()
    }
});


export const login = createAsyncThunk('auth/login', async (credentials, thunkAPi) => {
    try {
        const { data } = await axios.post('users/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        return  thunkAPi.rejectWithValue()
    }
});



export const logOut = createAsyncThunk('auth/logOut', async (_ , thunkAPi) => {
    try {
        await axios.post('users/logout');
        token.unset();
    } catch (error) {
        return  thunkAPi.rejectWithValue()
    }
});

export const fetchCurrentUser = createAsyncThunk('auth/currentUser', async (_, thunkAPi) => {
    const state = thunkAPi.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
        return thunkAPi.rejectWithValue(5)
    };
    token.set(persistedToken);
    try {
        const { data } = await axios.get('users/current');
        console.log(data)
        return data;
    } catch (error) {
        return error.message;
    }

})

