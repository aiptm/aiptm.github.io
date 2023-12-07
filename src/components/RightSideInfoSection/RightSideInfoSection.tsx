import React, { FC } from "react";
import { getRightSideInfoBlocks } from 'utils/getRightSideInfoBlocks';
import { InfoBlock } from './components/InfoBlock';
import profileData from 'store/data.json';
import styles from './RightSideInfoSection.module.scss';

export const RightSideInfoSection: FC = () => {
  const { employmentHistoryBlocks, educationBlocks, linksBlocks } = getRightSideInfoBlocks();

  return (
    <div className={styles.rightSectionContainer}>
      <InfoBlock title="Profile" description={profileData.summary}/>
      <InfoBlock title="Employment History" items={employmentHistoryBlocks}/>
      <InfoBlock title="Education" items={educationBlocks}/>
      <InfoBlock title="Links" links={linksBlocks}/>
    </div>
  );
};