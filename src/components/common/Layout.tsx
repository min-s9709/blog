import React, { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'
import ScrollProgressBar from './ScrollProgressBar'

interface ILayoutProps {
  children: ReactNode
}

export default function Layout({ children }: ILayoutProps) {
  return (
    <div className={'flex flex-col items-center min-h-screen'}>
      <Header />
      <ScrollProgressBar />
      <main className={'justify-center flex flex-1'}>{children}</main>
      <Footer />
    </div>
  )
}
