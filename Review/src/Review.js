import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
  const [index , setIndex] = useState(0);
  const {name,job , image , text} = people[index];
   console.log(people.length) 
  const leftClick = () =>{
    if(index ===0)
    {
      setIndex(people.length - 1)
      return
    }
    setIndex(index - 1)
  }

  const rightClick = () =>{
     if(index === people.length - 1)
    {
      setIndex(0)
      return
    }
     setIndex(index + 1)
  }

  return <article className='review'>
  <div className='img-container'>
    <img src={image} alt={name} className='person-img'/>
    <span className='quote-icon'>
      <FaQuoteRight/>
    </span>
  </div>
  <h4 className='author'>
    {name}
  </h4>
  <p className='job'>{job}</p>
  <p className='info'>{text}</p>
  <div className='button-container'>
    <button onClick={leftClick} className='prev-btn'>
      <FaChevronLeft/>
    </button>
    <button onClick={rightClick} className='next-btn'>
      <FaChevronRight/>
    </button>
    <button className='random-btn'>
      surprise me
    </button>
  </div>
  </article>
};

export default Review;
