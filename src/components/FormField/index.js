import React from 'react';

function FormField({ label, type, name, valor, onChange }) {
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

export default FormField;