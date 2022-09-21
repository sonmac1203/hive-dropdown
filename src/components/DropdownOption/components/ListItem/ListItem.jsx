import React from 'react';
import styles from './ListItem.module.css';

export const ListItem = ({ multiple, onOptionChecked, label, id, options }) => {
  const chosen = id in options && options[id].chosen;
  const classNames = `${styles.ListItem} ${
    chosen ? styles.ListItemChosen : ''
  }`;

  return multiple ? (
    <label className={classNames}>
      {multiple && (
        <input
          type='checkbox'
          id={id}
          onChange={(e) => {
            onOptionChecked(e);
          }}
          checked={id in options && options[id].chosen}
        />
      )}
      {label}
    </label>
  ) : (
    <div className={classNames} onClick={onOptionChecked}>
      {label}
    </div>
  );
};
