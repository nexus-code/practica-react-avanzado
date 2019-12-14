import React from 'react'
import { Form, Button } from 'react-bootstrap';

// import fieldsForm from './fields/fields'
import useForm from './useForm'
import Input from './Input/Input'

const HookForm = props => {
  
  const [renderElementsForm, formIsValid, handlerOnChangeForm, onSubmitJSON, ,onLoadData] = useForm(props.fieldsForm)

  const renderForm = ( ) => {

    const form = (
      <div style={{ padding: "20px", maxWidth: "600px", margin: "50px auto" }}>
        <Form >
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
        {/* <button disabled={ !formIsValid } type="button"> 
          Save
        </button> */}
        <br />
          <Button variant="secondary" className="float-right" >
            Save
          </Button>
        </Form>

      </div>
    );

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
