import { useState } from 'react'
import './Counter.css'
import Count from './Count'
export default function Counter()
{
    let [currentCount, setCount] = useState(0)
    function Increment(by)
    {
        setCount(currentCount + by)
    }

    function Decrement(by)
    {
        if(currentCount<=1) currentCount=0
        setCount(currentCount - by)
    }
    
    return(
        <>
            <span className='showCount'>{currentCount}</span>
            <Count by={1} Increment={Increment} Decrement={Decrement}/>
            <Count by={3} Increment={Increment} Decrement={Decrement}/>
            <Count by={5} Increment={Increment} Decrement={Decrement}/>
            <button className='reset' onClick={()=> setCount(0)}>Reset</button>
        </>
    )
}
