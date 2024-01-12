import Link from "next/link";
import React from "react";
import {Bookmark} from "lucide-react";

interface Props extends IComponentProps {
}

const MarkEntry: React.FC<Props> = ({className}) => {
  return (
      <Link
          href={""}
          className={[
            className,
            "h-full flex flex-shrink-0 items-center justify-center  aspect-square text-font-100 bg-gray rounded-main hover:text-primary-100",
          ].join(" ")}
      >
        <Bookmark size={16}/>
      </Link>
  );
};

export default MarkEntry;