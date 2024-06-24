import { useNavigate } from 'react-router-dom';
import ContactInput from '../components/ContactInput';
import { addContact } from '../utils/data';

function AddPage() {

  const navigate = useNavigate();

  function onAddContactHandler(contact) {
    addContact(contact);
    navigate('/');
  }

  return (
    <section>
      <ContactInput addContact={onAddContactHandler}/>
    </section>
  );
}

export default AddPage;