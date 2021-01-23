import React, { useState } from 'react';

import { useNotify } from './Notifications';

import './App.css';

function App() {
  const notify = useNotify();

  const [value, setValue] = useState('');

  const onClickDefault = () => {
    notify(value);
    setValue('');
  };

  const onClickSuccess = () => {
    notify({ text: value, type: 'success' });
    setValue('');
  };

  const onClickWarning = () => {
    notify({ text: value, type: 'warning' });
    setValue('');
  };

  const onClickError = () => {
    notify({ text: value, type: 'error' });
    setValue('');
  };

  return (
    <div className="App">
      <input type="text" onChange={({ target }) => setValue(target.value)} value={value} />
      <button
        type="button"
        onClick={onClickDefault}
      >
        show default
      </button>
      <button
        type="button"
        onClick={onClickSuccess}
      >
        show success
      </button>
      <button
        type="button"
        onClick={onClickWarning}
      >
        show warning
      </button>
      <button
        type="button"
        onClick={onClickError}
      >
        show error
      </button>
    </div>
  );
}

export default App;
