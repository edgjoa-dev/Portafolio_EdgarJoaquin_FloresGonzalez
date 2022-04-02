import React from 'react'
import { Link } from 'react-scroll'
import '../Styles/main.scss'



export const PortCard = ({

    id,
    title,
    text,
    url,

}) => {

    const imgs =  require.context(`../Assets/`, true);


    return (


        <div className="container__card box__shadow" >

            <div className="card__img rotate" >
                <img src={ imgs(`./${id}.png`)} alt={title} />
            </div>

            <div className="card__info" >
                <h2>{title}</h2>
                <p  className="info__text">{text}</p>
            </div>

            <div className="card__link" >
                <a href={url} target="_blank" rel="noreferrer noopener">Más...</a>
            </div>

        </div>
    )


}
