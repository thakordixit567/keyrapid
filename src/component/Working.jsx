import React from 'react'
import { Button, Timeline } from "flowbite-react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Working = () => {
  return (
   <div  className=' mt-8 px-4'>
   
   <h2 className=' text-3xl font-Primary font-extrabold text-green-300'>KeyRapid - <span className=' text-black'>Typing Master</span></h2>

   <Timeline className=' mt-5'>
   <Timeline.Item>
     <Timeline.Point />
     <Timeline.Content>
       <Timeline.Time className=' font-Textfont text-black'>June 2024</Timeline.Time>
       <Timeline.Title className=' font-Textfont text-blue-400 text-xl'>How to improve your typing speed ?</Timeline.Title>
       <Timeline.Body className=' font-Textfont'>
      <p><span className=' text-black font-semibold'>1. Practice Regularly: </span> Dedicate 15-30 minutes daily.</p>
      
      <p><span className=' text-black font-semibold'>2. Focus on Accuracy: </span> Prioritize typing accurately over speed.</p>
      
       <p><span className=' text-black font-semibold'>3. Learn Touch Typing: </span>  Use all fingers and maintain the home row position.</p>
       
       <p><span className=' text-black font-semibold'>4. Use Typing Apps:</span>  Engage with apps like Keyrapid or Typing.com for structured lessons and games.</p>
       
      <p>  <span className=' text-black font-semibold'>5. Set Goals:</span> Track your progress and set specific speed and accuracy targets.</p>
       
       <p> <span className=' text-black font-semibold'> 6. Take Breaks:</span> Avoid fatigue with regular short breaks.</p>
       
      <p> <span className=' text-black font-semibold'>7. Practice Real Text:</span> Type from books or articles to simulate real-world typing.</p>
       </Timeline.Body>
       <Button className=' font-Textfont' color="gray">
         Learn More
         <HiArrowNarrowRight className="ml-2 h-3 w-3" />
       </Button>
     </Timeline.Content>
   </Timeline.Item>
   <Timeline.Item>
     <Timeline.Point />
     <Timeline.Content>
       <Timeline.Time className=' font-Textfont text-black'>July 2024</Timeline.Time>
       <Timeline.Title className=' font-Textfont text-blue-400 text-xl'>What is Word Per Minute (WPM) ?</Timeline.Title>
       <Timeline.Body>
       Words Per Minute (WPM) is a measurement used to quantify how fast a person can read or type. It indicates the number of words a person can read or type in one minute. For typing, WPM is calculated by dividing the total number of typed words by the time taken in minutes, typically factoring in errors. In reading, it measures the speed at which a person comprehends text. Higher WPM values indicate faster reading or typing speeds.
       </Timeline.Body>
     </Timeline.Content>
   </Timeline.Item>
   <Timeline.Item>
     <Timeline.Point />
     <Timeline.Content>
       <Timeline.Time className=' font-Textfont text-black'>August 2024</Timeline.Time>
       <Timeline.Title className=' text-blue-400 text-xl  font-Textfont'>Why typing speed master ?</Timeline.Title>
       <Timeline.Body className=' font-Textfont'>
      <p> <span className=' text-black font-semibold'>1. Productivity:</span> Faster typing allows you to complete tasks more quickly, which can enhance overall productivity, especially in jobs that require extensive writing or data entry.</p>
       
       <p> <span>Efficiency:</span> Being able to type quickly means you can keep up with thoughts or ideas as they come, making it easier to express yourself clearly.
       </p>
        
       <p> <span>Time Management:</span> Higher typing speeds can save significant time in both personal and professional contexts, allowing for better time allocation to other tasks.</p>
       
       <p> <span>Communication: </span> In today's digital world, typing is often the primary means of communication. Faster typing can facilitate smoother and more effective interactions, especially in remote work settings.
       </p>
       
       <p>Career Opportunities:<span></span> Many jobs require a certain typing speed, especially in fields like administration, data entry, and content creation. Higher typing skills can enhance employability.</p>
       
      <p> <span>Learning and Exam Performance:</span> For students, being able to type quickly can help during timed exams and in completing assignments efficiently.</p>
       </Timeline.Body>
     </Timeline.Content>
   </Timeline.Item>
 </Timeline>
   </div>
  )
}

export default Working