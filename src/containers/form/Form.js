import React, { useState } from 'react';

import Field from '../../components/field/Field';
import ButtonFancy from '../../components/buttonFancy/ButtonFancy';
import Alert from '../../components/alert/Alert';

import './Form.scss';


function Form(props) {
  const {
    title,
    fields,
    submitAction,
    onSuccess,
    errorMessage,
    buttonType,
    className,
  } = props;

  const [data, setData] = useState(initData(fields));
  const [errors, setErrors] = useState(initData(fields));
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);


  function initData(fields) {
    const data = {};
    for (const field of fields) {
      data[field.name] = '';
    }

    return data;
  }


  function handleChange(event) {
    const { name, value } = event.target;
    setData(prevData => ({
      ...prevData, [name]: value
    }));
  }


  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setAlertMessage(null);

    let result = {};
    try {
      result = await submitAction(data);

      if (!result.ok) {
        const newErrors = {};
        for (const e of result.data.errors) {
          newErrors[e.field] = e.error;
        }
        setErrors(newErrors);
      }
    } catch (e) {
      setAlertMessage(errorMessage);
    }

    setLoading(false);

    if (onSuccess && result.ok) {
      onSuccess();
    }
  }


  return (
    <form className={`form ${className}`} onSubmit={handleSubmit} noValidate>
      <h2 className="form__title">{title}</h2>
      {fields.map((field) => (
        <Field
          title={field.title}
          name={field.name}
          type={field.type}
          value={data[field.name]}
          error={errors[field.name]}
          handleChange={handleChange}
          key={field.name}
        />
      ))}
      {buttonType === 'fancy' &&
        <ButtonFancy
          text="login"
          offset="top"
          color="white"
          loading={loading}
          className="form__button"
        />
      }
      <Alert
        type="error"
        text={alertMessage}
      />
    </form>
  );
}


export default Form;
