import React from "react";

interface Props {
  className?:string
  gap?: number
  children?: React.ReactNode
}

const Space: React.FC<Props> = ({children, gap,className}) => {
  return (
      <div className={className}>
        <div style={{
          columnGap: gap || 20
        }} className='flex items-center'>{children}</div>
      </div>

  )
}

export default Space