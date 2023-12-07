import React, { FC } from "react";
import { TLeftSideBlockProps } from 'types/commonTypes';
import styles from './infoBlock.module.scss';

export const InfoBlock: FC<TLeftSideBlockProps> = (props) => {
  const { title, items } = props;

  return (
    <div className={styles.leftBlockInfoWrapper}>
      <h4 className={styles.leftBlockTitle}>{title}</h4>
      {items.map((item) => (<p>{item}</p>))}
    </div>
  );
};