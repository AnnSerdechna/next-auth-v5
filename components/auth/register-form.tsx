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
import { login } from '@/actions/login';

type FormValuesProps = z.infer<typeof RegisterSchema>;

export const RegisterForm = () => {
  const form = useForm<FormValuesProps>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      username: '',
      email: '',
      password: ''
    }
  });

  const onSubmit = (values: FormValuesProps) => {
    login(values);
  }

  return (
    <CardWrapper
      headerLable={'Welcome back!'}
      backButtonLablel={'Do you have an account?'}
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
              name={'username'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder={'username'}
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
                      placeholder={'******'}
                      type={'password'}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError message={''} />
          <FormSuccess message={''} />
          <Button
            type={'submit'}
            className='w-full'
          >
            Login
          </Button>
        </form>
      </Form>
    </CardWrapper>
  )
}