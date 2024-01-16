import React from "react";
import MarkEntry from "@/components/navigation/mark-entry";
import User from "@/components/navigation/user";
import Menu from "@/components/navigation/menu";
import Search from "@/components/navigation/search";

const Navigation: React.FC = () => {
  return (
      <section
          className="h-24 w-full sticky top-0 left-0 bg-white"
      >
        <div className="inner-page flex justify-between items-center h-full">
          <div className="h-full flex items-center">
          <span className=" text-secondary-100 font-bold">
            <span className="text-lg">MEGA.</span>
            <span>news</span>
          </span>
            <Menu className='ml-12'/>
          </div>
          <div className=" h-10 flex items-center">
            <Search className='mr-6'/>
            <User className='mr-6'/>
            <MarkEntry/>
          </div>
        </div>
      </section>
  )
}

export default Navigation