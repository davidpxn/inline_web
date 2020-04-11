import React from 'react';

import Field from '../../components/field/Field';

import './FormStep.scss';


function FormStep(props) {
  const {
    title,
    name,
    fields,
    handleChange,
    data,
    errors,
    step,
    currentStep,
  } = props;


  if (currentStep !== step) {
    return null;
  }

  return (
    <div className="form-step">
      <h2 className="form-step__title">{title}</h2>
      {fields.map((field) => (
        <Field
          title={field.title}
          name={`${name}.${field.name}`}
          type={field.type}
          value={data[field.name]}
          error={errors[field.name]}
          handleChange={handleChange}
          key={field.name}
        />
      ))}
    </div>
  );
}


export default FormStep;
