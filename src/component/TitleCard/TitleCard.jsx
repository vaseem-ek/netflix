import React, { useEffect, useRef } from 'react'
import './TitleCard.css'
import cards_data from '../../assets/cards/Cards_data'

function TitleCard() {
  // const cardsRef=useRef()
  // const handleWheel=(event)=>{
  //   event.preventDefault()
  //   cardsRef.current.scrollLeft+=event.deltaY
  // }
  // useEffect(()=>{
  //   cardsRef.current.addEventListener('wheel',handleWheel)
  // },[])
  return (
    <div className='title-cards'>
      <h2>Popular on Netflix</h2>
      {/* <div className='card-list' ref={cardsRef}> */}
      <div className='card-list' >
        {
          cards_data.map((card,index)=>(
            <div className="card" key={index}>
              <img src={card.image}  alt="" />
              <p>{card.name}</p>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default TitleCard
