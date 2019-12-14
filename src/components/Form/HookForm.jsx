import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import fieldsForm from './fields/fields'
import useForm from './useForm'
import Input from './Input/Input'

import { useParams, useHistory } from 'react-router';
// import { useGetAd } from '../../store/ads/selectors';
// import { getAdDetail } from '../../services/AdService';

//BUCLE INFINITO

// const useGetAdFromAPI = (id) => {
//   // Search the ad in API 

//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);


//   getAdDetail(id).then(ad => {

//     if (ad.hasOwnProperty('success')) {

//       setError('404');
//     } else {

//       setResponse(ad);
//     }
//   });

//   return error === '404' ? null : response;
// };

const HookForm = props => {

  const { id } = useParams();
  const history = useHistory();

  console.log('HookForm props ->', props)

  const ad = useGetAdFromAPI(id);

  console.log('HookForm ad ->', ad)

  const [renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, , onLoadData] = useForm(fieldsForm)

  const renderForm = () => {
    let form = (
      <div className="form-style-2">
      <form>
        {renderElementsForm().map(formElement => (
          <Input
            key={ formElement.id }
            label={ formElement.config.elementLabel }
            elementType={ formElement.config.elementType }
            elementConfig={ formElement.config.elementConfig }
            value={ formElement.config.value }
            changed={ ev => handlerOnChangeForm(ev, formElement.id) }
            errorMessage={ formElement.config.errorMessage }
          />
        ))}
        <button disabled={ !formIsValid } type="button">
          Save
        </button>
      </form>

      </div>
    )

    return form
  }

  return (
    <div className="container">
      <NavLink to="/hoc"> GO TO HOC </NavLink>
      <h2>Using Hooks</h2>
      { renderForm() }
      <br />
      { JSON.stringify(onSubmitJSON()) }
    </div>
  )
}

HookForm.propTypes = {

}

export default HookForm
