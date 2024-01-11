import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import React from 'react'

export default function Slider() {
  return (
    <>
    <p className="index-info">3/5</p>
    <div className="slider">
        <p className="image-info">Bedroom</p>
        <img src="/images/img-3.jpg" alt="Bedroom" className="image-slider" />
        <button className="navigation-button prev-button">
        <img src={leftChevron} alt="Previous image" />
    </button>
    <button className="navigation-button next-button">
        <img src={rightChevron} alt="Next image" />
    </button>
    </div>
    
    </>
  )
}
