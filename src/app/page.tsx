
import React from "react";
import Card from "./components/Card";

export default function Home() {
  return (
    
    <div>



      <div className="bg-amber-200 m-3 h-18 font-semibold mr-9 ml-5 mt-1 pl-6 pt-3 pb-3 pr-6 w-1/3 border-collapse border-2 border-red-950">
      
    <Card name='Batool Zehra'
        rollNo={1234}
        day='Monday'
        imageUrl="/image/profile2.jpg"
        timing='2 to 5'
        age={3} />
    </div>

    <br />

    <div className="font-bold text-wrap mb-2 px-16 py-4 w-1/3 h-18 border-green-800 border-collapse border-2 bg-green-200 mt-1 ml-5">
        
        <Card name='Behlol'
          rollNo={1345}
          day='Wednesday'
          imageUrl="/image/behlol.png"
          timing='6 to 9'
          age={12} />
      </div>
      <br />

      <div className="justify-center items-center font-bold text-xl bg-gray-300 mt-1 ml-5 pt-2 pb-2 pl-5 w-1/3 h-18 mr-9 border-indigo-600 border-double border-4 ">
      
        <Card
          name='Zain'
          rollNo={5678}
          day='Tuesday'
          imageUrl="/image/profile3.png"
          timing='9 to 12'
          age={16} />
      </div>
      


</div>
        
  
    
  );
}
