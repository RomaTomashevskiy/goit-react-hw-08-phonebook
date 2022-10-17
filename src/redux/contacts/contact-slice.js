import { createSlice } from "@reduxjs/toolkit";
import { getContacts  , addContact , deleteContact} from "./contact-operation";



const initialState = {
    items: [],
    isLoading: false,
    error: null,
    filter: ''
};


const contactSlice = createSlice({
    name: 'contacts',
    initialState,
     reducers: {
        // filter
        filterContacts(state, { payload }) {
            return { ...state, filter: payload };
        }
    },
    extraReducers: {
        [getContacts.pending]: (state, _) => ({ ...state, isLoading: true }),
        [getContacts.fulfilled]: (state, { payload }) => ({ ...state, items: payload, isLoading: false }),
        [getContacts.rejected]: (state, { payload }) => ({ ...state, isLoading: false, error: payload }),
        
        [addContact.pending]: (state) => ({ ...state, isLoading: true }),
             [addContact.fulfilled](state, {payload}) {
            state.isLoading = false;
            state.error = null;
            state.items.push(payload);
        },
        [addContact.rejected]:(state , { payload }) => ({...state , isLoading:false  , error: payload}),
        
        [deleteContact.pending]: (state, _) => ({ ...state, isLoading: true }),
        [deleteContact.fulfilled]: (state, { payload }) => {
            state.isLoading = false;
            state.error = null;
            const index = state.items.findIndex(task => task.id === payload);
            state.items.splice(index, 1);
        },
        [deleteContact.rejected]: (state, { payload }) => ({ ...state, isLoading: false, error: payload }),
    }
});

export const { filterContacts } = contactSlice.actions;
export const contactReduser = contactSlice.reducer;