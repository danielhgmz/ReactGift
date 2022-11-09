import { useState } from 'react';

export const AddCategory = ({ onAddCategory }) => {
  const [InputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    if (InputValue.trim().length <= 1) return;
    onAddCategory(InputValue.trim());
    setInputValue('');
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type='text'
        placeholder='Buscar'
        value={InputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
