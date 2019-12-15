import { useReducer } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

/**
 * 
 * @param {*} initialArgs : object with form data
 * @param {*} handleSubmitCallback : update/create logic on parent
 */

const useForm = (initialArgs, handleSubmitCallback) => {
  
  // uses toast to ui add notifications   
  const notifySaved = () => toast.success('Record saved!');
  const notifyError = () => toast.error('Error on save!');
  const notifyWarning = (warning) => toast.warning(warning);
  ///

  const [formInput, setFormInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    initialArgs
    // {
    //   //initialArgs
    // }
  );


  const handleChange = event => {
    const name = event.target.name;
    const newValue = event.target.value;
    setFormInput({ [name]: newValue });
  }
  
  const handleSubmit = async (event) => { 
    event.preventDefault();

    const result = await handleSubmitCallback();


    console.log('result', result);
    if (result){
      
      notifySaved();
    } else {

      notifyError();
    }
  }


  return [
    handleChange,
    handleSubmit,
    formInput,
    notifyWarning
  ];
};

export default useForm;