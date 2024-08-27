import React from 'react'

const WomenCollection = (props) => {
    const{title,ig1,ig2,ig3,ig4,ig5}=props.ladiesFashion
  return (
    <div className='collectionSection'>
        <h2>{title}</h2>
        <div className="bannerBox">
        <img src="Assets/React.avif" alt="" />
        </div>
        
        <div className="menImage">
            <img src={ig1}alt={title} />
            <img src={ig2} alt={title} />
            <img src={ig3} alt={title} />
            <img src={ig4} alt={title} />
            <img src={ig5} alt={title} />
        </div>
    </div>
  )
}

export default WomenCollection