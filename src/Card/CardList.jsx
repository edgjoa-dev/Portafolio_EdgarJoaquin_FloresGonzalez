import React from 'react'
import { getWorkByPublisher } from '../Helpers/getWorkByPublisher'
import { PortCard } from './PortCard'
import '../Styles/main.scss'

export const CardList = ({publisher}) => {

    const cards = getWorkByPublisher(publisher)

    return (
        <div className="cardlist__container" >

            {
                cards.map( card => (
                    <PortCard
                    key={card.id}
                    {...card}
                    />
                ))
            }

        </div>
    )
}
