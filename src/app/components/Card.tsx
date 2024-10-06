import Image from 'next/image';
import React from 'react';

interface Tprops{
    name:string,
    rollNo:number,
    imageUrl:string,
    day:string,
    timing:number|string
    age:number
}
const Card =(props:Tprops)  =>{
    return(
        <div className='w-60'>
    
    
    <Image className="bg-yellow-100 w-24 h-20 sq-mx-auto " src={props.imageUrl} alt={`{Name}'s picture`} width={200}  height={500}/>
    
            <h1>Name:{props.name}</h1>
            <h1>RollNo:{props.rollNo}</h1>
             <h1>Day:{props.day}</h1>
            <h1>Timing:{props.timing}</h1>
            <h1>Age:{props.age}</h1>
            
          
    </div>
    )
}
export default Card;


