import React from "react";
import TextDisplay from "./TextDisplay";
import TypingSpace from './TypingSpace'
import Timer from "./Timer";
import { Button } from "flowbite-react";


const TyperPage = () => {
  return (
    <div className=" mt-8 space-y-4 px-4">
      <h1 className="animate-text font-Primary font-extrabold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl ">
        KeyRapid -<span className=" text-black"> Typing Master</span>
      </h1>
      <TextDisplay/>
      <TypingSpace/>
      <Timer/>

      <div className=" flex gap-5">
         <Button color='blue' className=" font-TimeFont">
            Submit Test
         </Button>
         <Button color='failure' className=" font-TimeFont">
            Try Again
         </Button>
      </div>
    </div>
  );
};

export default TyperPage;
