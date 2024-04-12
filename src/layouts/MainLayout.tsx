import React, { ReactNode } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'

interface IMainLayout {
  children: ReactNode
}

export default function MainLayout({ children }: IMainLayout) {
  return (
    <div>
      <Header />
      <div className=''>{children}</div>
      <Footer />
    </div>
  )
}
