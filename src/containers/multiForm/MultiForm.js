import React, { useState } from 'react';

import Button from '../../components/button/Button';
import Alert from '../../components/alert/Alert';
import FormStep from '../../components/formStep/FormStep';

import './MultiForm.scss';


function MultiForm(props) {
  const {
    categories,
    submitAction,
    onSuccess,
    errorMessage,
    className,
    theme,
  } = props;

  const [currentStep, setCurrentStep] = useState(1);
  const [data, setData] = useState(initData(categories));
  const [errors, setErrors] = useState(initData(categories));
  const [alertMessage, setAlertMessage] = useState(null);
  const [loading, setLoading] = useState(false);


  function initData(categories) {
    const data = {};

    for (const category of categories) {
      data[category.categoryName] = {};

      for (const field of category.fields) {
        data[category.categoryName][field.name] = '';
      }
    }

    return data;
  }


  function handleChange(event) {
    const { name, value } = event.target;
    const [category, field] = name.split(".");

    setData(prevData => {
      const newData = Object.assign({}, prevData);
      newData[category][field] = value;
      return newData;
    });
  }


  async function handleSubmit() {
    setLoading(true);
    setAlertMessage(null);

    let result;
    try {
      result = await submitAction(data);

      if (!result.ok) {
        let errorStepSet;
        let counter = 1;

        for (const [category, categoryErrors] of Object.entries(result.data.errors)) {
          const newErrors = {};

          for (const e of categoryErrors) {
            newErrors[e.field] = e.error;

            if (!errorStepSet) {
              errorStepSet = true;
              setCurrentStep(counter);
            }
          }

          setErrors(prevErrors => {
            const updatedErrors = Object.assign({}, prevErrors);
            updatedErrors[category] = newErrors;
            return updatedErrors;
          });

          counter++;
        }

      }
    } catch (e) {
      setAlertMessage(errorMessage);
    }

    setLoading(false);

    if (onSuccess && result.ok) {
      onSuccess();
    }
  }


  function next() {
    setCurrentStep(prevStep => {
      const numCategories = categories.length;
      const currentStep = prevStep >= numCategories ? numCategories : prevStep + 1;
      return currentStep;
    });
  }


  function prev() {
    setCurrentStep(prevStep => {
      const currentStep = prevStep <= 1 ? 1 : prevStep - 1;
      return currentStep;
    });
  }


  function previousButton() {
    if (currentStep !== 1) {
      return (
        <Button
          text="back"
          color="turq"
          fill={false}
          handleClick={prev}
        />
      );
    }

    return null;
  }


  function nextButton() {
    if (currentStep < categories.length) {
      return (
        <Button
          text="next"
          color="blue"
          fill={true}
          handleClick={next}
        />
      );
    } else if (currentStep >= categories.length) {
      return (
        <Button
          text="finish"
          color="blue"
          fill={true}
          handleClick={handleSubmit}
          loading={loading}
        />
      );
    }

    return null;
  }


  return (
    <div className={`multi-form multi-form--${theme} ${className}`}>
      <form noValidate>
        {categories.map((category, i) => (
          <FormStep
            title={category.title}
            name={category.categoryName}
            fields={category.fields}
            step={i + 1}
            currentStep={currentStep}
            handleChange={handleChange}
            data={data[category.categoryName]}
            errors={errors[category.categoryName]}
            theme={theme}
            key={category.categoryName}
          />
        ))}
      </form>
      <div className="multi-form__buttons">
        {nextButton()}
        {previousButton()}
      </div>
      <Alert
        type="error"
        text={alertMessage}
      />
    </div>

  );
}


export default MultiForm;
