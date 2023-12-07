import React, { FC } from "react";

import styles from './Header.module.scss';
import profileData from 'store/data.json';

export const Header: FC = () => {
  const { name, lastname, age, position } = profileData;

  return (
    <div className={styles.headerContainer}> 
      <div className={styles.headerWrapper}>
        <h1 className={styles.headerTitle}>{`${name} ${lastname}`}</h1>
        <div>{`${position}, ${age}y.o`}</div>
      </div>
    </div>
  );
};
