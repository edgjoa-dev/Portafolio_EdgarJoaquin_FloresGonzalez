import React from 'react'
import { CardList } from '../Card/CardList';
import '../Styles/main.scss';

export const PortfolioScreen = () => {

  return (
    <div  className='port__screen' id="portfolio__screen">

      <h1>Portfolio</h1>

        <CardList publisher="projects"/>
    </div>
  )
}