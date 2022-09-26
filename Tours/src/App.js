import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function App() {
   const [loading , setLoading] = useState(true);
   const [tours , setTours] = useState([]);

   const removeTour = (id) =>{
    const newTours = tours.filter((tour) =>tour.id !== id);
    setTours(newTours)
   };

  const fetchTours = async () => {
    const response = await fetch ('https://course-api.com/react-tours-project');
      setLoading(true)
    if (!response.ok) {
        throw new Error('Something went wrong!');
      }
    const data = await response.json();
    setLoading(false)
    setTours(data);
  }
  useEffect(()=>{
    fetchTours();
  },[])

  if(tours.length===0)
  {
    return<div>
    <h2>No tours left</h2>
    <button  onClick={fetchTours} className='btn'>Refresh tours</button>
  </div>
  }
  return <main>

  {loading ? <Loading/> : <Tours tours={tours} removeTour={removeTour}/>}
   
  </main>
}

export default App
