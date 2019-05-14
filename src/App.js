import React, { Component } from 'react';
import './App.css';
import DeleteIcon from '@material-ui/icons/Delete';
import { parenthesizedExpression } from '@babel/types';

class App extends Component {
  state={
    paths: [],
    currentPath: []
  }
  
  setup=()=>{
    createCanvas(window.innerWidth, window.innerHeight)
    background(255)
  }
  
  draw=()=>{
    noFill();
    if (mouseIsPressed) {
      const point= {
        x: mouseX,
        y: mouseY
      };
      currentPath.push(point);
    }
    paths.forEach(path=>{
      beginShape();
      path.forEach(point =>{
        stroke(point.color);
        strokeWeight(point.weight);
        vertex(point.x, point.y);
      });
      endShape()
    });
  }

  mousePressed=()=>{
    currentPath=[];
    paths.push(currentPath)
  }

  render(){
  return (
    <div class="sidebar">
    <ul>
        <li>
            <label for="color">Color:</label>
            <input type="color" id="color" />
        </li>
        <li>
            <label for="weight">Stroke:</label>
            <input type="number" id="weight" min="2" max="200" value="3" />
        </li>
        <li>
            <button id="clear"><i><DeleteIcon/></i></button>
        </li>
    </ul>
</div>
  );
}
}

export default App;
