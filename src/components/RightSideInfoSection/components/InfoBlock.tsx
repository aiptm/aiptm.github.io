import React, { FC } from "react";
import { TRightSideBlockProps } from 'types/commonTypes';
import styles from './infoBlock.module.scss';

export const InfoBlock: FC<TRightSideBlockProps> = (props) => {
  const { title, description, items, links } = props;

  return (
    <div className={styles.rightBlockInfoContainer}>
      <h3 className={styles.rightBlockTitle}>{title}</h3>
      <p>{description}</p>
      {items?.map((item) => (
        <>
          <h4>{`${item.position}, ${item.location}`}</h4>
          <span className={styles.rightBlockDate}>{`${item.date.from} - ${item.date.to}`}</span>
          <ul className={styles.rightBlockList}>
            {item.infoList?.map((text) => (<li>{text}</li>))}
          </ul>
        </>
      ))}
      {links?.map((link) => (
        <div>
          <a href={link.url}>{link.url}</a> - <span>{link.src}</span>
        </div>
      ))}
    </div>
  );
};