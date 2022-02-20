import { useState } from 'react'
import './App.css'

import { Formik, Field, Form, ErrorMessage, FormikProps } from 'formik'

import schema from './schema';

interface ValueProps {
  name: string;
  email: string;
}

function onSubmit(values: ValueProps) {

  console.log('SUBMIT', values)


}


function App() {
  const initialValues: ValueProps = {
    name: '',
    email: '',
  }

  return (
    <div className="App">
      <div className="formik">
        <Formik
          validationSchema={schema}
          validateOnMount
          initialValues={initialValues}
          onSubmit={onSubmit}

        >
          {
            ({ values, errors, touched, isValid }) => (
              <Form>
                <h3 className="title">Formulário</h3>
                <div>
                  <ErrorMessage name="name"  className="error"/>
                  <Field name="name" type="text" className="inputs" />
                </div>
                <div>
                  <ErrorMessage name="email" className="error"/>
                  <Field name="email" type="text" className="inputs" />
                </div>
                <button type="submit" disabled={!isValid}>Enviar</button>
              </Form>
            )
          }
        </Formik>
      </div>
    </div>
  )
}

export default App
