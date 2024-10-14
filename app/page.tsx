import { LoginBtn } from '@/components/auth/login-btn';
import { Button } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';

export default function Home() {
  return (
    <main className={'flex flex-col items-center justify-center space-y-6'}>
      <Heading title={'Auth'} />

      <div>
        <LoginBtn>
          <Button size={'lg'} variant={'secondary'}>Sign in</Button>
        </LoginBtn>
      </div>
    </main>
  );
}
