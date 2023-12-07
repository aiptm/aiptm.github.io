export type TRightSideInfoItem ={
  position: string;
  location: string;
  date: {
    from: string;
    to: string;
  };
  infoList?: string[];
};

export type TRightSideInfoLink ={
  url: string;
  src: string;
};

export type TRightSideBlockProps = {
  title: string;
  description?: string;
  items?: TRightSideInfoItem[];
  links?: TRightSideInfoLink[];
}

export type TLeftSideBlockProps = {
  title: string;
  items: string[];
}

