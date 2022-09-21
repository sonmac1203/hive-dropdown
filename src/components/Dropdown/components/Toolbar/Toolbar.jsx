import React from 'react';
import styles from './Toolbar.module.css';

export const Toolbar = ({ multiple, onSelectAll, onDeselectAll }) => {
  const selectAllButton = <div>Select all</div>;
  const deselectAllButton = <div>Deselect all</div>;
  return (
    multiple && (
      <span className={styles.Toolbar}>
        <div className={styles.SelectAllButton} onClick={onSelectAll}>
          {selectAllButton}
        </div>
        <div className={styles.DeselectAllButton} onClick={onDeselectAll}>
          {deselectAllButton}
        </div>
      </span>
    )
  );
};
