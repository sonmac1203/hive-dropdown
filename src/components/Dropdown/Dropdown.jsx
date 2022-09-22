import React, { useState, useMemo } from 'react';
import { DropdownOptionsContext, PopoverContext } from '../context/context';
import { Popover } from './components';
import styles from './Dropdown.module.css';

export const Dropdown = ({ children, label, multiple }) => {
  const [opened, setOpened] = useState(false);
  const [options, setOptions] = useState({});
  const toggleDropdown = () => {
    setOpened(!opened);
  };

  const defaultLabel = 'Label';

  const onSelectAll = () => {
    const uncheckedOptions = [];
    for (const [k, v] of Object.entries(options)) {
      if (!v.chosen) {
        uncheckedOptions.push(k);
      }
    }
    const updatedState = {};
    for (const u of uncheckedOptions) {
      updatedState[u] = {
        value: options[u].value,
        label: options[u].label,
        chosen: true,
      };

      setOptions((options) => ({
        ...options,
        ...updatedState,
      }));
    }
  };

  const onDeselectAll = () => {
    const checkedOptions = [];
    for (const [k, v] of Object.entries(options)) {
      if (v.chosen) {
        checkedOptions.push(k);
      }
    }
    const updatedState = {};
    for (const c of checkedOptions) {
      updatedState[c] = {
        value: options[c].value,
        label: options[c].label,
        chosen: false,
      };

      setOptions((options) => ({
        ...options,
        ...updatedState,
      }));
    }
  };

  const getChosenLables = () => {
    const hasChosen =
      Object.keys(options).filter((k) => {
        return options[k].chosen;
      }).length !== 0;

    return !hasChosen ? (
      <>Select ...</>
    ) : (
      Object.keys(options)
        .filter((k) => {
          return options[k].chosen;
        })
        .map((o, k) => (
          <div className={styles.ChosenOption}>{options[o].label}</div>
        ))
    );
  };

  const optionsContextValue = useMemo(
    () => ({
      multiple,
      options,
      setOptions,
    }),
    [multiple, options, setOptions]
  );

  const popoverContextValue = useMemo(
    () => ({
      multiple,
      onSelectAll,
      onDeselectAll,
    }),
    [multiple, onSelectAll, onDeselectAll]
  );

  return (
    <div className={styles.Container}>
      <div className={styles.Dropdown}>
        <div className={styles.DropdownActivator} onClick={toggleDropdown}>
          <span className={styles.DropdownLabel}>
            {label ? label : defaultLabel}
          </span>
          <div className={styles.DropdownShow}>{getChosenLables()}</div>
          <span>&#9660;</span>
        </div>
        <div
          className={`${styles.DropdownOptions} ${!opened && styles.hidden}`}
        >
          <DropdownOptionsContext.Provider value={optionsContextValue}>
            <PopoverContext.Provider value={popoverContextValue}>
              <Popover styles={styles}>{children}</Popover>
            </PopoverContext.Provider>
          </DropdownOptionsContext.Provider>
        </div>
      </div>
    </div>
  );
};
