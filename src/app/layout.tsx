import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import './globals.css'
import Providers from "@/app/providers";
import React from "react";
import Navigation from "@/components/navigation";
import TopBar from "@/components/top-bar";
import WebFooter from "@/components/web-footer";

const inter = Inter({subsets: ['latin']})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({children}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <body className={inter.className}>
      <Providers>
        <main>
          <Navigation/>
          <div className='inner-page'>
            <TopBar/>
            {children}
          </div>
          <WebFooter/>
        </main>
      </Providers>
      </body>
      </html>
  )
}
