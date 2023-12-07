import profileData from 'store/data.json';
import { TRightSideInfoItem, TRightSideInfoLink } from 'types/commonTypes';

export const getRightSideInfoBlocks = () => {
  const employmentHistoryBlocks: TRightSideInfoItem[] = profileData["employment-history"].map((data) => ({
    position: data.position,
    location: data.copmpany,
    infoList: data.description,
    date: {
      from: data.date.from,
      to: data.date.to
    }
  }));

  const educationBlocks: TRightSideInfoItem[] = profileData.education.map((data) => ({
    position: data.degree,
    location: data.institution,
    date: {
      from: data.date.from,
      to: data.date.to
    }
  }));

  const linksBlocks: TRightSideInfoLink[] = profileData.links.map((data) => ({
    url: data.url,
    src: data.title
  }));

  return {
    employmentHistoryBlocks,
    educationBlocks,
    linksBlocks
  };
};