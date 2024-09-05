
export default function Count({by, Increment, Decrement})
{
    return(<div className='counter'>
                <div>
                    <button className="decrement" onClick={()=>Decrement(by)}>-{by}</button>
                    <button className="increment" onClick={()=>Increment(by)}>+{by}</button>
                </div>
          </div>
    )

}