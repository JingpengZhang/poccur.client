import React from "react";
import {InputProps} from "@nextui-org/input";
import {Input} from "@nextui-org/react";
import {Eye, EyeOff} from "lucide-react";

interface Props extends Omit<InputProps, 'type' & 'endContent'> {
}

const PasswordInput: React.FC<Props> = (props) => {

  const [isVisible, setIsVisible] = React.useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  return (
      <Input {...props} type={isVisible ? "text" : "password"}
             endContent={
               <button className="focus:outline-none" type="button" onClick={toggleVisibility}>
                 {isVisible ? (
                     <EyeOff className="text-2xl text-default-400 pointer-events-none"/>
                 ) : (
                     <Eye className="text-2xl text-default-400 pointer-events-none"/>
                 )}
               </button>
             }/>
  )
}

export default PasswordInput