import React, { useState } from 'react';

import { useNotify } from './Notifications';

import './App.css';

function App() {
  const notify = useNotify();

  const [value, setValue] = useState('');

  const onClick = () => {
    notify(value);
    setValue('');
  };

  return (
    <div className="App">
      <input type="text" onChange={({ target }) => setValue(target.value)} value={value} />
      <button
        type="button"
        onClick={onClick}
      >
        show notification
      </button>
    </div>
  );
}

export default App;
