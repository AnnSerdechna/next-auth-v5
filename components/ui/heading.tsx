import { FC } from 'react';
import { CardHeader } from '../ui/card';

type HeadingProps = {
  title: string
};

export const Heading: FC<HeadingProps> = ({ title }) => {
  return (
    <h1 className={'text-6xl font-semibold text-gray-600 drop-shadow-md'}>
      {title}
    </h1>
  )
}