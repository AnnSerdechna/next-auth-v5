import { FC } from 'react';
import { Heading } from '../ui/heading';

type HeaderProps = {
  label: string
};

export const Header: FC<HeaderProps> = ({ label}) => {
  return (
    <div className={'w-full flex flex-col gap-y-4 items-center justify-center'}>
      <Heading title={'Auth'} />
      <p className={'text-muted-foreground text-sm'}>{label}</p>
    </div>
  )
}