"use client";

import React, {useState} from "react";
import CategoryMenu from "./category-menu";
import {MoreVertical, Search as IconSearch, X} from "lucide-react";

interface Props extends IComponentProps {
}

const Search: React.FC<Props> = ({className}) => {
  const [showSelector, setShowSelector] = useState(false);

  const toggleCategorySelector = () => {
    setShowSelector(!showSelector);
  };

  const [activeCategory, setActiveCategory] = useState<ICategory | null>(null);

  const changeActiveCategory = (category: ICategory | null) => {
    setActiveCategory(category);
  };

  return (
      <div
          className={[
            "  w-80 h-full bg-gray rounded-main flex items-center",
            className,
          ].join(" ")}
      >
        {/** 按钮 */}
        <button
            onClick={toggleCategorySelector}
            className="bg-transparent relative h-full aspect-square flex items-center justify-center"
        >
          <MoreVertical className={[
            "iconfont icon-more text-font-75 transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            showSelector ? " opacity-0" : " opacity-100",
          ].join(" ")} size={16}/>
          <X className={[
            "iconfont icon-add text-font-75 transition-all absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2",
            showSelector ? " opacity-100" : " opacity-0",
          ].join(" ")} size={16}/>
          {showSelector && <CategoryMenu handleSelect={changeActiveCategory}/>}
        </button>
        {/** 搜索的指定分类范围 */}
        <div
            className={[
              " overflow-hidden h-full text-xs flex items-center pr-2 transition-all",
              activeCategory ? " w-28" : "w-0",
            ].join(" ")}
        >
        <span
            title={activeCategory?.name}
            className="w-full line-clamp-1 text-secondary-100"
        >
          {activeCategory?.name}
        </span>
        </div>
        {/** 输入框 */}
        <input
            placeholder="Search Anthing"
            className="flex-grow bg-transparent placeholder:font-light h-full focus:border-transparent focus:outline-none text-xs text-font-75 placeholder:text-font-75"
            type="text"
        />
        {/** 按钮 */}
        <button
            className=" h-full aspect-square flex items-center justify-center  text-font-100 hover:text-primary-100">
          <IconSearch size={16}/>
        </button>
      </div>
  );
};

export default Search;