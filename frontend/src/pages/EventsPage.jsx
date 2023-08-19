import React from 'react'
import { productData } from '../static/data'
import Headers from '../components/Layout/Headers' ;
import Footer from '../components/Layout/Footer';
import EventCards from '../components/Events/EventCards';
import styles from "../styles/styles";
const EventsPage = () => {
  return (
    <div>
          <Headers activeHeading={4} />
          <EventCards active={true}  />
        </div>

  )
}

export default EventsPage
