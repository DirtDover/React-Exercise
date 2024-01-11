import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../../data/sliderData"
import React from 'react'
import { useState } from "react"

export default function Slider() {
  
    const [sliderIndex, setSliderIndex] = useState(1)  /* on initie sur la première image */
    
    function toggleImage(indexPayload) {

        let newState
        if(indexPayload +sliderIndex > sliderData.length){          /* si on arrive a la fin du tableau on revient au début en cliquant sur suivant*/
    
            newState = 1
        } 
        else if (indexPayload + sliderIndex < 1){                       /* si on est au début on boucle sur la fin en clquant sur précédent */
            newState = sliderData.length
        }
        else {                                                              /* dans les autres cas on affiche l'image suivante' */
            newState = indexPayload + sliderIndex
        }
        setSliderIndex(newState)
    }

    return (
    <>
    <p className="index-info">{sliderIndex}/{sliderData.length}</p>          {/* affichage de l'index de l'image sur le nombre total d'image */}
    <div className="slider">
        <p className="image-info">{sliderData.find(obj => obj.id === sliderIndex).description}</p>           {/* methode pour faire correspondre la bonne description avec la bonne image, pour chaque objet il va verifier si l'id correspond a l'index et afficher la bonne desc si ca correspond */}
        <img 
        src={`/images/img-${sliderIndex}.jpg`}                                                      /* l'index correspond au nom de l'image c'est pour ca que le src del'image est comme ca */
        alt={sliderData.find(obj => obj.id === sliderIndex).description} 
        className="image-slider" />         
        <button 
        onClick={()=> toggleImage(-1)}
        className="navigation-button prev-button">
        <img src={leftChevron} alt="Previous image" />
    </button>
    <button 
    onClick={()=> toggleImage(1)}
    className="navigation-button next-button">
        <img src={rightChevron} alt="Next image" />
    </button>
    </div>
    
    </>
  )
}
