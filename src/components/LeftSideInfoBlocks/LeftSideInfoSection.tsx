import React, { FC } from "react";
import { InfoBlock } from './components/InfoBlock';
import profileData from 'store/data.json';

export const LeftSideInfoSection: FC = () => {
  return (
    <div>
      <InfoBlock title="Details" items={[profileData.email]} />
      <InfoBlock title="Skills" items={profileData.skills}/>
      <InfoBlock title="Languages" items={profileData.languages}/>
    </div>
  );
};