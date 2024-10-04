import React, { useEffect } from "react";
import TextDisplay from "./TextDisplay";
import TypingSpace from './TypingSpace'
import Timer from "./Timer";
import { Button } from "flowbite-react";
import SpeedStats from "./SpeedStats";
import { useDispatch, useSelector } from "react-redux";


const TyperPage = () => {
  const dispatch = useDispatch();
    const {
      text,
      currentIndex,
      timeLeft,
      isStarted,
      typedChars,
      wpm,
      accuracy,
      isSubmitted,
    } = useSelector((state) => state.typingTest);
  
    useEffect(() => {
      if (isStarted && timeLeft > 0) {
        dispatch(updateTypedChars(typedChars));
      }
    }, [typedChars, timeLeft, isStarted, dispatch]);
  
    const handleType = (value) => {
      if (!isStarted) dispatch(startTest());
      dispatch(updateTypedChars(value));
    };
  
    const handleTimeUp = (newTimeLeft) => {
      dispatch(updateTimeLeft(newTimeLeft));
    };
  
    const handleSubmit = () => {
      dispatch(submitTest());
    };
  
    const handleReset = () => {
      dispatch(resetTest());
    };
  return (
    <div className=" mt-8 space-y-4 px-4">
      <h1 className="animate-text font-Primary font-extrabold bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-3xl ">
        KeyRapid -<span className=" text-black"> Typing Master</span>
      </h1>
      <TextDisplay text={text} currentIndex={currentIndex} />
      <TypingSpace onType={handleType} isDisabled={isSubmitted} />
      <Timer timeLeft={timeLeft} onTimeUp={handleTimeUp} />
      {isSubmitted && <SpeedStats wpm={wpm} accuracy={accuracy} />}
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
