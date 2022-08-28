import React from 'react';
import Image from './Image';
import './imageList.css'

function ImageList({images}) {
    const fetchedImages = images.map(image => {
        return(
            <Image key={image.id} image={image}/>
        );
    });
    return (
        <div className='imageList-container'>
            {/* {images.length} */}
            {fetchedImages}
        </div>
    );
}

export default ImageList;