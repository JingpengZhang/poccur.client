import React from "react";
import {User} from "lucide-react";
import Link from "next/link";

interface Props extends IComponentProps {
}

const Menu: React.FC<Props> = ({className}) => {
  const menus = [
    {
      id: 1, name: "Profile", icon: "icon-user", onClick: () => {
      }
    },
    {
      id: 2, name: "Marked", icon: "icon-mark", onClick: () => {
      }
    },
    {
      id: 3, name: "Exit", icon: "icon-exit", onClick: () => {
      }
    },
  ];

  return (
      <div
          className={[
            " bg-white rounded-main shadow-main p-4",
            className,
          ].join(" ")}
      >
        <ul className=" flex flex-col w-fit">
          {menus.map((item) => {
            return (
                <li
                    key={item.id}
                >
                  <Link href={''}
                        className="text-font-75 h-8 hover:text-primary-100 cursor-pointer flex items-center mb-3 last-of-type:mb-0">
                    <User className='mr-1 flex-shrink-0' size={16}/>
                    <span className=" text-xs">{item.name}</span>
                  </Link>
                </li>
            );
          })}
        </ul>
      </div>
  );
};

export default Menu;