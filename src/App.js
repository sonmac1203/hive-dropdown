import React, { useMemo } from 'react';
import { Dropdown, DropdownOption } from './components';

function App() {
  const label = 'Random word';
  const options = useMemo(
    () => [
      { value: 'myname', label: 'My Name' },
      { value: 'is', label: 'Is' },
      { value: 'son', label: 'Son' },
      { value: 'tran-thien', label: 'Tran Thien' },
      { value: 'mac', label: 'Mac' },
      { value: 'greeting', label: 'Greeting' },
      { value: 'hive-ai', label: 'Hive AI' },
    ],
    []
  );
  return (
    <div className='App'>
      <Dropdown multiple label={label}>
        {options.length > 0 &&
          options.map(({ value, label }, k) => (
            <DropdownOption value={value} label={label} id={k} />
          ))}
      </Dropdown>
    </div>
  );
}

export default App;
