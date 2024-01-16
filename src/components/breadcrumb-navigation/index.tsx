import React from "react";
import {BreadcrumbItem, Breadcrumbs} from "@nextui-org/react";

const BreadcrumbNavigation: React.FC = () => {
  return (
      <Breadcrumbs>
        <BreadcrumbItem key='home'>首页</BreadcrumbItem>
        <BreadcrumbItem key='homepage'>个人主页</BreadcrumbItem>
      </Breadcrumbs>
  )
}
export default BreadcrumbNavigation