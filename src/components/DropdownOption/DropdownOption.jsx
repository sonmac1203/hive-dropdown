import React, { useEffect, useContext } from 'react';
import { DropdownOptionsContext } from '../context/context';
import { ListItem } from './components/ListItem';
import styles from './DropdownOption.module.css';

export const DropdownOption = ({ value, label, id }) => {
  const { multiple, options, setOptions } = useContext(DropdownOptionsContext);

  useEffect(() => {
    if (multiple) {
      setOptions((options) => ({
        ...options,
        [id]: {
          value: value,
          label: label,
          chosen: false,
        },
      }));
    }
  }, []);

  const onOptionChecked = (e) => {
    if (multiple) {
      console.log('IM here');
      setOptions((options) => ({
        ...options,
        [id]: {
          ...options[id],
          chosen: e.target.checked,
        },
      }));
    } else {
      setOptions({
        [id]: {
          value: value,
          label: label,
          chosen: true,
        },
      });
    }
  };

  return (
    <ListItem
      multiple={multiple}
      onOptionChecked={onOptionChecked}
      label={label}
      id={id}
      options={options}
    />
  );
};
