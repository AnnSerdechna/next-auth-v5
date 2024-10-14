'use client';

import { useRouter } from 'next/navigation';
import { FC, ReactNode } from 'react';

type LoginBtnProps = {
  children: ReactNode
  mode?: 'modal' | 'redirect'
  asChild?: boolean
}

export const LoginBtn: FC<LoginBtnProps>  = ({ children, mode = 'redirect', asChild}) => {
  const router = useRouter()

  if (mode === 'modal') {
    return (
      <span>Todo</span>
    )
  };

  const onClick = () => router.push('/auth/login')

  return (
    <span 
      className={'cursor-pointer'}
      onClick={onClick}
    >
      {children}
    </span>
  )
}