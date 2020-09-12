import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import scottyOne from '../img/1.png'
import scottyTwo from '../img/2.png'
import scottyThree from '../img/3.png'
import scottyFour from '../img/4.png'

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 4
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};
const MultiCarousel = () => {
    return (
        <div>
            <Carousel responsive={responsive}>
                <div>
                    <figure>
                        <img src={scottyOne} alt="scottyOne" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={scottyTwo} alt="scottyTwo" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={scottyThree} alt="scottyThree" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={scottyFour} alt="scottyFour" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={scottyTwo} alt="scottyTwo" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
                <div>
                    <figure>
                        <img src={scottyThree} alt="scottyThree" />
                            <figcaption>Primavera</figcaption>
                    </figure>
                </div>
            </Carousel>
        </div>
    )
}

export default MultiCarousel
