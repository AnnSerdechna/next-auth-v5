'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import { Input } from '../ui/input';
import { useForm } from 'react-hook-form';

import { CardWrapper } from './card-wrapper'
import { RegisterSchema } from '../../schemas/index';
import { Button } from '../ui/button';
import { FormError } from './form-error';
import { FormSuccess } from './form-success';
import { useState, useTransition } from 'react';
import { register } from '@/actions/register';

type FormValuesProps = z.infer<typeof RegisterSchema>;

export const RegisterForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>('');
  const [success, setSuccess] = useState<string | undefined>('');
  const form = useForm<FormValuesProps>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: FormValuesProps) => {
    setError('');
    setSuccess('');

    startTransition(() => {
      register(values)
        .then(data => {
          setError(data?.error)
          setSuccess(data?.success)
        })
    });
  }

  return (
    <CardWrapper
      headerLable={'Create an account'}
      backButtonLablel={'Already have an account?'}
      backButtonHref={'/auth/login'}
      showSocial
    >
      <Form {...form}>
        <form
          className={'space-y-6'}
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <div className={'space-y-4'}>
            <FormField
              control={form.control}
              name={'name'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Name</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder={'name'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'email'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder={'email@example.com'}
                      type={'email'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={'password'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      disabled={isPending}
                      placeholder={'******'}
                      type={'password'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={error} />
          <FormSuccess message={success} />
          <Button
            type={'submit'}
            className='w-full'
            disabled={isPending}
          >
            Register
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}