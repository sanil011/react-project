import React, { useState,Fragment } from 'react';
import data from './data';
import List from './List';
function App() {
  const [people , setPeople] = useState(data);
   console.log("first")
 return<Fragment>
  <section className='container'>
    <h3>{people.length} birthday</h3>
    {console.log("second")}
     <List people={people}/>
    <button onClick={ () =>{ setPeople([])}}>Clear All</button>
  </section>

 </Fragment>
}

export default App;
