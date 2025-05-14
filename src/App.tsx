import React, { useState, ChangeEvent } from 'react';
import './App.css';
import Footer from './components/Footer'

interface boxDim{
  width:number;
  height:number;
}

function App() {

  const [dim, setDim] = useState<boxDim>({width :100, height :100});
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDim(prevDimensions => ({
      ...prevDimensions,
      [name]: Number(value),
    }));
  };


  return (
    <div className="App">
      <header className="App-header">
        <img src="cube-spinning.gif" className="App-image"/>
        Box Pixel Visualizer
      
      Enter pixel dimension to see how a box will look like on a website.
      <p className='subHeader'>Make sure website size is at 100% for accuracy</p>
        <div>
        <label htmlFor="width">Width:</label>
        <input
          type="number"
          id="width"
          name="width"
          value={dim.width}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          type="number"
          id="height"
          name="height"
          value={dim.height}
          onChange={handleInputChange}
        />
      </div>
      <div
        style={{
          width: `${dim.width}px`,
          height: `${dim.height}px`,
          backgroundColor: 'lightblue',
          marginTop: '10px',
          alignItems:'center'
        }}
      >
      </div>
      </header>
      <div className="body">Created by me mostly to visualized how big a box will look like when creating an element for a website or extension<br/>
      Hope you find use in it as much as I do</div>
      <Footer name = "Tylerbaze03" year = {new Date().getFullYear()} />
    </div>
    
  );
}

export default App;
