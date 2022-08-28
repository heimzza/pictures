import React from 'react';
import './imageList.css'

function ImageList({images}) {
    const fetchedImages = images.map(image => {
        return(
            <img key={image.id} src={image.urls.regular} alt="" />
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