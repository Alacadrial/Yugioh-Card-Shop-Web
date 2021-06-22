import './card.css'
import Button from '../button/button'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'

const Card = ({card, extended, onButtonClickAction, onIconClickAction, inCart, inWishlist}) => {
    const  [isHovered, setIsHovered] = useState(false);
    return (
        <div className="whole-wrap d-flex flex-column">
            <div className="container card-wrap "> 
                <img src={card.cardImage} alt=""/>
            </div>
            {
                extended && 
                <div className="container card-info"> 
                    <p>{card.name.substring(0,23)}</p>
                    <h6>{card.edition}</h6>
                    <h4>{card.price}$</h4>
                    <div className="clickable d-flex">
                        <Button onClickAction={() => {onButtonClickAction(card)}} buttonText={!(inCart) ? "Buy Now" : "In Cart: Add +1"}/>
                        <span className="icon">
                        <FontAwesomeIcon icon={(inWishlist || isHovered) ? fasHeart : farHeart}  onClick={() => {onIconClickAction(card)}}  onMouseOver={() => {setIsHovered(true)}} onMouseOut={() => {setIsHovered(false)}}  style={{cursor:"pointer", color: inWishlist ? "var(--colors-orange)" : ""}}  />
                        </span>
                    </div>
                </div>
            } 
        </div>
    )
}
export default Card

