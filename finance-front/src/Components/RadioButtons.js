import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';

const RadioButtons = ({ opt1, opt2, onOptionChange }) => {
  const [selectedOption, setSelectedOption] = useState(true);

  const handleRadioChange = (value) => {
    setSelectedOption(value);
    onOptionChange(value);
  };

  return (
    <Form>

      <Form.Group className="mb-3">
        <Form.Check
          inline
          label={opt1}
          type="radio"
          id="radio1"
          checked={selectedOption}
          onChange={() => handleRadioChange(true)}
        />

        <Form.Check
          inline
          label= {opt2}
          type="radio"
          id="radio2"
          checked={!selectedOption}
          onChange={() => handleRadioChange(false)}
        />
      </Form.Group>
    </Form>
  );
};

export default RadioButtons;
