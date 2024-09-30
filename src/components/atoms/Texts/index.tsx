import { ReactNode } from "react";

const MainTitle = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <h2 className='text-3xl font-bold mb-2'>{children}</h2>;
};

const TitleBasic = ({
  children,
}: {
  children: ReactNode;
}) => {
  return <h3 className='text-lg font-medium mb-2'>{children}</h3>;
};

const NormalText = ({
  children,
  fontSize = 'text-base',
  fontWeight = 'font-normal',
  color = 'text-normalText',
}: {
  children: ReactNode;
  fontSize?: string;
  fontWeight?: string;
  color?: string;
}) => {
  return <p className={`${fontSize} ${fontWeight} ${color}`}>{children}</p>;
};


export { NormalText, TitleBasic, MainTitle };
