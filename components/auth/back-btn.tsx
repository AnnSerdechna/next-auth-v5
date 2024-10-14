'use client';

import { FC } from 'react';
import Link from 'next/link';

import { Button } from '../ui/button';

type BackBtnProps = {
  label: string
  href: string
}

export const BackBtn: FC<BackBtnProps> = ({label, href}) => {
  return (
    <Button
      variant={'link'}
      className={'font-normal w-full'}
      size={'sm'}
    >
      <Link href={href}>
        {label}
      </Link>
    </Button>
  )
}