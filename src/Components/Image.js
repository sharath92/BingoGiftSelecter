import React from 'react'

const Image = (props) => {
    return (
        <>
            <img className='image gift-image' src={props.imageSource} alt={props.imageSource}/>
        </>
    )
}

Image.defaultProps ={
    imageSource: 'gift.jpg'
}

export default Image
