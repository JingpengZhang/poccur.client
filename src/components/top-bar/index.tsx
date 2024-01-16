'use client'

import React from "react";
import BreadcrumbNavigation from "@/components/breadcrumb-navigation";

const TopBar: React.FC = () => {
  return (
      <div className='h-12 flex items-center'>
        <BreadcrumbNavigation/>
      </div>
  )
}

export default TopBar