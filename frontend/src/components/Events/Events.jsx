import React from 'react'
import EventCards from './EventCards'
import styles from '../../styles/styles'
const Events = () => {
  return (
    <div>
      <div className={`${styles.heading}`}>
        <h1>Popular Events</h1>
      </div>
      <div className="w-full grid">
        
         <EventCards />
      </div>
    </div>
  )
}

export default Events
