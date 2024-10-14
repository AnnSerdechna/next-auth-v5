import { CheckCircledIcon } from '@radix-ui/react-icons';
import { FC } from 'react';

export const FormSuccess: FC<{ message?: string }> = ({ message }) => {

  if (!message) return null;

  return (
    <div className={'bg-emerald-500/15 p-3 rounded flex items-center gap-x-2 text-sm text-emerald-500'}>
      <CheckCircledIcon className='w-4 h-4' />
      <p>{message}</p>
    </div>
  )
}