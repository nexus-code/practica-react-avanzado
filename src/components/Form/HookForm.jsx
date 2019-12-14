import React from 'react'

// import fieldsForm from './fields/fields'
import useForm from './useForm'
import Input from './Input/Input'

const handleSubmit = event => {

  event.preventDefault();

  console.log('submit', 'HF submit');
  return false;
}

const HookForm = props => {

  const [renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, onLoadData, handleSubmit] = useForm(props.fieldsForm)

  const renderForm = ( handleSubmit ) => {
    const form = (
      <div style={{ padding: "20px", maxWidth: "600px", margin: "50px auto" }}>
        <form name="hookForm">
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
        {/* <button disabled={ !formIsValid } type="button"> */}
          <button type="submit">
          Save
        </button>
      </form>

      </div>
    )

    return form
  }

  return (
    <div className="container">
      <h2>Using Hooks</h2>
      
      { renderForm() }
      <br />
      {/* {JSON.stringify(onSubmitJSON())} */}
    </div>
  )
}

HookForm.propTypes = {

}

export default HookForm
