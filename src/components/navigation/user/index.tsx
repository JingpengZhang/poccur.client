// import Avatar from "@/assets/images/temp/avatar.png";
import Menu from "./menu";
import React from "react";
import {ChevronDown} from "lucide-react";
import {Avatar} from "@nextui-org/react";

interface Props extends IComponentProps {
}

const User: React.FC<Props> = ({className}) => {
  return (
      <div
          className={[
            " flex items-center flex-shrink-0 relative group cursor-pointer",
            className,
          ].join(" ")}
      >
        <div className=" h-full aspect-square rounded-main overflow-hidden mr-2">
          <Avatar name='User' radius='md'/>
        </div>
        <span className="text-black mr-1 text-sm">Behzad</span>
        <ChevronDown className='group-hover:-rotate-180 transition-all text-font-50 ' size={16}/>

        {/** 菜单 */}
        <div className="absolute left-0 w-full top-full hidden group-hover:block pt-4">
          <Menu/>
        </div>
      </div>
  );
};

export default User;