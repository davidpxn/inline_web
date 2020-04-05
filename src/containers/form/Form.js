import React, { useState } from 'react';

import Field from '../../components/field/Field';

import './Form.scss';


function Form(props) {
  const {
    id,
    title,
    fields,
    submitAction,
  } = props;

  const [data, setData] = useState(initData(fields));
  const [errors, setErrors] = useState(initData(fields));


  function initData(fields) {
    const data = {};
    for (const field of fields) {
      data[field.name] = '';
    }

    return data;
  }


  function handleChange(event) {
    const target = event.target;
    const { name, value } = target;
    setData(prevData => ({
      ...prevData, [name]: value
    }));
  }


  async function handleSubmit(event) {
    event.preventDefault();
    const result = await submitAction(data);

    if (result.errors) {
      setErrors(result.errors);
    }
  }


  return (
    <form className="form" onSubmit={handleSubmit} id={id} noValidate>
      <h2>{title}</h2>
      {fields.map((field) => (
        <Field
          name={field.name}
          type={field.type}
          value={data[field.name]}
          error={errors[field.name]}
          handleChange={handleChange}
          key={field.name}
        />
      ))}
    </form>
  );
}


export default Form;
