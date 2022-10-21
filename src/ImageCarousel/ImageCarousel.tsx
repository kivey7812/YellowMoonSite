import { JSXElement } from '@babel/types';
import React from 'react';

interface Props {
    imagePaths: string[];
}


const ImageCarousel: React.FC<Props> = props => {

const getCarouselSlides = (imagePaths: string[]) => {
    const slides: JSX.Element[] =[];
    imagePaths.forEach((ip, index )=> {
        if(index == 0){
            slides.push (
                <div className="carousel-item active">
                        <img className="d-block w-100" src={ip} />
                    </div>
            )
        }else{
            slides.push (
                <div className="carousel-item">
                        <img className="d-block w-100" src={ip} />
                    </div>
            )
        }
    })
    return slides;
} 

const slides = getCarouselSlides(props.imagePaths);

return (<div id="carouselSlides" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {slides}
                </div>
                {slides.length > 1 && 
                <div><a className="carousel-control-prev" href="#carouselSlides" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselSlides" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a> </div>}
                
                </div>
           )
}

export default ImageCarousel;