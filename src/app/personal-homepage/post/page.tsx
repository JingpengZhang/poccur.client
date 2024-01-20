'use client'

import {Tab, Tabs} from "@nextui-org/react";
import React from "react";
import PostArticle from "@/components/pages/post-article";

export default function Page() {
  return (
      <main>
        <Tabs>
          <Tab title='文章'>
            <PostArticle/>
          </Tab>
          <Tab title='代码片段'>代码片段</Tab>
        </Tabs>
      </main>
  )
}
