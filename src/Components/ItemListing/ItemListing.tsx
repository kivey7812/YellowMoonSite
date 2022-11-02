import React from 'react';
import ImageCarousel from '../ImageCarousel/ImageCarousel';


interface Props {
    title: string;
    price: string;
    images: string[];
}
const ItemListing: React.FC<Props> = (props) => {


return( <div className={"itemListing"}> 
    <div><ImageCarousel imagePaths={props.images} /></div>
    <div>{props.title}</div>
    <div>{props.price}</div>
</div>)
}