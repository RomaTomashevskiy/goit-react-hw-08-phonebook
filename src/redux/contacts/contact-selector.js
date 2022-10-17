export const getContact = state => state.contacts.items;
export const getLoader = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;