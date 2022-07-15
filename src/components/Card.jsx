import React from 'react'

export const Card = (props) => {
  
  return (
    <div className='head-div'>
      <div className='main-div'>
        <span className='img-span'><img src={props.url} alt="" /></span>
        <span>
            <div style={{fontSize: "25px", color: "red"}}>{props.name}</div>
            <div style={{color:"grey"}}>{props.variety}</div>
            <div style={{color:"grey"}}>Cost ${props.price} For one</div>
            <div>{props.time}</div>
            <div>Accepts Online payments only</div>
        </span>
        <span>
            <div style={{fontSize: "17px", backgroundColor: "green", color: "white",width: "3rem",textAlign:"center"}}>{props.rating}</div>
            <div style={{color:"grey"}}>766 votes</div>
            <div style={{color:"grey"}}>512 reviews</div>
        </span>
      </div>
      <div className='order-div'>
        <div>
          <button>Order Online</button>
        </div>
      </div>
    </div>
  )
}
