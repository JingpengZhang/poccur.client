'use client'
import {NextUIProvider} from "@nextui-org/react";
import React from "react";

const Providers: React.FC<{
  children: React.ReactNode
}> = (props) => {
  return (
      <NextUIProvider>
        {props.children}
      </NextUIProvider>
  )
}

export default Providers