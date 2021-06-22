import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './carousel.css'
import Button from '../button/button'
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
  } from 'reactstrap';

const MainCarousel = () => {

    const items = [
        {
          src: 'https://wallpapercave.com/wp/hMQU5wD.jpg',
          altText: 'Slide 1',
          caption: 'Our store has cards from all generations.',
          smallText: 'Duel Monsters, GX, 5Ds, Zexal',
          buttonText: 'View Cards',
          direct: "/cards",
          index: 0
        },
        {
          src: 'https://www.ikea.com/images/66/2a/662a87663386aba2f052f9330ad32952.jpg?f=s',
          altText: 'Slide 2',
          caption: 'Get information about the game or our store.',
          smallText: '',
          buttonText: 'Click here',
          direct: "/about",
          index: 1
        },
      ];

    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);

    const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
    }

    const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
    }

    const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
    }

    const slides = items.map((item) => {
    return (
        <CarouselItem 
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.index}
        >
            <div className="d-flex px-5 ">
                <div className="carousel-text-container d-flex flex-column justify-content-center ps-5 pe-5">
                    <h3>{item.caption}</h3>   
                    <p>{item.smallText}</p>
                    <Link to={item.direct}>
                        <Button pOnClick={null} buttonText={item.buttonText}/>
                    </Link>
                </div>
                <div className="carousel-image-container d-flex">
                    <img className="carousel-item-image" src={item.src} alt={item.altText} />
                </div>
            </div>
        </CarouselItem>
    );
    });

    return (
        <div className="carousel-main">
            <Carousel activeIndex={activeIndex}  next={next}  previous={previous}>
                <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} />
                {slides}
                <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
                <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
            </Carousel>
        </div>
    )
}

export default MainCarousel
