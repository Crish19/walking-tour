import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import photo from '../../media/luis.jpeg'
import './blog.css'



const TouristAttractions = [
  {
    name: 'The Eiffel Tower',
    location: 'Paris, France',
    image: photo,
    description: 'An iron lattice tower located on the Champ de Mars in Paris, France, named after the engineer Gustave Eiffel, whose company designed and built the tower.'
  },
  {
    name: 'The Colosseum',
    location: 'Rome, Italy',
    image: 'https://example.com/colosseum.jpg',
    description: 'An elliptical amphitheater in the center of Rome, Italy, built of concrete and stone. It is considered one of the greatest works of Roman architecture and engineering.'
  },
  {
    name: 'The Great Wall of China',
    location: 'China',
    image: 'https://example.com/great-wall-of-china.jpg',
    description: 'A series of fortifications made of brick, tamped earth, stone, and other materials, generally built along an east-to-west line across the northern borders of China to protect against the raids and invasions of the various nomadic tribes of the Eurasian Steppe.'
  },
  {
    name: 'The Eiffel Tower',
    location: 'Paris, France',
    image: photo,
    description: 'An iron lattice tower located on the Champ de Mars in Paris, France, named after the engineer Gustave Eiffel, whose company designed and built the tower.'
  },
  {
    name: 'The Colosseum',
    location: 'Rome, Italy',
    image: 'https://example.com/colosseum.jpg',
    description: 'An elliptical amphitheater in the center of Rome, Italy, built of concrete and stone. It is considered one of the greatest works of Roman architecture and engineering.'
  },
  {
    name: 'The Great Wall of China',
    location: 'China',
    image: 'https://example.com/great-wall-of-china.jpg',
    description: 'A series of fortifications made of brick, tamped earth, stone, and other materials, generally built along an east-to-west line across the northern borders of China to protect against the raids and invasions of the various nomadic tribes of the Eurasian Steppe.'
  },
];

const Blog = () => {
  const [index, setIndex] = useState(0);
  
    const handleLeftArrowClick = () => {
      if (index > 0) {
        setIndex(index - 1);
      }
    };
  
    const handleRightArrowClick = () => {
      if (index < TouristAttractions.length - 1) {
        setIndex(index + 1);
      }
    };
  

  return (
    <div className='carousel-container'> 
      <div className="wrapper">
          <div className='cards-container'>
            
         <i className="fa-solid fa-angle-left"
            onClick={handleLeftArrowClick}></i>


       <SwipeableViews index={index} onChangeIndex={setIndex}>
        {TouristAttractions.map(attraction => (
          <div key={attraction.name}className='swipeable-views-container' >
            <h2>{attraction.name}</h2>
            <p>Location: {attraction.location}</p>
            <img src={attraction.image} alt={attraction.name} />
            <p>{attraction.description}</p>
          </div>
          
          
        ))}
        
       </SwipeableViews>

   

      
      <i className="fa-solid fa-angle-right"
            onClick={handleRightArrowClick}></i>
    </div>
    </div>
    </div>
  );
};

export default Blog;
