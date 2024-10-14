import { FC, ReactNode } from 'react'
import { Card, CardContent, CardHeader, CardFooter } from '../ui/card';
import { Header } from './header';
import { Social } from './social';
import { BackBtn } from './back-btn';

type CardWrapperProps = {
  children: ReactNode
  headerLable: string
  backButtonLablel: string
  backButtonHref: string
  showSocial?: boolean
};

export const CardWrapper: FC<CardWrapperProps> = ({
  children,
  headerLable,
  backButtonHref,
  backButtonLablel,
  showSocial = false
}) => {
  return (
    <Card className={'w-[400px] shadow-md'}>
      <CardHeader>
        <Header label={headerLable} />
      </CardHeader>
      <CardContent>
        {children}
      </CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackBtn
          label={backButtonLablel}
          href={backButtonHref}
        />
      </CardFooter>
    </Card>
  )
}