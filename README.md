# Dropdown component

## About

- Author: Son Tran Thien Mac
- Technologies: React, HTML, CSS

## Description

This is a reusable **Dropdown** component providing the functionalities as below:

- Close and open dropdown by clicking into activator button.
- Choose between `multi-select` or `single-select`.
- Allow select and deselect all options at once in multi-select mode.
- Show selected options on activator button when dropdown collapses.


## Installation

### Procedure

1.  Clone this Github repository

        git clone https://github.com/sonmac1203/hive-dropdown.git

2.  Redirect to the root directory of this repository

        cd hive-dropdown

3.  Install dependencies

        npm install

4.  Run the program

        npm start


## Usage

### Props

#### `Dropdown`

| Prop name | Description         | Default   | Example  |
|-----------|---------------------|-----------|----------|
| multiple  | Enable multi-select | `false`   | `true`   |
| label     | Label of Dropdown   | `"Label"` | `"Name"` |

#### `DropdownOption`

| Prop name | Description                         | Default | Example |
|-----------|-------------------------------------|---------|---------|
| value     | Value of option                     | N/A     | `"son"` |
| label     | Label of Dropdo                     | N/A     | `"Son"` |
| id        | index when mapping, starting from 0 | N/A     | 1       |

### Sample usage

```js
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
      <Dropdown label={label}>
        {options.length > 0 &&
          options.map(({ value, label }, k) => (
            <DropdownOption value={value} label={label} id={k} />
          ))}
      </Dropdown>
    </div>
  );
}

export default App;

```

## Interface

Multi-select:

<img width="435" alt="image" src="https://user-images.githubusercontent.com/83494548/191630679-06f91180-1a0c-4eee-b509-f0801a7202a7.png">

Single-select

<img width="415" alt="image" src="https://user-images.githubusercontent.com/83494548/191630738-12572e35-a371-4ed7-9a31-442fbd2abb40.png">

