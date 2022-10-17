import shortid from "shortid";
import './index.css';
import { useSelector } from "react-redux";
import { getFilter } from "redux/contacts/contact-selector";
import { useContacts } from "hook/hook";

const Filter = () => {
    const filterId = shortid.generate();

    const { filterContacts } = useContacts();
    const filter = useSelector(getFilter);
    
    const handleChangeInput = e => {
        const { value } = e.target;
        filterContacts(value);
    };

    return <div className="filter-box">
        <label htmlFor={filterId} className='filter_label'>
            Find contact by name
            <input id={filterId} type="text" value={filter} onChange={handleChangeInput} className='filter_input' />
        </label>
    </div>
};


export default Filter;