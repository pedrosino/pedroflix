import React from 'react';
import './FormField.css';

function FormField({ label, type, name, valor, onChange }) {
  if(type === 'area') {
    return (
      <div>
        <label>
          {label}
          <textarea 
            name={name}
            value={valor}
            onChange={onChange}
          />
        </label>
      </div>
    )
  } else {
  return (
    <div>
      <label>
        {label}
        <input
          name={name}
          type={type}
          value={valor}
          onChange={onChange}
        />
      </label>
    </div>
  )
  }
}

export default FormField;