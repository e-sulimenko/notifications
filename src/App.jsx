import React from 'react';

import { useNotify } from './Notifications';

import './App.css';

function App() {
  const notify = useNotify();
  
  const onClick = () => {
    notify('test 123');
  };

  return (
    <div className="App">
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
