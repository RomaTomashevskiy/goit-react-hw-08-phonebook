import { filterContacts } from "redux/contacts/contact-slice";
import { useDispatch } from "react-redux";

export const useContacts = () => {
    const dispatch = useDispatch();

    const handleSetFilter = name => {
        dispatch(filterContacts(name));
    };

        return {
            filterContacts: handleSetFilter,
    };
};