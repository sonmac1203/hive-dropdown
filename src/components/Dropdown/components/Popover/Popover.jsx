import React, { useContext } from 'react';
import { PopoverContext } from '../../../context/context';
import { Toolbar } from '../Toolbar';
import styles from './Popover.module.css';

export const Popover = ({ children }) => {
  const { multiple, onSelectAll, onDeselectAll } = useContext(PopoverContext);
  return (
    <div className={styles.Popover}>
      <Toolbar
        multiple={multiple}
        onSelectAll={onSelectAll}
        onDeselectAll={onDeselectAll}
      />
      <div className={styles.PopoverScroll}>{children}</div>
    </div>
  );
};
