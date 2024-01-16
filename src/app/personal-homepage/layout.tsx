'use client'

import React from "react";
import {Avatar, Button} from "@nextui-org/react";
import {FilePenLine} from "lucide-react";
import Link from "next/link";

export default function RootLayout({children}: {
  children: React.ReactNode
}) {

  const menu = [
    {id: 1, name: "主页", path: ''},
    {id: 2, name: "文章", path: ''},
    {id: 3, name: "发布", path: '/personal-homepage/post'},
  ]

  const menuItemClick = (id: number) => {

  }

  return (
      <div className='inner-page'>
        <div className='w-full bg-gray p-2 rounded-lg'>
          {/* 背景图 */}
          <div className=' rounded-lg overflow-hidden'>
            <img className='h-36 flex w-full object-cover'
                 src='https://nextui-docs-v2.vercel.app/images/hero-card-complete.jpeg' alt='背景图'/>
          </div>
          <div className='flex justify-between items-center mt-2'>
            <div className='flex items-center'>
              <Avatar name='User' radius='md' size='lg'/>
              <span className='ml-2'>Heisenberg</span>
            </div>
            <ul className='flex items-center'>
              {
                menu.map(item =>
                    <li key={item.id} className="mx-4 relative">
                      <Link href={item.path}
                            onClick={() => menuItemClick(item.id)}
                            className={"flex items-center  after:block after:absolute after:h-1 after:w-2.5 duration-200  after:transition-all after:rounded-sm after:-bottom-1 after:left-0 after:bg-transparent hover:after:bg-primary-100"}
                      >
                        <span>{item.name}</span>
                      </Link>
                    </li>
                )
              }
            </ul>
            <div className=' flex items-center'>
              <Button color='danger' size='sm' startContent={<FilePenLine size={18}/>} variant='light'>修改资料</Button>
            </div>
          </div>
        </div>
        <section className='mt-4'>
          {children}
        </section>
      </div>
  )
}
