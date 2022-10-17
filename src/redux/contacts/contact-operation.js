import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const getContacts = createAsyncThunk('get/contacts', async (_, thunkALI) => {
    try {
        const { data } = await axios.get('contacts');
        return data;
    } catch (error) {
        return thunkALI.rejectWithValue(error.message);;
    };
});


export const addContact = createAsyncThunk('add/contact', async ({ name, number }, thunkALI) => {
    try {
        const responce = await axios.post('contacts', { name, number });
        return responce.data
    } catch (error) {
        return thunkALI.rejectWithValue(error.message);
    }
});



export const deleteContact = createAsyncThunk('delete/contact', async (id, thunkALI) => {
    try {
        const responce = await axios.delete(`contacts/${id}`);
        return responce.data
    } catch (error) {
        return thunkALI.rejectWithValue(error.message);
    }
});