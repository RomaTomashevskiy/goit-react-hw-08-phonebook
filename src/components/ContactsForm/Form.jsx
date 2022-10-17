import shortid from "shortid";
import './index.css'
import { useSelector, useDispatch } from "react-redux"; 
import { getContact } from "redux/contacts/contact-selector";
import { addContact } from "redux/contacts/contact-operation";

const Form = () => {

    const nameId = shortid.generate();
    const numberId = shortid.generate();
    const contacts = useSelector(getContact);
    const dispatch = useDispatch();


       const formSubmit = e => {
        e.preventDefault();
   
        const form = e.target;
        const name = form.elements.name.value;
        const number = form.elements.number.value;
        
        const contact = {
            name,
            number
        };
        if (contacts) {
            contacts.find(contact => contact.name.toLowerCase() === name.toLowerCase())
                ? alert(name || + ' is already in contacts')
                : dispatch(addContact(contact));
        };
        form.reset();
    };

    return <form action="" className="form" onSubmit={formSubmit}>
        <label htmlFor={nameId} className="label_name">
            Name
            <input
                id={nameId}
                className="input_name"
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                required
            />
        </label>

        <label htmlFor={numberId} className="label_number">
            Number
            <input
                id={numberId}
                className="input_number"
                type="tel"
                name="number"
                pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
            />
        </label>
        <button type="submit" className="btn_form ">Add Contact</button>
    </form>
}

export default Form;