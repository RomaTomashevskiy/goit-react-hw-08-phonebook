import './index.css';
import Form from 'components/ContactsForm/Form';
import Filter from 'components/Filter';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getContacts } from 'redux/contacts/contact-operation';
import { getContact  , getFilter} from 'redux/contacts/contact-selector';
import { deleteContact } from 'redux/contacts/contact-operation';

const ContactsList = () => {

    const contacts = useSelector(getContact);
    const dispatch = useDispatch();
    const remove = (id) => dispatch(deleteContact(id));
    const filter = useSelector(getFilter);

    useEffect(() => { dispatch(getContacts()) }, [dispatch]);


        const filterArry = () => {
        if (contacts.length !== 0) {
            const normalizedFilter = filter.toLowerCase();
            return contacts.filter(({ name }) =>
                name.toLowerCase().includes(normalizedFilter)
            );
        }
        return [];
    };
    
    const filteredContacts = filterArry();


    return (
        <div className='center'>
            <div>
                <Form />
                <Filter />
                <ul>
                    {filteredContacts.map(({ id, name, number }) => {
                    return <li key={id} className="item">
                        <p className="text">{name}: {number}</p>
                        <button className="list_btn" type="button"  onClick={() => remove(id)}>Delete</button>
                    </li>
                })}
                </ul>
            </div>
        </div>
    )
};


export default ContactsList;